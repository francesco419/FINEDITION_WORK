import React from 'react';
import '../info.scss';
import { ReactComponent as SpendTime } from '../assets/spend-time.svg';
import InfoHover from './infohover';

type LiType = {
  row: string;
  svg: React.ReactNode;
  text: string;
};

export default function SpendTimeComp({ row, svg, text }: LiType) {
  return (
    <li className='usetime'>
      <SpendTime />
      <p>{`About 1h 30m`}</p>
    </li>
  );
}
