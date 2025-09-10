type InfoTitleProps = {
  children: string;
  link?: string;
};

export default function InfoTitle({ children, link }: InfoTitleProps) {
  if (link) {
    return (
      <a href={link} className="text-sm font-bold text-black cursor-pointer">
        {children}
      </a>
    );
  }
  return <p className="text-sm font-bold text-black">{children}</p>;
}