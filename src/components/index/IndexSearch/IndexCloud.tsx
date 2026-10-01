export default function IndexCloud() {
	const cloudColor = "#FFFFFF";

	return (
<div className="absolute z-10 left-0 w-full overflow-hidden -translate-y-7/12">
	<svg
		viewBox="0 0 1684 800"
		fill="none"
		className="w-full h-auto block"
		style={{
			transform: "scale(1.1)",
			transformOrigin: "top center",
		}}
	>
		{/* 上の雲 */}
		<g filter="url(#index-cloud-shadow)">
			<ellipse
				cx="229.5"
				cy="197"
				rx="229.5"
				ry="197"
				fill={cloudColor}
			/>
			<ellipse
				cx="574"
				cy="177"
				rx="165"
				ry="118"
				fill={cloudColor}
			/>
			<ellipse
				cx="777"
				cy="150.5"
				rx="160"
				ry="141.5"
				fill={cloudColor}
			/>
			<ellipse
				cx="1009"
				cy="170"
				rx="141"
				ry="125"
				fill={cloudColor}
			/>
			<ellipse
				cx="1244"
				cy="186"
				rx="211"
				ry="175"
				fill={cloudColor}
			/>
			<ellipse
				cx="1530"
				cy="197"
				rx="124"
				ry="118"
				fill={cloudColor}
			/>
		</g>

		{/* 下の雲 */}
		<g
			transform="translate(0 400)"
			filter="url(#index-cloud-shadow)"
		>
			<ellipse
				cx="229.5"
				cy="197"
				rx="229.5"
				ry="197"
				fill={cloudColor}
			/>
			<ellipse
				cx="574"
				cy="177"
				rx="165"
				ry="118"
				fill={cloudColor}
			/>
			<ellipse
				cx="777"
				cy="150.5"
				rx="160"
				ry="141.5"
				fill={cloudColor}
			/>
			<ellipse
				cx="1009"
				cy="170"
				rx="141"
				ry="125"
				fill={cloudColor}
			/>
			<ellipse
				cx="1244"
				cy="186"
				rx="211"
				ry="175"
				fill={cloudColor}
			/>
			<ellipse
				cx="1530"
				cy="197"
				rx="124"
				ry="118"
				fill={cloudColor}
			/>
		</g>
        {/* 一番上にくる白い帯 */}
		<rect
			x="0"
			y="240"
			width="1684"
			height="400"
			fill="#FFFFFF"
		/>

				<defs>
					<filter
						id="index-cloud-shadow"
						x="0"
						y="0"
						width="1684"
						height="800"
						filterUnits="userSpaceOnUse"
						colorInterpolationFilters="sRGB"
					>
						<feFlood
							floodOpacity="0"
							result="BackgroundImageFix"
						/>

						<feColorMatrix
							in="SourceAlpha"
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
							result="hardAlpha"
						/>

						<feOffset dx="20" dy="10" />

						<feGaussianBlur stdDeviation="5" />

						<feComposite
							in2="hardAlpha"
							operator="out"
						/>

						<feColorMatrix
							type="matrix"
							values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
						/>

						<feBlend
							mode="normal"
							in2="BackgroundImageFix"
							result="effect1_dropShadow"
						/>

						<feBlend
							mode="normal"
							in="SourceGraphic"
							in2="effect1_dropShadow"
							result="shape"
						/>
					</filter>
				</defs>
			</svg>

			<div className="h-100" />
		</div>
	);
}