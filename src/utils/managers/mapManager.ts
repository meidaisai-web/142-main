import { Legend, Location, MapDataType, ShowLocationType } from "../models/MapDataType";
import { mapData } from "../datas/mapData";

export function searchLocation(location: Location): ShowLocationType[] {
    const data = mapData.filter((data) => data.location.includes(location));
    return groupByLegend(data);
}

export function searchLegend(legend: Legend): MapDataType[] {
    return mapData.filter((data) => data.legend === legend);
}

function groupByLegend(data: MapDataType[]): ShowLocationType[] {
    const groupedData: ShowLocationType[] = [];
    data.forEach((item) => {
        const existingGroup = groupedData.find((group) => group.legend === item.legend);
        if (existingGroup) {
            existingGroup.contents.push(item);
        } else {
            groupedData.push({
                legend: item.legend,
                contents: [item],
            });
        }
    });
    return groupedData;
}