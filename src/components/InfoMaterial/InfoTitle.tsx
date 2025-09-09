type InfoTitleProps = {
  children: string;
  link?: string;
};

export default function InfoTitle({ children, link }: InfoTitleProps) {
  if (link) {
    return (
      <a
        href={link}
        className="text-sm font-bold text-black truncate cursor-pointer"
      >
        {children}
      </a>
    );
  }
  return <p className="text-sm font-bold text-black truncate">{children}</p>;
}
