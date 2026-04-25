import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import ShartingaHeader from "../components/ShartingaHeader";
import Footer from "../components/Footer"
import MainHeader from "../components/NewHeader";

function RootPage() {
    return (
        <>
            <ScrollToTop />
            {/* <ShartingaHeader /> */}
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
};

export default RootPage;