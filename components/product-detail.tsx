"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/lib/products";
import { useBag } from "./bag-provider";

export function ProductDetail({product}:{product:Product}){
  const [color,setColor]=useState(product.colorways[0]);
  const [size,setSize]=useState(product.sizes[0]);
  const [quantity,setQuantity]=useState(1);
  const [added,setAdded]=useState(false);
  const {add}=useBag();
  const colorIndex=Math.max(0,product.colorways.indexOf(color));
  const selectedImage=product.images[colorIndex]??product.images[0];
  const selectColor=(value:string)=>{setColor(value);setAdded(false);};
  const selectSize=(value:string)=>{setSize(value);setAdded(false);};

  return <main className="product-page">
    <div className="variant-gallery">
      <div className="product-art detail variant-main"><Image className="catalog-image" src={selectedImage.src} alt={selectedImage.alt} fill priority sizes="(max-width: 760px) 100vw, 58vw"/></div>
    </div>
    <div className="product-info">
      <Link className="back-link" href="/shop">← BACK TO ALL PIECES</Link>
      <p className="section-kicker">{product.category} / {product.status}</p><h1>{product.name}</h1><strong className="price">{product.price}</strong><p>{product.note}</p>
      <div className="purchase-panel">
        <fieldset><legend>SELECT COLOR <span aria-live="polite">— {color.toUpperCase()}</span></legend><div className="variant-options">{product.colorways.map(value=><button className={color===value?"selected":""} type="button" key={value} onClick={()=>selectColor(value)} aria-pressed={color===value}><i className={`color-swatch swatch-${value.toLowerCase()}`} aria-hidden="true"/>{value}<b aria-hidden="true">{color===value?"✓":""}</b></button>)}</div></fieldset>
        <fieldset><legend>SELECT SIZE <span>— {size}</span></legend><div className="size-grid">{product.sizes.map(value=><button className={size===value?"selected":""} type="button" key={value} onClick={()=>selectSize(value)} aria-pressed={size===value}>{value}</button>)}</div></fieldset>
        <div className="quantity-field">
          <span>QUANTITY</span>
          <div className="quantity-control">
            <button type="button" onClick={()=>setQuantity(value=>Math.max(1,value-1))} disabled={quantity===1} aria-label="Decrease quantity">−</button>
            <output aria-live="polite" aria-label={`Quantity ${quantity}`}>{quantity}</output>
            <button type="button" onClick={()=>setQuantity(value=>Math.min(10,value+1))} disabled={quantity===10} aria-label="Increase quantity">+</button>
          </div>
        </div>
        <button className="primary-button" type="button" onClick={()=>{add({slug:product.slug,name:product.name,size,color},quantity);setAdded(true)}}>{added?`${quantity} ADDED TO BAG ✓`:"ADD TO BAG"}</button>
        <p className="microcopy">{color} / Size {size} / Quantity {quantity}</p>
      </div>
      <dl className="product-facts"><div><dt>CARE</dt><dd>Follow the garment care label. Wash inside out with like colors and avoid ironing directly over the artwork.</dd></div><div><dt>SIZE RANGE</dt><dd>Available in S–XL. Confirm the selected size and color before adding the item to your bag.</dd></div><div><dt>DELIVERY</dt><dd>Orders process in 2–4 business days. Estimated U.S. delivery is 3–7 business days after shipment.</dd></div><div><dt>RETURNS</dt><dd>Return requests are accepted within 14 days of delivery for eligible unworn items. Review Shipping + Returns for complete terms.</dd></div></dl>
    </div>
  </main>;
}
