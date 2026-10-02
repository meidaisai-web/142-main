import Image from "next/image";

export default function Page() {
    return(
    <div className="relative w-screen h-full">
         <Image
            src="/images/svg/trump.png"
            alt="Trump Image"
            width={500}   
            height={500}
            className="absolute top-0 left-0 right-0 bottom-0 m-auto w-4/5 max-w-40"
            />
    </div>
    );
}
