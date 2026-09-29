import Image from "next/image";
import TransitionLink from "@/components/buttons/TransitionLink";
import Text from "@/components/texts/Text";

type NoticeProps = {
    children: React.ReactNode;
    time: string;
};

export default function Notice({
    children,
    time,
}: NoticeProps) {
    return (
        <div className="mx-auto w-[80%] md:w-full max-w-2xl overflow-hidden rounded-[20px] border-[7px] border-accent-700 bg-white mt-70">
            <div className="bg-accent-700 py-5">
                <Text center className="text-3xl font-bold md:text-4xl text-white">
                    重要なお知らせ
                </Text>
            </div>

            <div className="relative">
                <div className="px-10 py-5 sm:py-10">
                    <div className="flex flex-col sm:flex-row items-center sm:gap-6">
                        <div className="shrink-0 w-[20%] max-w-[120px] min-w-[50px]">
                            <Image
                                src="/images/info/info.svg"
                                alt="注意マーク"
                                width={140}
                                height={140}
                                className="h-auto w-full"
                            />
                        </div>

                        <div>
                            <Text noJustify className="flex items-center min-w-0 flex-1">
                                {children}
                            </Text>

                            <Text noJustify>
                                詳しくは
                                <TransitionLink href="/infomation">
                                    こちら
                                </TransitionLink>
                                をご覧ください。
                            </Text>
                        </div>
                    </div>

                    <Text className="text-right">
                        更新日時　{time}
                    </Text>
                </div>
            </div>
        </div>
    );
}