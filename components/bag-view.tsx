"use client";
import { useState } from "react";
import Link from "next/link";
import { useBag } from "./bag-provider";
export function BagView(){
  const {items,remove,clear}=useBag();
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const checkoutEnabled=process.env.NEXT_PUBLIC_CHECKOUT_ENABLED==="true";
  if(items.length===0)return <div className="empty-state"><h1>YOUR BAG IS EMPTY.</h1><p>Explore the current collection.</p><Link className="primary-button inline" href="/shop">VIEW CATALOG</Link></div>;
  const cardCheckout=async()=>{setLoading(true);setError("");try{const response=await fetch("/api/checkout/stripe",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({items})});const data=await response.json();if(!response.ok||!data.url)throw new Error(data.error||"Checkout could not start.");window.location.href=data.url;}catch(reason){setError(reason instanceof Error?reason.message:"Checkout could not start.");setLoading(false);}};
  return <div className="bag-list"><h1>YOUR BAG.</h1>{items.map(item=><div className="bag-row" key={`${item.slug}-${item.size}-${item.color}`}><div><strong>{item.name}</strong><p>{item.color.toUpperCase()} / SIZE {item.size} / QTY {item.quantity}</p></div><button type="button" onClick={()=>remove(item.slug,item.size,item.color)}>REMOVE</button></div>)}{checkoutEnabled?<section className="checkout-panel" aria-labelledby="payment-heading"><p className="section-kicker">SECURE STRIPE CHECKOUT</p><h2 id="payment-heading">COMPLETE YOUR ORDER.</h2><button className="primary-button" type="button" onClick={cardCheckout} disabled={loading}>{loading?"OPENING SECURE CHECKOUT…":"CHECKOUT SECURELY →"}</button>{error&&<p className="checkout-error" role="alert">{error}</p>}<p className="payment-help">Stripe securely processes credit and debit cards. Apple Pay and Cash App Pay appear automatically when eligible.</p></section>:<section className="checkout-panel"><p className="section-kicker">DROP ACCESS</p><h2>ORDERS OPENING SOON.</h2><p className="payment-help">Follow @lustkills__ for the official release notice.</p><a className="primary-button" href="https://www.instagram.com/lustkills__/" target="_blank" rel="noreferrer">FOLLOW THE DROP →</a></section>}<button className="text-button" type="button" onClick={clear}>CLEAR BAG</button></div>
}
