import { Route, Routes } from "react-router-dom"
import { Main } from "./pages/main/main"
import { Confirm } from "./pages/confirm/confirm"
import { History } from "./pages/history/history"


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/confirm" element={<Confirm />} />
            <Route path="history" element={<History />}/>
        </Routes>
    )
}