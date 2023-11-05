import { useEffect, useState } from 'react';
import { ReactComponent as Keyword } from '../../../assets/profile/image/svg/editkeywrod.svg';
import TasteComp from '../../../components/login/components/tasteindividual';
import DownloadComponent from '../../../components/common/downloadComponent/downloadComp';
import _ from 'lodash';
import { useAppSelector, useAppDispatch } from '../../../redux/hooks';
import {
  selectUserInfo,
  setDefault
} from '../../../redux/slices/userInfoSlice';
import EditKeyword from './editKeyword';
import { pl } from 'date-fns/locale';
import TravelPlege from './travelPlege';

const keywordsss = [
  'museum',
  'museum',
  'museum',
  'cafe hopping',
  'cafe hopping',
  'cafe hopping',
  'performance',
  'performance',
  'performance'
];

export default function ProfileKeyword() {
  const [edit, setEdit] = useState<boolean>(false);
  const [plege, setPlege] = useState<boolean>(false);
  const user = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();

  useEffect(() => {}, []);

  const onClicAddkHandler = (taste: string) => {
    // setKeyword((keyword) => [...keyword, taste]);
  };

  const onClickDeleteHandler = (taste: string) => {
    //setKeyword((keyword) => [..._.pull(keyword, taste)]);
  };

  const logoutHandler = () => {
    dispatch(setDefault());
  };

  const editHandlerTrue = () => {
    setEdit((edit) => true);
  };

  const editHandleFalse = () => {
    setEdit((edit) => false);
  };

  const plegeHandlerTrue = () => {
    setPlege((plege) => true);
  };

  const plegeHandlerFlase = () => {
    setPlege((plege) => false);
  };

  return (
    <div className='profileKeyword'>
      <div className='profileKeyword_keyword'>
        <div className='profileKeyword_keyword-title'>
          <h4>Your Keyword</h4>
          <button type='button' onClick={editHandlerTrue}>
            <Keyword />
          </button>
        </div>
        <ul className='profileKeyword_keyword-keywordlist'>
          {_.map(
            typeof user.userkeyword === 'string'
              ? JSON.parse(user.userkeyword)
              : user.userkeyword,
            (o, index) => {
              return (
                <TasteComp
                  str={o}
                  del={onClickDeleteHandler}
                  add={onClicAddkHandler}
                  key={`${o}_${index}`}
                />
              );
            }
          )}
        </ul>
      </div>
      <DownloadComponent name="Traveler's Pledge" download={plegeHandlerTrue} />
      <button className='logout' onClick={logoutHandler}>
        Logout
      </button>
      {/* <DownloadComponent name='FineDition Passport' download={() => {}} /> */}
      {edit && (
        <EditKeyword cb2={editHandleFalse} userid={user.userid as number} />
      )}
      {plege && (
        <TravelPlege
          img={user.userImage as string}
          cbx={plegeHandlerFlase}
          name={user.username as string}
        />
      )}
    </div>
  );
}
