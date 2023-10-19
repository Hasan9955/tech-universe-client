import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Root = () => (
    <div>

        <Navbar></Navbar>
        <div className='container mx-auto'>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
);

export default Root;