import Link from "next/link";

export default function HamburgerLink({ children, href }: { children: React.ReactNode; href: string }) {
    return (
        <Link key={href} href={href} className="border-b-2 border-transparent hover:border-accent-700 w-fit">
            {children}
        </Link>
    )
}