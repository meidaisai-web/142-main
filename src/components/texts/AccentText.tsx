import { ReactNode } from 'react';

type AccentTextProps = {
	children: ReactNode;
};

export default function AccentText({ children }: AccentTextProps) {
	return (
		<div>
			<h1 className="text-lg font-bold first-letter:text-accent">{children}</h1>
		</div>
	)
}