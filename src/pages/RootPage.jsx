import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import ShartingaHeader from "../components/ShartingaHeader";
import Footer from "../components/Footer"

function RootPage() {
    return (
        <>
            <ScrollToTop />
            <ShartingaHeader />
            <Outlet />
            <Footer />
        </>
    )
};

export default RootPage;