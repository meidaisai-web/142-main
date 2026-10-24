import Image from 'next/image';
interface LabelProps {
    children: React.ReactNode;
}

export default function Label({ children }: LabelProps) {
    return (
        <div className="pr-1 py-1 flex justify-center">
            
            
            
            <div className={` transition duration-100  py-1 relative z-10 w-[5.5em] aspect-[5/3] flex items-center justify-center`}>
                <Image src="/images/EventListView/pcloud.svg" alt="" width={100} height={100} className="absolute top-0 left-0 w-full h-full -z-10" />
                <p className='text-center'>{children}</p>
            </div>
        </div>
    )
}
