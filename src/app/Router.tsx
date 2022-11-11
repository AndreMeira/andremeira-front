import { Routes, Route } from "react-router-dom";
import Demo from "@/pages/Demo/Demo";
import Profile from "@/pages/Profile/Profile";
import Soon from "@/pages/Soon/Soon";
import ContactMe from "@/pages/ContactMe/ContactMe";


export default function Router() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Profile />} />
                <Route path="/demo" element={<Demo />} />
                <Route path="/blog" element={<Soon />} />
                <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
        </>
    );
};