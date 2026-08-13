import Image from "next/image";

type PageTitleProps = {
  children: string;
  className?: string;
};

export default function PageTitle({ children, className = "" }: PageTitleProps) {
  const text = typeof children === "string" ? children : "";
  const rest = text.slice(0, -1);
  const last = text.slice(-1);

  return (
    <div className="flex justify-center">
      <h1
        className={`text-3xl md:text-4xl font-bold text-center mt-8 sm:mt-10 md:mt-12 p-3 sm:p-4 md:p-6 pb-2 sm:pb-3 md:pb-4 leading-[1.8] ${className}`}
      >
        <span className="box-decoration-clone bg-repeat-x bg-bottom bg-[length:16px_2px] sm:bg-[length:20px_2px] md:bg-[length:24px_3px] bg-[linear-gradient(to_right,var(--color-secondary-700)_10px,transparent_0)] pb-1 pl-4 sm:pl-5 md:pl-7">
          {rest}
          <span className="whitespace-nowrap">
            {last}
            <span className="relative inline-block align-bottom shrink-0 w-14 h-14 sm:w-16 sm:h-16 md:w-[68px] md:h-[68px] -mb-5 sm:-mb-6">
              <span className="absolute inset-y-0 right-0 bg-background w-8" />
              <Image
                src="/images/svg/airplane.svg"
                alt=""
                width={60}
                height={60}
                className="relative block w-full h-full transform translate-x-8"
              />
            </span>
          </span>
        </span>
      </h1>
    </div>
  );
}