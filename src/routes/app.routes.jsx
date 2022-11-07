import { Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../layout/DefaultLayout';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { Profile } from '../pages/Profile';
import { Road } from '../pages/Road';
import { Content } from '../pages/Content';
import { SavedContent } from '../pages/SavedContent';
import { Suggestions } from '../pages/Suggestions';
import { Search } from '../pages/Search';
import { Statistics } from '../pages/Statistics';
import { NotFound } from '../pages/NotFound';

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="road" element={<Road />} />
        <Route path="content" element={<Content />} />
        <Route path="savedcontent" element={<SavedContent />} />
        <Route path="suggestions" element={<Suggestions />} />
        <Route path="search" element={<Search />} />
        <Route path="statistics" element={<Statistics />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
