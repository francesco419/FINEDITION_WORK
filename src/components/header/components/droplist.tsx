import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import {
  selectUserInfo,
  setDefault
} from '../../../redux/slices/userInfoSlice';
import _ from 'lodash';
import '../header.scss';
import { useNavigate } from 'react-router';
import { resetState } from '../../../redux/slices/bookmarklikeSlice';
import { resetTravel } from '../../../redux/slices/travelSlice';

export default function MenuDropList() {
  const user = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();
  const nav = useNavigate();

  const list = [
    {
      name: 'Main',
      to: '/'
    },
    {
      name: 'Magazine',
      to: '/magazine'
    },
    {
      name: 'Region',
      to: '/region'
    },
    {
      name: 'Seoul',
      to: '/cities/'
    },
    {
      name: 'My Page',
      to: `/profile/${user.userid}`
    },
    {
      name: 'Bookmark',
      to: '/bookmark'
    },
    {
      name: 'Logout',
      to: ''
    }
  ];

  const logOutHandler = () => {
    if (user.userid !== null) {
      dispatch(resetState());
      dispatch(resetTravel());
      dispatch(setDefault());
    }
  };

  const onClickHandler = (str: string) => {
    nav(str);
  };

  return (
    <ul className='droplist' data-aos='fade-left'>
      {_.map(list, (o) => {
        if (o.name === 'Logout') {
          return (
            <li>
              <p>{'>'}</p>
              <button onClick={logOutHandler}>{o.name}</button>
            </li>
          );
        }
        if (o.name === 'My Page') {
          return (
            <li>
              <p>{'>'}</p>
              <button
                onClick={() => {
                  user.userid && onClickHandler(o.to);
                }}
              >
                {o.name}
              </button>
            </li>
          );
        }

        return (
          <li>
            <p>{'>'}</p>
            <button onClick={() => onClickHandler(o.to)}>{o.name}</button>
          </li>
        );
      })}
    </ul>
  );
}
