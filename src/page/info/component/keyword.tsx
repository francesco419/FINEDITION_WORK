import React from 'react';
import '../info.scss';
import { ReactComponent as KeyWord } from '../assets/keyword.svg';
import _ from 'lodash';
import { LiType } from './usetime';

export default function KeyWordComp({ text }: LiType) {
  return (
    <li className='usetime'>
      <div style={{ alignSelf: 'baseline', margin: '2px 0 0' }}>
        <KeyWord />
      </div>
      <p>
        {_.map(text.split(' '), (o, index) => {
          return (
            <a href='https://www.naver.com/' key={`${o}_${index}`}>
              {o}{' '}
            </a>
          );
        })}
      </p>
    </li>
  );
}
