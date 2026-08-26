interface FrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function Frame({
  children,
  className = "",
}: FrameProps) {
  return (
    <div className="flex justify-center">
      <div className={`relative rounded-3xl border-2 border-white sm:rounded-2xl mx-5 p-13 sm:mx-10 shadow-lg mt-6 max-w-4xl ${className}`}>
        <CornerBolt position="tl" />
        <CornerBolt position="tr" />
        <CornerBolt position="bl" />
        <CornerBolt position="br" />
        <div className={`relative z-0 h-full w-full`}>
          {children}
        </div>
      </div>
    </div>
  );
}

// 四隅の丸1個分のコンポーネント
function CornerBolt({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const positionClasses: Record<typeof position, string> = {
    tl: "top-7 left-7 -translate-x-1/2 -translate-y-1/2",
    tr: "top-7 right-7 translate-x-1/2 -translate-y-1/2",
    bl: "bottom-7 left-7 -translate-x-1/2 translate-y-1/2",
    br: "bottom-7 right-7 translate-x-1/2 translate-y-1/2",
  };
  const gradientClasses: Record<typeof position, string> = {
    tl: "bg-gradient-to-br",
    tr: "bg-gradient-to-bl",
    bl: "bg-gradient-to-tr",
    br: "bg-gradient-to-tl",
  };
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 rounded-full border border-white ${gradientClasses[position]} from-primary-700 to-white shadow-[0_1px_2px_rgba(0,0,0,0.15)] ${positionClasses[position]}`}
    />
  );
}