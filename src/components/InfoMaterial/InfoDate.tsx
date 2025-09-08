type InfoDateProps = {
  className?: string;
  children: string;
};

export default function InfoDate({ className, children }: InfoDateProps) {
  return (
    <div className={`w-20 ${className}`}>
      <h3 className="text-sm font-bold text-black">
        {children}
      </h3>
    </div>
  );
}
