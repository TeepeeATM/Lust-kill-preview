import Link from "next/link";
export const metadata={title:"Order received"};
export default function Success(){return <main className="page-shell"><div className="empty-state"><p className="section-kicker">PAYMENT RECEIVED</p><h1>ORDER<br/>CONFIRMED.</h1><p>A receipt will be sent by the connected payment provider.</p><Link className="primary-button inline" href="/shop">BACK TO THE DROP</Link></div></main>}
