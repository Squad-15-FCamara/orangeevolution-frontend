import Media from 'react-media';
import { Outlet } from 'react-router-dom';
import { BottomMobileMenu } from '../components/BottomMobileMenu';
import { DiscordIcon } from '../components/Discord';
// import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { RightSideMenu } from '../components/RightSideMenu';
import { SideMenu } from '../components/SideBarMenu/SideMenu';

export function DefaultLayout() {
  return (
    <>
      <Media query="(max-width: 900px)" render={() => <BottomMobileMenu />} />

      <Media query="(min-width: 900px)" render={() => <SideMenu />} />

      <Media query="(min-width: 900px)" render={() => <DiscordIcon />} />

      <Outlet />

      <Media query="(min-width: 900px)" render={() => <Footer />} />
    </>
  );
}
