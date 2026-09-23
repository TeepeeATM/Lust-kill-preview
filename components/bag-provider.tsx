"use client";
import { createContext, useContext, useEffect, useMemo, useState } from "react";
export type BagItem={slug:string;name:string;size:string;color:string;quantity:number};
type BagContextValue={items:BagItem[];count:number;add:(item:Omit<BagItem,"quantity">,quantity?:number)=>void;decrease:(slug:string,size:string,color:string)=>void;remove:(slug:string,size:string,color:string)=>void;clear:()=>void};
const BagContext=createContext<BagContextValue|null>(null);
const KEY="lust-kills-bag-v1";
export function BagProvider({children}:{children:React.ReactNode}){
  const [items,setItems]=useState<BagItem[]>([]);
  useEffect(()=>{try{const saved=window.localStorage.getItem(KEY);if(saved)setItems(JSON.parse(saved));}catch{}},[]);
  useEffect(()=>{window.localStorage.setItem(KEY,JSON.stringify(items));},[items]);
  const value=useMemo(()=>({items,count:items.reduce((sum,item)=>sum+item.quantity,0),add:(next:Omit<BagItem,"quantity">,quantity=1)=>setItems(current=>{const found=current.find(item=>item.slug===next.slug&&item.size===next.size&&item.color===next.color);return found?current.map(item=>item===found?{...item,quantity:Math.min(10,item.quantity+quantity)}:item):[...current,{...next,quantity:Math.min(10,quantity)}]}),decrease:(slug:string,size:string,color:string)=>setItems(current=>current.flatMap(item=>item.slug===slug&&item.size===size&&item.color===color?(item.quantity>1?[{...item,quantity:item.quantity-1}]:[]):[item])),remove:(slug:string,size:string,color:string)=>setItems(current=>current.filter(item=>!(item.slug===slug&&item.size===size&&item.color===color))),clear:()=>setItems([])}),[items]);
  return <BagContext.Provider value={value}>{children}</BagContext.Provider>;
}
export function useBag(){const value=useContext(BagContext);if(!value)throw new Error("useBag must be inside BagProvider");return value;}
