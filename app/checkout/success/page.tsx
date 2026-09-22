import Link from "next/link";
export const metadata={title:"Order received"};
export default function Success(){return <main className="page-shell"><div className="empty-state"><p className="section-kicker">PAYMENT RECEIVED</p><h1>ORDER<br/>CONFIRMED.</h1><p>Stripe will send your receipt to the email used at checkout.</p><Link className="primary-button inline" href="/shop">CONTINUE SHOPPING</Link></div></main>}
