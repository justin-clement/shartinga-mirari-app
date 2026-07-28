import { Outlet, useNavigation } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";
import Footer from "../components/Footer"
import MainHeader from "../components/NewHeader";

function RootPage() {
    const navigation = useNavigation();
    const isLoading = navigation.state === "loading";

    return (
        <>
            {isLoading && (
                <div className="routeLoadingOverlay" aria-live="polite" aria-busy="true">
                    <img
                        src="/images/SM_LOGO_WHITEONBLACK.PNG"
                        alt="Loading"
                        className="routeLoadingImage"
                    />
                </div>
            )}
            <ScrollToTop />
            <MainHeader />
            <Outlet />
            <Footer />
        </>
    )
};

export default RootPage;