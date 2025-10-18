type NewsTagProps = {
  type: "重要" | "更新" | "お知らせ";
};

export default function NewsTag({ type }: NewsTagProps) {
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
      className={`px-4 py-1 w-16 rounded-full text-xs whitespace-nowrap flex items-center justify-center font-semibold  ${getBackgroundColor()}`}
    >
      {type}
    </span>
  );
}