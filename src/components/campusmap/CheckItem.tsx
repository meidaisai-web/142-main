// public/images/campusmap/Union.svg の雲形
const CLOUD_PATH = "M29.3427 47.1434C32.1302 32.4634 43.6725 20.565 58.6679 18.5379C67.7727 17.3071 76.4656 19.944 83.2381 25.2242C87.1435 16.904 95.1484 10.6258 104.952 9.30051C116.142 7.78797 126.516 13.1561 131.783 22.1175C144.387 21.1639 155.402 26.3468 159.119 36.1696C159.655 37.587 160.015 39.0441 160.213 40.5242C169.988 43.2266 177.083 48.7466 179.373 56.5938C181.672 64.4667 178.721 73.2702 172.034 81.324C174.169 85.8725 175.134 90.9354 174.61 96.1673C172.924 113.011 156.461 125.222 137.84 123.44C132.827 122.96 128.17 121.514 124.071 119.329C120.733 126.135 114.438 131.151 106.773 132.187C97.4786 133.444 88.8108 128.495 84.4048 120.363C80.5268 122.5 76.1535 123.987 71.4515 124.623C53.4167 127.061 37.2309 116.107 34.6639 99.9971C21.5468 99.2966 10.6214 89.7519 9.12719 76.729C7.60486 63.4597 16.3902 51.0831 29.3427 47.1434Z";

export default function CheckItem({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
    return (
        <label className="flex items-center gap-2 font-bold cursor-pointer">
            <input type="checkbox" checked={checked} onChange={onChange} className="peer sr-only" />
            <svg
                aria-hidden
                viewBox="0 0 190 142"
                className="h-7 w-[37px] shrink-0 rounded-md peer-focus-visible:ring-2 peer-focus-visible:ring-[#9A8EC0]"
            >
                {/* 縁取りを先に描き、塗りで内側の線を隠して外側だけ見せる */}
                <path d={CLOUD_PATH} fill="#9A8EC0" stroke="#9A8EC0" strokeWidth="18" strokeLinejoin="round" />
                <path d={CLOUD_PATH} fill={checked ? '#9A8EC0' : '#D9D2E3'} />
                {checked && (
                    <path d="M64 78L88 102L128 54" fill="none" stroke="white" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" />
                )}
            </svg>
            <span>{label}</span>
        </label>
    )
}
