import React from 'react';
import Emphasis from './texts/Emphasis';

type ScheduleTableProps = {
    schedule: {
        date: string
        hours: {
            hour: string,
            minutes: {
                minute: string,
                emphasized?: boolean
            }[]
        }[];
    }[];
};

export function ScheduleTable({ schedule }: ScheduleTableProps) {
    return (
        <div className="overflow-x-auto mx-auto m-5">
            <table className={`
                w-full max-w-sm sm:max-w-2xl mx-auto table-auto border-separate border-spacing-0 border-2 border-black bg-black rounded-lg overflow-hidden text-sm md:text-base
            `}>
                <thead>
                    <tr>
                        {/* 日付セル */}
                        {schedule.map((date, index) => (
                            <th
                                key={index}
                                className={`
                                    border border-black lg:p-2 py-2 bg-primary text-center text-white
                                    ${index === 0 && 'rounded-tl-lg'}
                                    ${index === schedule.length - 1 && 'rounded-tr-lg'}
                                `}
                                colSpan={2}
                            >
                                {date.date}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {schedule[0].hours.map((hour, hourIndex) => (
                        <tr key={hourIndex}>
                            {schedule.map((_, dateIndex) => (
                                <React.Fragment key={`day-${dateIndex}`} >
                                    {/* 時間セル */}
                                    <th
                                        className={`whitespace-nowrap border border-black bg-white text-center text-primary-700 font-bold sm:p-1
                                                ${hourIndex === schedule[0].hours.length - 1 && dateIndex === 0 ? 'rounded-bl-lg' : ''}
                                            `}
                                    >
                                        {hour.hour}
                                    </th>
                                    {/* 分セル */}
                                    <td
                                        className={`
                                                border border-black bg-white text-primary-700 font-bold py-1 sm:p-2
                                                ${hourIndex === schedule[0].hours.length - 1 && dateIndex === schedule.length - 1 ? 'rounded-br-lg' : ''}
                                            `}
                                    >
                                        <span className="whitespace-pre-line sm:whitespace-nowrap flex flex-col min-w-8 sm:flex-row sm:gap-2">
                                            {schedule[dateIndex].hours[hourIndex].minutes.map((minute, index) => (
                                                <React.Fragment key={index}>
                                                    {minute.emphasized ? (
                                                        <Emphasis className="w-4 md:w-5 text-center mx-auto">{minute.minute}</Emphasis>
                                                    ) : (
                                                        <span className={`w-4 md:w-5 text-center mx-auto`}>
                                                            {minute.minute}
                                                        </span>
                                                    )}
                                                </React.Fragment>
                                            ))} {/* lgサイズ時には左右に間隔を追加 */}
                                        </span>
                                    </td>
                                </React.Fragment>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};