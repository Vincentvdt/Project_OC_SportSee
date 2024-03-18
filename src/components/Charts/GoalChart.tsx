import styled from "styled-components"
import {RadialBar, RadialBarChart, ResponsiveContainer} from "recharts"

const USER_MAIN_DATA = [
    {
        id: 12,
        userInfos: {
            firstName: "Karl",
            lastName: "Dovineau",
            age: 31,
        },
        score: 0.12,
        keyData: {
            calorieCount: 1930,
            proteinCount: 155,
            carbohydrateCount: 290,
            lipidCount: 50
        }
    },
    {
        id: 18,
        userInfos: {
            firstName: "Cecilia",
            lastName: "Ratorez",
            age: 34,
        },
        score: 0.3,
        keyData: {
            calorieCount: 2500,
            proteinCount: 90,
            carbohydrateCount: 150,
            lipidCount: 120
        }
    }
]
const RadiaChartWrapper = styled.div`
    position: relative;
    width: 258px;
    height: 263px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #FBFBFB;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.02);
    display: flex;
    justify-content: center;
    align-items: center;
`

const PercentageText = styled.span`
    width: 95px;
    flex-shrink: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: #282D30;
    text-align: center;
    font-size: 26px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 100% */

    span {
        color: #74798C;
        font-size: 16px;
        font-weight: 500;

    }
`

const GoalChart = () => {
    const percentage = USER_MAIN_DATA[0].score * 360 + 90

    return (
        <RadiaChartWrapper>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    innerRadius="90%"
                    outerRadius="100%"

                    data={[{score: USER_MAIN_DATA[0].score}]}
                    startAngle={90}
                    endAngle={percentage}
                >
                    <RadialBar background dataKey="score" fill="#FF0000"/>
                </RadialBarChart>
            </ResponsiveContainer>
            <PercentageText>{USER_MAIN_DATA[0].score * 100}% <br/> <span>de votre objectif</span></PercentageText>
        </RadiaChartWrapper>
    )
}

export default GoalChart