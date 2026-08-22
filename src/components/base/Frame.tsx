interface FrameProps {
  children: React.ReactNode;
  className?: string;
}

export default function Frame({
  children,
  className = "",
}: FrameProps) {
  return (
    <div className={`relative rounded-[40px] border-2 border-white sm:rounded-[46px] m-15 p-30 shadow-lg ${className}`}>
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

// 四隅のボルト1個分のコンポーネント
function CornerBolt({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const positionClasses: Record<typeof position, string> = {
    tl: "top-[6%] left-[7%] lg:left-[5%] -translate-x-1/2 -translate-y-1/2",
    tr: "top-[6%] right-[7%] lg:right-[5%] translate-x-1/2 -translate-y-1/2",
    bl: "bottom-[6%] left-[7%] lg:left-[5%] -translate-x-1/2 translate-y-1/2",
    br: "bottom-[6%] right-[7%] lg:right-[5%] translate-x-1/2 translate-y-1/2",
  };
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 h-7 w-7 lg:h-10 lg:w-10 rounded-full border border-white bg-gradient-to-b from-[#9ECBC7] to-white shadow-[0_1px_2px_rgba(0,0,0,0.15)] ${positionClasses[position]}`}
    />
  );
}