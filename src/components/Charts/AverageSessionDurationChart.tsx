import styled from "styled-components"
import {Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts"

const data = [
    {day: 1, sessionLength: 32},
    {day: 2, sessionLength: 40},
    {day: 3, sessionLength: 54},
    {day: 4, sessionLength: 30},
    {day: 5, sessionLength: 36},
    {day: 6, sessionLength: 58},
    {day: 7, sessionLength: 51},
]

const daysOfWeekFrench = ["L", "M", "M", "J", "V", "S", "D"]

const StyledTickText = styled.text<{ $active?: boolean }>`
    fill: ${props => props.$active ? " rgba(255, 255, 255, 1)" : "rgba(255, 255, 255, 0.5)"};
    font-size: 12px;
    font-weight: 500;
`

const LineChartWrapper = styled.div`
    width: 258px;
    height: 263px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #f00;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02);
`

const TooltipWrapper = styled.div`
    width: 39px;
    height: 25px;
    flex-shrink: 0;
    background: #fff;

    p {
        color: #000;
        text-align: center;
        font-size: 8px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
    }
`

const Title = styled.p`
    width: 100%;
    text-align: left;
    color: #FFF;
    font-size: 15px;
    font-weight: 500;
    line-height: 24px; /* 160% */
    opacity: 0.504;
    height: 30%;
    padding: 29px 34px 0;
`

interface CustomXAxisTickProps {
    x: number;
    y: number;
    payload: {
        value: number;
    };
}

interface CustomTooltipProps {
    active?: boolean;
    payload?: {
        value: number;
    }[];
}

const CustomXAxisTick = ({x, y, payload}: CustomXAxisTickProps) => {
    return (
        <g transform={`translate(${x},${y})`}>
            <StyledTickText x={0} y={0} dy={16} textAnchor="middle" fill="#666">
                {daysOfWeekFrench[payload.value - 1]}
            </StyledTickText>
        </g>
    )
}

const CustomTooltip = ({active, payload}: CustomTooltipProps) => {
    if (active && payload?.length) {
        return (
            <TooltipWrapper>
                <p className="label">{`${payload[0].value} min`}</p>
            </TooltipWrapper>
        )
    }
    return null
}

const AverageSessionDurationChart = () => {
    return (
        <>
            <LineChartWrapper>
                <Title>Durée moyenne des sessions</Title>
                <ResponsiveContainer width="100%" height="70%">
                    <LineChart data={data}>
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={<CustomXAxisTick/>}
                            minTickGap={27}
                            padding={{left: 12, right: 12}}
                        />
                        <YAxis
                            hide={true}
                            tickCount={60}
                            domain={["dataMin - 5", "dataMax + 5"]}
                            allowDecimals={false}/>
                        <Tooltip cursor={false} content={<CustomTooltip/>}/>
                        <Line
                            type="natural"
                            dot={false}
                            activeDot={
                                {
                                    fill: "rgba(255,255,255,1)",
                                    stroke: "rgba(255,255,255,0.5)",
                                    strokeWidth: 5,
                                    r: 4
                                }
                            }
                            dataKey="sessionLength"
                            stroke="#ffffff"
                            strokeWidth={2}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </LineChartWrapper>
        </>
    )
}

export default AverageSessionDurationChart
