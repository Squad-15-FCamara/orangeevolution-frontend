import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../layout/DefaultLayout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { RoadDev } from '../pages/RoadDev';
import { RoadUx } from '../pages/RoadUx';
import { RoadQa } from '../pages/RoadQa';
import { RoadSoft } from '../pages/RoadSoft';
import { ContentIntro } from '../pages/ContentIntro';
import { ContentFull } from '../pages/ContentFull';
import { SavedContent } from '../pages/SavedContent';
import { Progress } from '../pages/Progress';
import { Search } from '../pages/Search';
import { Statistics } from '../pages/Statistics';
import { NotFound } from '../pages/NotFound';
import { ContextProvider } from '../context/context';

export function AppRoutes() {
  return (
    <ContextProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<DefaultLayout />}>
          <Route path="home" element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="roaddev" element={<RoadDev />} />
          <Route path="roadux" element={<RoadUx />} />
          <Route path="roadqa" element={<RoadQa />} />
          <Route path="roadsoft" element={<RoadSoft />} />
          <Route path="contentintro" element={<ContentIntro />} />
          <Route path="contentfull" element={<ContentFull />} />
          <Route path="savedcontent" element={<SavedContent />} />
          <Route path="progress" element={<Progress />} />
          <Route path="search" element={<Search />} />
          <Route path="statistics" element={<Statistics />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </ContextProvider>
  );
}
