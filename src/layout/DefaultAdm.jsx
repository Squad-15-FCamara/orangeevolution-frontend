import Media from 'react-media';
import { Outlet } from 'react-router-dom';
import { BottomMobileMenuAdm } from '../components/BottomMobileMenuAdm';
import { DiscordIcon } from '../components/Discord';
import { Footer } from '../components/Footer';
import { SideBarAdm } from '../components/SideBarAdm';
import { TopMobileMenuAdm } from '../components/TopMobileMenuAdm';

export function DefaultAdm() {
  return (
    <>
      <Media query="(min-width: 900px)" render={() => <SideBarAdm />} />
      <Media query="(max-width: 900px)" render={() => <TopMobileMenuAdm />} />
      <Media query="(min-width: 900px)" render={() => <DiscordIcon />} />
      <Outlet />
      <Media
        query="(max-width: 900px)"
        render={() => <BottomMobileMenuAdm />}
      />
      <Media query="(min-width: 900px)" render={() => <Footer />} />
    </>
  );
}
