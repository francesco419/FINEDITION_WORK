import { useState } from 'react';
import { ReactComponent as Keyword } from '../../../assets/profile/image/svg/editkeywrod.svg';
import TasteComp from '../../../components/login/components/tasteindividual';
import DownloadComponent from '../../../components/common/downloadComponent/downloadComp';
import _ from 'lodash';

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
  const [keyword, setKeyword] = useState<string[]>([]);

  const onClicAddkHandler = (taste: string) => {
    setKeyword((keyword) => [...keyword, taste]);
  };

  const onClickDeleteHandler = (taste: string) => {
    setKeyword((keyword) => [..._.pull(keyword, taste)]);
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
          {_.map(keywordsss, (o, index) => {
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
