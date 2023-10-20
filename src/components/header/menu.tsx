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
import MenuDropList from './components/droplist';

type HeaderMenu_Type = {
  color: string;
};

export default function HeaderMenu({ color }: HeaderMenu_Type) {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserInfo);
  const nav = useNavigate();
  const [not, setNot] = useState<boolean>(false);
  const [dropDown, setDropDown] = useState<boolean>(false);
  const [dropList, setDropList] = useState<boolean>(false);

  const navTo = (to: string) => {
    if (user.userid === null) {
      return;
    } else {
      nav(`/profile/${to}`);
    }
  };

  const navToLogIn = () => {
    dispatch(setLoginFormTrue());
  };

  const dropListHandler = () => {
    setDropList((dropList) => !dropList);
  };

  return (
    <>
      <div className='header_menu'>
        {dropList && <MenuDropList />}
        <HeaderSVG
          svg={<Search fill={color === '#fff' ? '#C2E56C' : color} />}
          to={() => {
            setDropDown((dropDown) => !dropDown);
          }}
        />
        {user.userid === null ? (
          <HeaderSVG
            svg={<Person fill={color === '#fff' ? '#C2E56C' : color} />}
            to={() => {
              navToLogIn();
            }}
          />
        ) : (
          <HeaderSVG
            svg={<Person fill={color === '#fff' ? '#C2E56C' : color} />}
            to={() => {
              navTo(JSON.stringify(user.userid));
            }}
          />
        )}
        <HeaderSVG
          svg={<Bookmark fill={color === '#fff' ? '#C2E56C' : color} />}
          to={() => {
            nav('/bookmark');
          }}
        />
        <HeaderSVG
          svg={<Menu stroke={color === '#fff' ? '#C2E56C' : color} />}
          to={dropListHandler}
        />
      </div>
      {dropDown && <SearchDropDown />}
    </>
  );
}

interface HeaderSVGButton {
  svg: any;
  to: any;
}

function HeaderSVG({ svg, to }: HeaderSVGButton) {
  return <button onClick={() => to()}>{svg}</button>;
}
