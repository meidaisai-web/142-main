type InfoDateProps = {
  className?: string;
  children: string;
};

export default function InfoDate({ className, children }: InfoDateProps) {
  return (
    <div className={`w-20 text-sm font-bold text-black ${className}`}>
      {children}
    </div>
  );
}