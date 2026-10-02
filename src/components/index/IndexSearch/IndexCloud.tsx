const cloudColor = "#FFFFFF";

const ellipses = [
	{ cx: 229.5, cy: 197, rx: 229.5, ry: 197 },
	{ cx: 574, cy: 177, rx: 165, ry: 118 },
	{ cx: 777, cy: 150.5, rx: 160, ry: 141.5 },
	{ cx: 1009, cy: 170, rx: 141, ry: 125 },
	{ cx: 1244, cy: 186, rx: 211, ry: 175 },
	{ cx: 1530, cy: 197, rx: 124, ry: 118 },
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

// 親要素(section)全体を覆う背景。上縁の雲・中央の白地・下縁の雲を縦に並べ、
// 中央の白地だけがコンテンツの高さに合わせて伸びる。
export default function IndexCloud() {
	return (
		<div
			aria-hidden
			className="absolute inset-0 z-0 flex flex-col overflow-x-clip pointer-events-none"
		>
			{/* 上の雲 */}
			<svg
				viewBox="0 0 1684 400"
				fill="none"
				preserveAspectRatio="xMidYMin slice"
				className="w-full h-auto block shrink-0 overflow-visible"
			>
				<defs>
					<CloudShadowFilter id="index-cloud-shadow-top" />
				</defs>
				<CloudRow filterId="index-cloud-shadow-top" />
				<rect x="0" y="240" width="1684" height="161" fill={cloudColor} />
			</svg>

			{/* 中央の白地 */}
			<div className="grow -my-px bg-white" />

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
