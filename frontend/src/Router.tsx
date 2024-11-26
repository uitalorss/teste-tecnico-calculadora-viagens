import { Route, Routes } from "react-router-dom"
import { Main } from "./pages/main/main"
import { Confirm } from "./pages/confirm/confirm"


export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/confirm" element={<Confirm />} />
        </Routes>
    )
}