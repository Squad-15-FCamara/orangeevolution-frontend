import { Outlet } from 'react-router-dom';
import { DiscordIcon } from '../components/Discord';
import { Footer } from '../components/Footer';
import { SideBarAdm } from '../components/SideBarAdm';

export function DefaultAdm() {
  return (
    <div>
      <SideBarAdm />
      <Outlet />
      <DiscordIcon />
      <Footer />
    </div>
  );
}
