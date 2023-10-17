import { useEffect, useState } from 'react';
import { ReactComponent as Keyword } from '../../../assets/profile/image/svg/editkeywrod.svg';
import TasteComp from '../../../components/login/components/tasteindividual';
import DownloadComponent from '../../../components/common/downloadComponent/downloadComp';
import _ from 'lodash';
import { useAppSelector } from '../../../redux/hooks';
import { selectUserInfo } from '../../../redux/slices/userInfoSlice';

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
  const user = useAppSelector(selectUserInfo);
  console.log(user);

  const onClicAddkHandler = (taste: string) => {
    // setKeyword((keyword) => [...keyword, taste]);
  };

  const onClickDeleteHandler = (taste: string) => {
    //setKeyword((keyword) => [..._.pull(keyword, taste)]);
  };

  return (
    <div className='profileKeyword'>
      <div className='profileKeyword_keyword'>
        <div className='profileKeyword_keyword-title'>
          <h4>Your Keyword</h4>
          <button type='button'>
            <Keyword />
          </button>
        </div>
        <ul className='profileKeyword_keyword-keywordlist'>
          {_.map(user.userkeyword, (o, index) => {
            return (
              <TasteComp
                str={o}
                del={onClickDeleteHandler}
                add={onClicAddkHandler}
                key={`${o}_${index}`}
              />
            );
          })}
        </ul>
      </div>
      <DownloadComponent name='FineDition Passport' download={() => {}} />
      <DownloadComponent name="Traveler's Pledge" download={() => {}} />
    </div>
  );
}
