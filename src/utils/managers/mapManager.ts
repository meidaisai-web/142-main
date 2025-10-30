import { Legend, Location, MapDataType, ShowLocationType } from "../models/MapDataType";
import { mapData } from "../datas/mapData";

export function searchLocation(location: Location): ShowLocationType[] {
    const data = mapData.filter((data) => data.location.includes(location));
    return groupByLegend(data);
}

export function searchLegend(legend: Legend | null): MapDataType[] {
    if (!legend) return [];
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
                src: getLegendImageSrc(item.legend)
            });
        }
    });
    return groupedData;
}

function getLegendImageSrc(legend: Legend): string {
    const basePath = '/images/campusmap/icon/';
    switch (legend) {
        case 'インフォメーションブース':
            return `${basePath}info.png`;
        case '休憩所':
            return `${basePath}rest.png`;
        case 'バリアフリートイレ':
            return `${basePath}toilet.png`;
        case '喫煙所':
            return `${basePath}smoking.png`;
        case '公衆電話':
            return `${basePath}phone.png`;
        case 'ステージ':
            return `${basePath}stage.png`;
        case 'AED':
            return `${basePath}aed.png`;
        case 'ごみステーション':
            return `${basePath}gs.png`;
        case '自動販売機':
            return `${basePath}vending.png`;
        case 'ATM':
            return `${basePath}atm.png`;
        case '診療所':
            return `${basePath}infirmary.png`;
    }
}
