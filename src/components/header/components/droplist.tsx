import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import {
  selectUserInfo,
  setDefault
} from '../../../redux/slices/userInfoSlice';
import _ from 'lodash';
import '../header.scss';

const list = [
  'Main',
  'Magazine',
  'Region',
  'Seoul',
  'My Page',
  'Bookmark',
  'Logout'
];

export default function MenuDropList() {
  const user = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();

  const logOutHandler = () => {
    if (user.userid !== null) dispatch(setDefault());
  };

  return (
    <ul className='droplist' data-aos='fade-left'>
      {_.map(list, (o) => {
        return (
          <li>
            <p>{'>'}</p>
            <button onClick={logOutHandler}>{o}</button>
          </li>
        );
      })}
    </ul>
  );
}
