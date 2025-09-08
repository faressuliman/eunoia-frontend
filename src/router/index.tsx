import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from "react-router-dom";

import { lazy } from "react";
import Layout from "../layout/Layout";
import Register from "../pages/Register";
import Login from "../pages/Login";
import AsideLayout from "../layout/AsideLayout";
import TrackingEmotions from "../pages/TrackingEmotions";
import Chat from "../pages/TrackingEmotions/Chat";
import Profile from "../pages/TrackingEmotions/Profile";
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
                <Route path="register" element={<Register />} />
                <Route path="login" element={<Login />} />
            </Route>

            <Route path="/TrackingEmotions" element={<AsideLayout/>}>

                <Route index element={<TrackingEmotions/>} />
                <Route path="chat"element={<Chat/>} />
                <Route path="profile"element={<Profile/>} />
            </Route>
        </>
    )
);

export default router;
