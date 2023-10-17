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
import ScrollToTop from './components/common/scrollTop/scrollTop';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const googleClient = process.env.REACT_APP_CLIENT_ID!;

  useEffect(() => {
    window.scrollTo(0, 0);
    AOS.init();
  }, []);

  return (
    <BrowserRouter>
      <GoogleOAuthProvider clientId={googleClient}>
        <ScrollToTop />
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
