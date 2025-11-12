type NewsTitleProps = {
  children: string;
  className?: string;
};

export default function NewsTitle({ children, className }: NewsTitleProps) {
  return (
    <p className={`text-sm font-bold text-black ${className}`}>
      {children}
    </p>
  );
}