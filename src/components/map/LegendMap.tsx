import { mapData } from "@/utils/datas/mapData";
import MapItem from "./MapItem";

export default function LegendMap() {
    return (
        <div>
            {mapData.map((data, index) => (
                <MapItem key={index} {...data} />
            ))}
        </div>
    )
}