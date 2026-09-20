import { getProduct } from "./products";

export type CheckoutItem={slug:string;size:string;color:string;quantity:number};

export function validateCart(input:unknown){
  if(!Array.isArray(input)||input.length===0||input.length>20)throw new Error("Your bag is empty or too large.");
  return input.map((raw)=>{
    const item=raw as Partial<CheckoutItem>;
    const product=typeof item.slug==="string"?getProduct(item.slug):undefined;
    const quantity=Number(item.quantity);
    if(!product||!product.sizes.includes(String(item.size))||!product.colorways.includes(String(item.color))||!Number.isInteger(quantity)||quantity<1||quantity>10)throw new Error("One or more bag items are invalid.");
    return {product,size:String(item.size),color:String(item.color),quantity};
  });
}
