import { Outlet } from 'react-router-dom';
// import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { SideMenu } from '../components/SideBarMenu/SideMenu';

export function DefaultLayout() {
  return (
    <div>
      {/* <Header /> */}
      <SideMenu/>
      <Outlet />
      <Footer />
    </div>
  );
}
