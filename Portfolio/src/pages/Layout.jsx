import { Outlet, ScrollRestoration } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer'
import Spacer from '../components/Spacer'

export default function Layout() {
  return (
    <div>
      <Navbar />
      <Spacer black={true} big={true} />
      <Outlet />
      <Footer />
      <ScrollRestoration />
    </div>
  );
}