interface FrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function Frame({
  children,
  className = "",
}: FrameProps) {
  return (
    <div className={`flex items-center relative rounded-[30px] border-2 border-white sm:rounded-[35px] m-10 p-20 lg:m-60 lg:p-45 shadow-lg ${className}`}>
      <CornerBolt position="tl" />
      <CornerBolt position="tr" />
      <CornerBolt position="bl" />
      <CornerBolt position="br" />
      <div className={`relative z-0 h-full w-full`}>
        {children}
      </div>
    </div>
  );
}

// 四隅の丸1個分のコンポーネント
function CornerBolt({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const positionClasses: Record<typeof position, string> = {
    tl: "top-[6%] left-[7%] lg:left-[4%] -translate-x-1/2 -translate-y-1/2",
    tr: "top-[6%] right-[7%] lg:right-[4%] translate-x-1/2 -translate-y-1/2",
    bl: "bottom-[6%] left-[7%] lg:left-[4%] -translate-x-1/2 translate-y-1/2",
    br: "bottom-[6%] right-[7%] lg:right-[4%] translate-x-1/2 translate-y-1/2",
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
      className={`pointer-events-none absolute z-10 h-6 w-6 sm:h-8 sm:w-8 lg:h-9 lg:w-9 rounded-full border border-white ${gradientClasses[position]} from-primary-700 to-white shadow-[0_1px_2px_rgba(0,0,0,0.15)] ${positionClasses[position]}`}
    />
  );
}