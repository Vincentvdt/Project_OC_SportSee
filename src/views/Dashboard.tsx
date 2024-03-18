import styled from "styled-components"
import {useEffect, useState} from "react"
import mockData from "../mocks/mockData.ts"
import DailyActiviyChart from "../components/Charts/DailyActiviyChart.tsx"
import AverageSessionDurationChart from "../components/Charts/AverageSessionDurationChart.tsx"
import ActivityTypeChart from "../components/Charts/ActivityTypeChart.tsx"
import GoalChart from "../components/Charts/GoalChart.tsx"

interface User {
    id: number;
    userInfos: {
        firstName: string;
        lastName: string;
        age: number;
    };
    todayScore?: number;
    score?: number;
    keyData: {
        calorieCount: number;
        proteinCount: number;
        carbohydrateCount: number;
        lipidCount: number;
    };
}

const DashboardWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    height: calc(100dvh - 91px);
    max-width: 1024px;
    margin: 0 auto;
    outline: 10px solid red;
    padding: .5rem 1rem 0;
`

const Header = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 41px;
`

const Title = styled.h1`
    color: #000;
    font-size: 3rem;
    font-weight: 500;

    span {
        color: #FF0101;
    }
`

const SubTitle = styled.h2``


const Dashboard = () => {
    const userId = 18
    const [user, setUser] = useState<User | null>(null)

    useEffect(() => {
        let ignore = false

        const fetchUser = () => {
            const fetchedUser = mockData.find(data => data.id === userId)
            if (!ignore && fetchedUser) {
                setUser(fetchedUser)
            } else {
                setUser(null)
            }

        }
        fetchUser()

        return () => {
            ignore = true
        }


    }, [userId])


    return (
        <DashboardWrapper>
            {user ? (
                <>
                    <Header>
                        <Title>Bonjour <span>{user.userInfos.firstName}</span></Title>
                        <SubTitle>Félicitation ! Vous avez explosé vos objectifs hier 👏</SubTitle>
                    </Header>
                    <DailyActiviyChart width={835} height={320}/>
                    <AverageSessionDurationChart/>
                    <ActivityTypeChart/>
                    <GoalChart/>
                </>
            ) : (
                <Title>User Not Found</Title>
            )}
        </DashboardWrapper>
    )
}

export default Dashboard