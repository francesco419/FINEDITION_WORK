import React from 'react';
import '../info.scss';
import { ReactComponent as KeyWord } from '../assets/keyword.svg';
import _ from 'lodash';

export type LiType = {
  row: string;
  svg: React.ReactNode;
  text: string;
};

export default function KeyWordComp({ row, svg, text }: LiType) {
  return (
    <li className='usetime'>
      <div style={{ alignSelf: 'baseline', margin: '2px 0 0' }}>
        <KeyWord />
      </div>
      <p>
        {_.map(text.split(' '), (o) => {
          return <a href='https://www.naver.com/'>{o} </a>;
        })}
      </p>
    </li>
  );
}
