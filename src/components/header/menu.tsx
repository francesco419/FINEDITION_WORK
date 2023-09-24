import { ReactComponent as Bookmark } from '../../assets/svg/fixed menu/bookmark.svg';
import { ReactComponent as Person } from '../../assets/svg/fixed menu/person.svg';
import { ReactComponent as Search } from '../../assets/svg/fixed menu/search.svg';
import { ReactComponent as Menu } from '../../assets/svg/fixed menu/menu.svg';
import { ReactComponent as Not } from '../../assets/svg/temp.svg';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLoginFormTrue } from '../../redux/slices/loginSlice';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { selectUserInfo, setDefault } from '../../redux/slices/userInfoSlice';
import SearchDropDown from './search/search';

export default function HeaderMenu() {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserInfo);
  const nav = useNavigate();
  const [not, setNot] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);

  const navTo = (to: string) => {
    nav(`/profile/${to}`);
  };

  const navToLogIn = (to: string) => {
    if (not) {
      nav(`/profile/999999`);
    } else {
      dispatch(setLoginFormTrue());
    }
  };

  return (
    <>
      <div className='header_menu'>
        <HeaderSVG
          svg={<Not style={{ fill: not ? '#0849fd' : '#ff0000' }} />}
          to={() => dispatch(setDefault())}
        />
        <HeaderSVG
          svg={<Search />}
          to={() => {
            setDropDown((dropDown) => !dropDown);
          }}
        />
        {user.id === null ? (
          <HeaderSVG svg={<Person />} to={navToLogIn} />
        ) : (
          <HeaderSVG
            svg={<Not style={{ fill: '#ff0000' }} />}
            to={() => {
              if (user.id) navTo(JSON.stringify(user.id));
            }}
          />
        )}
        <HeaderSVG svg={<Bookmark />} to={navToLogIn} />
        <HeaderSVG svg={<Menu />} to={navTo} />
      </div>
      {dropDown && <SearchDropDown />}
    </>
  );
}

interface HeaderSVGButton {
  svg: any;
  to: (to: string) => void;
}

function HeaderSVG({ svg, to }: HeaderSVGButton) {
  return <button onClick={() => to('a')}>{svg}</button>;
}
