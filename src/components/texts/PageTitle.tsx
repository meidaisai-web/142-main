import Image from "next/image";

type PageTitleProps = {
  children: string;
  className?: string;
};

export default function PageTitle({ children, className = "" }: PageTitleProps) {
  return (
        <div className="flex justify-center">
          <div className="relative inline-block">
            <h1 className={`bg-repeat-x bg-bottom bg-[length:24px_3px] bg-[linear-gradient(to_right,#f9a8d4_8px,transparent_0)] text-5xl font-bold text-center mt-12 pb-4 px-6 ${className}`}>
              {children}
            </h1>
            <div className="absolute -right-2 -bottom-6 translate-x-full">
              <Image src="/images/svg/airplane.svg" alt="" width={60} height={60} />
            </div>
          </div>
        </div>
  );
}