import styled from "styled-components"
import {PolarAngleAxis, PolarGrid, Radar, RadarChart, ResponsiveContainer} from "recharts"

const data = [
    {
        userId: 18,
        kind: {
            1: "cardio",
            2: "energy",
            3: "endurance",
            4: "strength",
            5: "speed",
            6: "intensity"
        },
        data: [
            {
                value: 200,
                kind: 1
            },
            {
                value: 240,
                kind: 2
            },
            {
                value: 80,
                kind: 3
            },
            {
                value: 80,
                kind: 4
            },
            {
                value: 220,
                kind: 5
            },
            {
                value: 110,
                kind: 6
            }
        ]
    }
]

const RadarChartWrapper = styled.div`
    width: 258px;
    height: 263px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #282D30;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.02);
`

const PolarAngleText = styled.text`
    color: #FFF;
    font-size: 12px;
    font-weight: 500;
`

const CustomPolarAngleAxis = ({cx, cy, x, y, angle, radius, payload}) => {
    return (
        <PolarAngleText y={y + (y - cy) / 6}
                        x={x + (x - cx) / 6} fill="#ffffff" textAnchor="middle">
            {payload.value}
        </PolarAngleText>
    )
}

const ActivityTypeChart = () => {
    const userData = data[0]

    const radarData = userData.data.map(item => ({
        kind: userData.kind[item.kind].charAt(0).toUpperCase() + userData.kind[item.kind].slice(1),
        value: item.value
    }))
    return (
        <>
            <RadarChartWrapper>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={90} data={radarData}>
                        <PolarGrid/>
                        <PolarAngleAxis dataKey="kind" tick={<CustomPolarAngleAxis/>}/>
                        <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.7}/>
                    </RadarChart>
                </ResponsiveContainer>
            </RadarChartWrapper>
        </>
    )
}
export default ActivityTypeChart