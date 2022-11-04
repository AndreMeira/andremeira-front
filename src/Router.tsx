import { Routes, Route } from "react-router-dom";
import App from "@/components/App/App";
import Demo from "@/components/demo/Demo";


export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/demo" element={<Demo />} />
        </Routes>
    );
};