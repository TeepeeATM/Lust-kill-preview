import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
export function ProductCard({product,index}:{product:Product;index:number}){const image=product.images[0];return <article className="product-card"><Link href={`/shop/${product.slug}`} aria-label={`View ${product.name}`}><div className={`product-art art-${index%4}`}><Image className="catalog-image" src={image.src} alt={image.alt} fill sizes="(max-width: 420px) 100vw, 50vw"/></div><div className="product-meta"><div><h2>{product.name}</h2><p>{product.category} / {product.colorways.join(" + ")}</p></div><strong>{product.price}</strong></div></Link></article>}
