import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import Profile from './page/profile/profile';
import Cities from './page/cities/cities';
import Info from './page/info/info';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/info/:id/:typeid`} element={<Info />} />
        <Route path={`/profile/:id`} element={<Profile />} />
        <Route path={`/cities/`} element={<Cities />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
