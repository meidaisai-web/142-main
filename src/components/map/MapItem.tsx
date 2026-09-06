import { MapDataType } from "@/utils/models/MapDataType";
import Emphasis from "../texts/Emphasis";
import Image from "next/image";

export default function MapItem({ name, description, src }: MapDataType) {
    return (
        <div className="border-secondary border-4 rounded-xl bg-white text-black p-4 w-full">
            <h3 className="text-base font-black text-center mb-3"><Emphasis bold secondary>{name}</Emphasis></h3>
            <div className="flex items-start text-sm">
                <Image src={src} alt={name} width={200} height={200} className="w-1/3 max-w-40 aspect-square object-cover mr-4 rounded-lg" />
                <p className="">{description}</p>
            </div>
        </div>
    )
}