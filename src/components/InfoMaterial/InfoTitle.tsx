type InfoTitleProps = {
  children: string;
};

export default function InfoTitle({ children }: InfoTitleProps) {
  return (
    <p className="text-sm font-bold text-black truncate">
      {children}
    </p>
  );
}
