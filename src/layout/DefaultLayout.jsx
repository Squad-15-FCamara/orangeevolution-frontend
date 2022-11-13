import { Outlet } from 'react-router-dom';
import { DiscordIcon } from '../components/Discord';
// import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RightSideMenu } from '../components/RightSideMenu';
import { SideMenu } from '../components/SideBarMenu/SideMenu';

export function DefaultLayout() {
  return (
    <div>
      {/* <Header /> */}
      <SideMenu />
      <Outlet />
      {/* <RightSideMenu/> */}
      <DiscordIcon />
      <Footer />
    </div>
  );
}
