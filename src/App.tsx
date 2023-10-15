import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import Profile from './page/profile/profile';
import Cities from './page/cities/cities';
import Info from './page/info/info';
import { GoogleOAuthProvider } from '@react-oauth/google';
import Region from './page/region/region';
import Administrator from './page/admin/administrator';
import Magazine from './page/megazine/megazine';
import ErrorPage from './page/error/errorpage';
import Story from './page/story/story';
import Search from './page/search/search';
import Bookmark from './page/bookmark/bookemark';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId='680788977176-vgs0lulllqoi8jd2sjcbpn77f6vtml7k.apps.googleusercontent.com'>
        <Routes>
          <Route path={`/Bookmark`} element={<Bookmark />} />
          <Route path={`/search/:keyword`} element={<Search />} />
          <Route path={`/adminpageexe`} element={<Administrator />} />
          <Route path={`/error`} element={<ErrorPage />} />
          <Route path={`/story/:id`} element={<Story />} />
          <Route path={`/region`} element={<Region />} />
          <Route path={`/info/:id/:typeid`} element={<Info />} />
          <Route path={`/profile/:id`} element={<Profile />} />
          <Route path={`/cities/`} element={<Cities />} />
          <Route path={`/magazine/`} element={<Magazine />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
        </Routes>
      </GoogleOAuthProvider>
    </BrowserRouter>
  );
}

export default App;
