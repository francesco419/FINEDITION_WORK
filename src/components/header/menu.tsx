import { ReactComponent as Bookmark } from '../../assets/svg/fixed menu/bookmark.svg';
import { ReactComponent as Person } from '../../assets/svg/fixed menu/person.svg';
import { ReactComponent as Search } from '../../assets/svg/fixed menu/search.svg';
import { ReactComponent as Menu } from '../../assets/svg/fixed menu/menu.svg';
import { ReactComponent as Not } from '../../assets/svg/temp.svg';
import { useAppDispatch } from '../../redux/hooks';
import { setLoginFormTrue } from '../../redux/slices/loginSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function HeaderMenu() {
  const dispatch = useAppDispatch();
  const nav = useNavigate();
  const [not, setNot] = useState<boolean>(false);

  const navTo = (to: string) => {
    //useNavigate = nav(`./${to}`)
  };

  const navToLogIn = (to: string) => {
    if (not) {
      nav(`/profile/999999`);
    } else {
      dispatch(setLoginFormTrue());
    }
  };
  const temp = () => {
    setNot((not) => !not);
  };
  return (
    <div className='header_menu'>
      <HeaderSVG
        svg={<Not style={{ fill: not ? '#0849fd' : '#ff0000' }} />}
        to={temp}
      />
      <HeaderSVG svg={<Search />} to={navTo} />
      <HeaderSVG svg={<Person />} to={navToLogIn} />
      <HeaderSVG svg={<Bookmark />} to={navTo} />
      <HeaderSVG svg={<Menu />} to={navTo} />
    </div>
  );
}

interface HeaderSVGButton {
  svg: any;
  to: (to: string) => void;
}

function HeaderSVG({ svg, to }: HeaderSVGButton) {
  return <button onClick={() => to('a')}>{svg}</button>;
}
