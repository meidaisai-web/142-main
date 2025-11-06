import Link from "next/link";

type NewsTitleProps = {
  children: string;
  link?: string;
  className?: string;
};

export default function NewsTitle({ children, link, className }: NewsTitleProps) {
  if (link) {
    return (
      <Link href={link} className={`text-sm font-bold text-black cursor-pointer ${className}`}>
        {children}
      </Link>
    );
  }
  return <p className="text-sm font-bold text-black">{children}</p>;
}