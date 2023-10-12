import React from 'react';
import '../info.scss';
import { ReactComponent as KeyWord } from '../assets/keyword.svg';
import _ from 'lodash';
import { LiType } from './usetime';

type KeyWord_Type = {
  keyword: string[] | undefined;
};

export default function KeyWordComp({ keyword }: KeyWord_Type) {
  return (
    <li className='usetime'>
      <div style={{ alignSelf: 'baseline', margin: '2px 0 0' }}>
        <KeyWord />
      </div>
      <p>
        {_.map(keyword, (o, index) => {
          return (
            <a href='https://www.naver.com/' key={`${o}_${index}`}>
              #{o}{' '}
            </a>
          );
        })}
      </p>
    </li>
  );
}
