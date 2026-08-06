import { ReactNode } from 'react';

type AccentTextProps = {
	children: ReactNode;
	className?: string;
};

export default function AccentText({ children, className }: AccentTextProps) {
	return (
		<div className={className}>
			<h1 className="">{children}</h1>
		</div>
	)
}