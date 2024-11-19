import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default CommonLayout;
