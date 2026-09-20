export type Product = { slug:string; name:string; category:string; price:string; priceCents:number; note:string; sizes:string[]; colorways:string[]; images:{src:string;alt:string}[]; status:string };

export const products: Product[] = [
  { slug:"money-calling-tee", name:"MONEY CALLING TEE", category:"Tee", price:"$55", priceCents:5500, note:"A statement tee built around ambition, pressure, and answering the call to pursue more.", sizes:["S","M","L","XL"], colorways:["White"], images:[{src:"/products/IMG_6454(2).jpeg",alt:"White Money Calling graphic tee"}], status:"Drop 001" },
  { slug:"desire-pays-long-sleeve", name:"DESIRE PAYS LONG SLEEVE", category:"Long Sleeve", price:"$75", priceCents:7500, note:"One design offered in two colorways, exploring the line between desire, money, and consequence.", sizes:["S","M","L","XL"], colorways:["Bone","Black"], images:[{src:"/products/IMG_6453(2).jpeg",alt:"Bone Desire Pays graphic long-sleeve shirt"},{src:"/products/IMG_6452(2).jpeg",alt:"Black Desire Pays graphic long-sleeve shirt"}], status:"Drop 001" },
  { slug:"fatal-attraction-tee", name:"FATAL ATTRACTION TEE", category:"Tee", price:"$55", priceCents:5500, note:"A vintage-inspired graphic tee about temptation becoming impossible to ignore.", sizes:["S","M","L","XL"], colorways:["White"], images:[{src:"/products/IMG_6451(2).jpeg",alt:"White Fatal Attraction graphic tee"}], status:"Drop 001" },
];

export function getProduct(slug:string){ return products.find((product)=>product.slug===slug); }
