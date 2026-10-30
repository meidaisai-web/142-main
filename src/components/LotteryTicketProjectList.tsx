import TransitionLink from "@/components/buttons/TransitionLink";
import LotteryTicketBadge from "@/components/LotteryTicketBadge";
import { lotteryTicketDepartments } from "@/utils/datas/lotteryTicketProjects";

// 抽選券配付企画を局ごとに並べる。
// 企画名が折り返してもバッジの下に回り込まないよう、バッジと企画名を別の列にしている。
export default function LotteryTicketProjectList() {
    return (
        <div>
            {lotteryTicketDepartments.map(({ department, projects }) => (
                <section key={department} className="mb-3">
                    <h4 className="font-semibold">{department}</h4>
                    <ul>
                        {projects.map(({ id, name, href }) => (
                            <li key={id} className="flex items-center mb-3 font-semibold">
                                <LotteryTicketBadge id={id} className="shrink-0 mt-0.5" />
                                <span className="min-w-0 flex-1">
                                    {href ? <TransitionLink href={href}>{name}</TransitionLink> : name}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    );
}
