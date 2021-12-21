import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const Home = lazy(async () => import('../pages/Home'))
const NotFound = lazy(async () => import('../pages/Error/NotFound'))

const Router = () => (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default Router
