import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer"
import MainHeader from "../components/NewHeader";

function RootPage() {
    return (
        <>
            <ScrollToTop />
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
};

export default RootPage;