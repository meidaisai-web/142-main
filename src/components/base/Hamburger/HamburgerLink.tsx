import Link from "next/link";

export default function HamburgerLink({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <Link key={href} href={href} className="border-b border-transparent hover:border-white w-fit">
            {children}
        </Link>
    )
}