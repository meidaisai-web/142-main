type InfoStampProps = {
  type: "重要" | "更新" | "お知らせ";
};

export default function InfoStamp({ type }: InfoStampProps) {
  const getBackgroundColor = () => {
    switch (type) {
      case "重要":
        return "bg-primary";
      case "更新":
        return "bg-secondary";
      case "お知らせ":
        return "bg-accent";
    }
  };

  return (
    <span
      className={`px-4 py-1 w-16 mr-4 rounded-full text-xs text-white font-bold whitespace-nowrap flex items-center justify-center transform -translate-x-4 md:translate-x-0 ${getBackgroundColor()}`}
    >
      {type}
    </span>
  );
}
