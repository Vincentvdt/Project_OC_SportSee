import {Bar, BarChart, CartesianGrid, Legend, Tooltip, TooltipProps, XAxis, YAxis} from "recharts"
import styled from "styled-components"
import React from "react"

const data = [
    {
        day: "2020-07-01",
        kilogram: 80,
        calories: 240
    },
    {
        day: "2020-07-02",
        kilogram: 80,
        calories: 220
    },
    {
        day: "2020-07-03",
        kilogram: 81,
        calories: 280
    },
    {
        day: "2020-07-04",
        kilogram: 81,
        calories: 290
    },
    {
        day: "2020-07-05",
        kilogram: 80,
        calories: 160
    },
    {
        day: "2020-07-06",
        kilogram: 78,
        calories: 162
    },
    {
        day: "2020-07-07",
        kilogram: 76,
        calories: 390
    }
]


const BarChartTitle = styled.div`
    color: #20253A;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 160% */
    text-align: left;
`

const LegendText = styled.span`
    color: #74798C;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px; /* 171.429% */
    margin-left: 4px;
`


const TooltipWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #E60000;
    gap: 7px;
    padding: 4px 6px;
    color: #FFF;
    text-align: center;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;
`

interface CustomTooltipProps {
    active?: boolean;
    payload?: TooltipProps<never, never>["payload"];
}

const CustomTooltip: React.FC<CustomTooltipProps> = ({active, payload}) => {
    if (active && payload?.length) {
        return (
            <TooltipWrapper>
                {payload.map((entry, index) => (
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    <span key={index}>{`${entry.value}${entry.unit}`}</span>
                ))}
            </TooltipWrapper>
        )
    }
    return null
}

const BarChartWrapper = styled.div`
    position: relative;
    border-radius: 5px;
    background: #FBFBFB;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02);
    padding: 23px 30px;
`

interface BarChartProps {
    width: number,
    height: number
}


const DailyActiviyChart = ({width, height}: BarChartProps) => {
    return (
        <>
            <BarChartWrapper>
                <BarChartTitle>Activité quotidienne</BarChartTitle>
                <BarChart width={width} height={height} data={data}
                          barGap={8}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
                    {/* eslint-disable-next-line @typescript-eslint/no-unsafe-return */}
                    <XAxis tickFormatter={(index) => index + 1} tickMargin={10} tickSize={14} tickLine={false} tick={{
                        fill: "#9B9EAC",
                        fontWeight: "500",
                    }}/>
                    <YAxis orientation={"right"} tickMargin={10} tickSize={14} tick={{
                        fill: "#9B9EAC",
                        fontWeight: "500",
                    }} axisLine={false} tickLine={false}/>
                    <Tooltip content={<CustomTooltip/>}/>
                    <Legend
                        wrapperStyle={{top: -24}}
                        align="right" verticalAlign="top"
                        iconType="circle" iconSize={12}
                        formatter={(value, entry) => {
                            return <LegendText>{value} ({entry.payload.unit})</LegendText>
                        }}/>
                    <Bar name="Poids" unit="kg" dataKey="kilogram" fill="#282D30" barSize={7}
                         radius={[10, 10, 0, 0]}/>
                    <Bar name="Calories brûlées" unit="kCal" dataKey="calories" fill="#E60000" barSize={7}
                         radius={[10, 10, 0, 0]}/>
                </BarChart>
            </BarChartWrapper>
        </>
    )
}

export default DailyActiviyChart