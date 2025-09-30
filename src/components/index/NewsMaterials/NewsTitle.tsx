type NewsTitleProps = {
  children: string;
  link?: string;
  className?: string;
};

export default function NewsTitle({ children, link, className }: NewsTitleProps) {
  if (link) {
    return (
      <a href={link} className={`text-sm font-bold text-black cursor-pointer ${className}`}>
        {children}
      </a>
    );
  }
  return <p className="text-sm font-bold text-black">{children}</p>;
}