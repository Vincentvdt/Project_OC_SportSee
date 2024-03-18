import "./App.css"
import Sidebar from "./components/Sidebar.tsx"
import Header from "./components/Header.tsx"
import Dashboard from "./views/Dashboard.tsx"
import styled from "styled-components"

const Layout = styled.main`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
`

function App() {

    return (
        <>
            <Header/>
            <Layout>
                <Sidebar/>
                <Dashboard/>
            </Layout>

        </>
    )
}

export default App
