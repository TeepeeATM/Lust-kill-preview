import Link from "next/link";
export function LegalPage({kicker,title,children}:{kicker:string;title:string;children:React.ReactNode}){return <main className="legal-page"><p className="section-kicker">{kicker}</p><h1>{title}</h1><div className="legal-copy">{children}</div><Link className="back-link" href="/legal">VIEW ALL LEGAL PAGES →</Link></main>}
