import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(async () => import('../pages/Home'))
const Bootstrap = lazy(async () => import('../pages/Bootstrap'))


const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bootstrap" element={< Bootstrap />} />
        </Routes>
    )
}

export default Router
