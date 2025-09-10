import { ReactNode } from 'react';

type AccentTextProps = {
	children: ReactNode;
	className?: string;
};

export default function AccentText({ children, className }: AccentTextProps) {
	return (
		<div className={className}>
			<h1 className="text-lg font-bold first-letter:text-accent pt-6">{children}</h1>
		</div>
	)
}