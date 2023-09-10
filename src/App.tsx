import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/home/home';
import Profile from './page/profile/profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/profile/:id`} element={<Profile />} />
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
