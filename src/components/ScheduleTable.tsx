import React from 'react';

// ----------------------- ScheduleTable -----------------------
type ScheduleTableProps = {
    days: string[];
    times: { hours: string[], minutes: string[][] }[];
    widths?: string[]; // 列の幅を指定するプロパティを追加
    col2?: boolean;
};

const ScheduleTable: React.FC<ScheduleTableProps> = ({ days, times, widths, col2 }) => {
    return (
        <div className="overflow-x-auto mx-auto m-5">
            <table className={`
        sm:w-[76%] mx-auto table-auto border-separate border-spacing-0 border-primary border"
        ${col2 ? 'lg:w-6/12 sm:text-sm lg:text-xl' : 'sm:max-w-[420px]'}
      `}>
                <thead>
                    <tr>
                        {days.map((day, index) => {
                            const hasMinutes = times[index].minutes.some(min => min.some(m => m !== '')); // minutesが空でないか判定
                            return (
                                <th
                                    key={index}
                                    colSpan={hasMinutes ? 2 : 1} // minutesがあるときはcolSpan=2､ないときは1
                                    className={`
                    border border-primary lg:p-2 py-2 bg-secondary text-center text-white
                    ${index === 0 && 'rounded-tl-lg'}
                    ${index === days.length - 1 && 'rounded-tr-lg'}
                  `}
                                    style={{ width: widths ? widths[index] : '30%' }} // 親コンポーネントから幅を受け取る
                                >
                                    {day}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <tbody>
                    {/* 時間と分を日にちごとに横並びで表示 */}
                    {times[0].hours.map((_, rowIndex) => (
                        <tr key={rowIndex}>
                            {days.map((_, colIndex) => {
                                const hour = times[colIndex].hours[rowIndex];
                                const minutes = times[colIndex].minutes[rowIndex];
                                const hasMinutes = minutes.some(min => min !== ''); // この行のminutesが空でないか判定

                                return (
                                    <React.Fragment key={`day-${colIndex}`} >
                                        {/* 時間セル */}
                                        <td
                                            className={`whitespace-nowrap border border-primary bg-white text-center text-secondary font-bold
                      ${rowIndex === times[0].hours.length - 1 && colIndex === 0 ? 'rounded-bl-lg' : ''}
                      ${rowIndex === times[0].hours.length - 1 && colIndex === days.length - 1 && !hasMinutes ? 'rounded-br-lg' : ''}
                      ${col2 ? 'sm:text-left lg:px-8 sm:pl-2 sm:p-1' : 'lg:p-2'}
                    `}
                                            style={{ width: widths ? widths[colIndex] : '8%' }} // 親コンポーネントから幅を受け取る
                                        >
                                            {hour}
                                        </td>

                                        {/* 分セル（minutesが完全に空でない場合のみ表示） */}
                                        {hasMinutes && (
                                            <td
                                                className={`
                          border border-primary text-center lg:text-left bg-white text-secondary font-bold p-2
                          ${rowIndex === times[0].hours.length - 1 && colIndex === days.length - 1 ? 'rounded-br-lg' : ''}
                        `}
                                                style={{ width: widths ? widths[colIndex + 1] : '18%' }} // 親コンポーネントから幅を受け取る
                                            >
                                                <span className="whitespace-pre-line lg:whitespace-nowrap flex flex-col lg:flex-row lg:gap-3">
                                                    {minutes.map((minute, index) => (
                                                        <span key={index}>
                                                            {minute}
                                                        </span>
                                                    ))} {/* lgサイズ時には左右に間隔を追加 */}
                                                </span>
                                            </td>
                                        )}

                                    </React.Fragment>
                                );
                            })}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// ----------------------- MergedScheduleTable -----------------------
type MergedScheduleTableProps = {
    headers: string[][]; // ヘッダーのタイトルを二次元配列で指定
    rows: (string[] | string)[][]; // 1列目はstring[]またはstring､2列目と3列目はstring
    widths?: string[]; // 列の幅を指定するプロパティ
};

const MergedScheduleTable: React.FC<MergedScheduleTableProps> = ({ headers, rows, widths }) => {
    return (
        <div className="overflow-x-auto">
            <table className={"w-10/12 mx-auto table-auto border-separate border-spacing-0 rounded-[0.55rem] border-primary border text-xs lg:text-base"}>
                <thead>
                    <tr>
                        {headers.map((headerArray, index) => (
                            <th
                                key={index}
                                className={`border border-primary p-2 bg-secondary text-center text-white ${index === 0 ? 'rounded-tl-lg' : ''} ${index === headers.length - 1 ? 'rounded-tr-lg' : ''}`}
                                style={{ width: widths ? widths[index] : '30%' }}
                            >
                                {headerArray.map((header, headerIndex) => (
                                    <span key={headerIndex}>
                                        {header}
                                        {headerIndex < headerArray.length - 1 && <br />} {/* 最後の要素でない場合は改行 */}
                                    </span>
                                ))}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {rowIndex % 3 === 0 ? ( // 3行ごとに連結セルを表示
                                <td
                                    rowSpan={3}
                                    className={`border border-primary p-2 bg-white text-center whitespace-nowrap ${rowIndex + 3 >= rows.length ? 'rounded-bl-lg' : ''}`}
                                    style={{ width: widths ? widths[0] : '30%' }}
                                >
                                    {Array.isArray(row[0]) ? row[0].map((text, textIndex) => (
                                        <span key={textIndex}>
                                            {text}
                                            {textIndex < row[0].length - 1 && <br />} {/* 最後の要素でない場合は改行 */}
                                        </span>
                                    )) : row[0]} {/* 配列でない場合はそのまま表示 */}
                                </td>
                            ) : null}

                            <td className={`border border-primary p-2 bg-white text-left lg:pl-6`} style={{ width: widths ? widths[1] : '30%' }}>
                                {row[1]} {/* 2列目 */}
                            </td>
                            <td className={`border border-primary p-2 bg-white text-left lg:pl-6 ${rowIndex === rows.length - 1 && rowIndex % 3 === 2 ? 'rounded-br-lg' : ''}`} style={{ width: widths ? widths[2] : '30%' }}>
                                {row[2]} {/* 3列目 */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// コンポーネントをエクスポート
export { ScheduleTable, MergedScheduleTable };