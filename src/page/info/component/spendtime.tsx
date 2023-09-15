import React from 'react';
import '../info.scss';
import { ReactComponent as SpendTime } from '../assets/spend-time.svg';
import InfoHover from './infohover';
import { LiType } from './usetime';

export default function SpendTimeComp({ text }: LiType) {
  return (
    <li className='usetime'>
      <SpendTime />
      <p>{`About 1h 30m`}</p>
    </li>
  );
}
