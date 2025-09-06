import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { lazy } from "react";
import Layout from "../layout/Layout";
const Home = lazy(() => import("../pages"));
const About = lazy(() => import("../pages/About"));
const Contact = lazy(() => import("../pages/Contact"));

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
            </Route>
        </>
    )
);

export default router;
