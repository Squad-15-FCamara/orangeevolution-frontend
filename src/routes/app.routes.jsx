import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../layout/DefaultLayout';
import { DefaultAdm } from '../layout/DefaultAdm';
import { HomeAdm } from '../pages/HomeAdm';
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
import { NotFound } from '../pages/NotFound';
import { ContextProvider } from '../context/context';
import { StatisticsAdm } from '../pages/StatisticsAdm';
import { ProfileAdm } from '../pages/ProfileAdm';
import { RoadDevAdm } from '../pages/RoadDevAdm';
import { RoadUxAdm } from '../pages/RoadUxAdm';
import { RoadQaAdm } from '../pages/RoadQaAdm';
import { RoadSoftAdm } from '../pages/RoadSoftAdm';
import { SearchAdm } from '../pages/SearchAdm';
import { IntroStatistics } from '../pages/IntroStatistics';
import { FullStatistics } from '../pages/FullStatistics';
import { UxContent } from '../pages/UxContent';
import { UiContent } from '../pages/UiContent';
import { OptionalContent } from '../pages/OptionalContent';
import { TestesContent } from '../pages/TestesContent';
import { BddContent } from '../pages/BddContent';
import { QualityContent } from '../pages/QualityContent';
import { PersonalDevContent } from '../pages/PersonalDevContent';
import { TeamWorkContent } from '../pages/TeamWorkContent';
import { FavContextProvider } from '../context/favoritesContext';

export function AppRoutes() {
  return (
    <ContextProvider>
      <FavContextProvider>
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
            <Route path="uxcontent" element={<UxContent />} />
            <Route path="uicontent" element={<UiContent />} />
            <Route path="optionaluxcontent" element={<OptionalContent />} />
            <Route path="testescontent" element={<TestesContent />} />
            <Route path="bddcontent" element={<BddContent />} />
            <Route path="qualitycontent" element={<QualityContent />} />
            <Route path="personalcontent" element={<PersonalDevContent />} />
            <Route path="teamcontent" element={<TeamWorkContent />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/" element={<DefaultAdm />}>
            <Route path="/homeadm" element={<HomeAdm />} />
            <Route path="/roaddevadm" element={<RoadDevAdm />} />
            <Route path="/roaduxadm" element={<RoadUxAdm />} />
            <Route path="/roadqaadm" element={<RoadQaAdm />} />
            <Route path="/roadsoftadm" element={<RoadSoftAdm />} />
            <Route path="/statisticsadm" element={<StatisticsAdm />} />
            <Route path="/profileadm" element={<ProfileAdm />} />
            <Route path="/searchadm" element={<SearchAdm />} />
            <Route path="/0" element={<IntroStatistics />} />
            <Route path="/1" element={<FullStatistics />} />
          </Route>
        </Routes>
      </FavContextProvider>
    </ContextProvider>
  );
}
