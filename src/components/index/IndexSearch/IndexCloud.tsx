const cloudColor = "#FFFFFF";

const ellipses = [
{ cx: 190, cy: 197, rx: 200, ry: 130 },
{ cx: 556,   cy: 177, rx: 210, ry: 170 },
{ cx: 900,   cy: 140, rx: 195, ry: 155 },
{ cx: 1210,  cy: 200, rx: 210, ry: 170 },
{ cx: 1530,  cy: 170, rx: 190, ry: 130 },
];

function CloudShadowFilter({ id }: { id: string }) {
	return (
		<filter
			id={id}
			x="0"
			y="0"
			width="1684"
			height="800"
			filterUnits="userSpaceOnUse"
			colorInterpolationFilters="sRGB"
		>
			<feFlood floodOpacity="0" result="BackgroundImageFix" />
			<feColorMatrix
				in="SourceAlpha"
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
				result="hardAlpha"
			/>
			<feOffset dx="20" dy="10" />
			<feGaussianBlur stdDeviation="5" />
			<feComposite in2="hardAlpha" operator="out" />
			<feColorMatrix
				type="matrix"
				values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
			/>
			<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
			<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
		</filter>
	);
}

function CloudRow({ translateY = 0, filterId }: { translateY?: number; filterId: string }) {
	return (
		<g transform={`translate(0 ${translateY})`} filter={`url(#${filterId})`}>
			{ellipses.map((e) => (
				<ellipse key={e.cx} {...e} fill={cloudColor} />
			))}
		</g>
	);
}

// 上縁の雲・中央の白地・下縁の雲を縦に並べる通常フローの背景。
// children は中央の白地に入るので、雲の大きさ(幅比例)に関係なく高さが自動で決まる。
export default function IndexCloud({ children }: { children?: React.ReactNode }) {
	return (
		<div className="relative flex flex-col overflow-x-clip">
			{/* 上の雲 */}
			<svg
				viewBox="0 0 1684 400"
				fill="none"
				className="w-full h-auto block shrink-0 overflow-visible"
			>
				<defs>
					<CloudShadowFilter id="index-cloud-shadow-top" />
				</defs>
				<CloudRow filterId="index-cloud-shadow-top" />
				<rect x="0" y="240" width="1684" height="161" fill={cloudColor} />
			</svg>

			{/* 中央の白地 */}
			<div className="min-h-[100px] bg-white relative z-10">{children}</div>

			{/* 下の雲 */}
			<svg
				viewBox="0 400 1684 400"
				fill="none"
				className="w-full h-auto block shrink-0 overflow-visible"
			>
				<defs>
					<CloudShadowFilter id="index-cloud-shadow-bottom" />
				</defs>
				<CloudRow translateY={400} filterId="index-cloud-shadow-bottom" />
				<rect x="0" y="399" width="1684" height="241" fill={cloudColor} />
			</svg>
		</div>
	);
}
