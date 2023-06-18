import { Outlet } from 'react-router-dom';
import Nav from '../Sheard/Navber/Nav';
import Footer from '../Sheard/Footer/Footer';

const Rendered = () => {
    return (
        <div>
            <Nav />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Rendered;