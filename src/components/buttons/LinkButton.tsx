import type { ComponentProps } from "react";
import Button from "./Button";

type LinkButtonProps = Omit<ComponentProps<typeof Button>, "href"> & {
  href: string;
};

/** 指定したページへ移動するボタン。例: <LinkButton href="/access">アクセス</LinkButton> */
export default function LinkButton(props: LinkButtonProps) {
  return <Button {...props} />;
}
