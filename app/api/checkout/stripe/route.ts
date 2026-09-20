import { NextResponse } from "next/server";
import { validateCart } from "@/lib/checkout";
import { getStripe } from "@/lib/stripe";

export async function POST(request:Request){
  try{
    const {items}=await request.json();
    const cart=validateCart(items);
    const subtotal=cart.reduce((sum,item)=>sum+item.product.priceCents*item.quantity,0);
    const origin=process.env.NEXT_PUBLIC_SITE_URL||new URL(request.url).origin;
    const session=await getStripe().checkout.sessions.create({
      mode:"payment",
      line_items:cart.map(({product,size,color,quantity})=>({quantity,price_data:{currency:"usd",unit_amount:product.priceCents,product_data:{name:product.name,description:`Size ${size} / ${color}`,metadata:{slug:product.slug,size,color}}}})),
      shipping_address_collection:{allowed_countries:["US"]},
      shipping_options:subtotal>=10000?[{shipping_rate_data:{type:"fixed_amount",fixed_amount:{amount:0,currency:"usd"},display_name:"Free standard shipping",delivery_estimate:{minimum:{unit:"business_day",value:3},maximum:{unit:"business_day",value:7}}}}]:[{shipping_rate_data:{type:"fixed_amount",fixed_amount:{amount:695,currency:"usd"},display_name:"Standard shipping",delivery_estimate:{minimum:{unit:"business_day",value:3},maximum:{unit:"business_day",value:7}}}}],
      phone_number_collection:{enabled:true},
      allow_promotion_codes:true,
      success_url:`${origin}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url:`${origin}/bag`,
      metadata:{source:"lust-kills-storefront"},
    });
    return NextResponse.json({url:session.url});
  }catch(error){return NextResponse.json({error:error instanceof Error?error.message:"Checkout could not start."},{status:400});}
}
