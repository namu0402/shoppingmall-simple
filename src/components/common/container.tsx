import { ReactNode } from "react";
import Appbar from '@components/common/appbar'
import Footer from '@components/common/footer';

const Container = ({children}: {
    children: ReactNode,
}) => {
    const router = '';

    return (
        <div>
            <Appbar />
            {children}
            <Footer />
        </div>
    );
};

export default Container;
