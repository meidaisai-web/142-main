type NewsDateProps = {
  className?: string;
  children: string;
};

export default function NewsDate({ className, children }: NewsDateProps) {
  return (
    <div className={`w-20 text-sm font-bold text-black ${className}`}>
      {children}
    </div>
  );
}