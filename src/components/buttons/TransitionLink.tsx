import Link from "next/link";

type TransitionLinkProps = {
  href: string;
  children: React.ReactNode;
  // true、もしくはtargetBlankを指定した場合は新しいタブで開く
  targetBlank?: boolean;
  className?: string;
};

export default function TransitionLink({
  href,
  children,
  className,
  targetBlank,
}: TransitionLinkProps) {
  return (
    <span className={className}>
      <Link
        href={href}
        className={`text-accent-900 border-b border-accent-900 hover:text-secondary-700 hover:border-secondary-700 font-bold`}
        target={targetBlank ? "_blank" : "_self"}
      >
        {children}
      </Link>
    </span>
    
  );
}