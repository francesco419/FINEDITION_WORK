import React from 'react';
import '../info.scss';
import { ReactComponent as SpendTime } from '../assets/spend-time.svg';
import InfoHover from './infohover';
import { LiType } from './usetime';

type SpendTime_Type = {
  spend: string | undefined;
};

export default function SpendTimeComp({ spend }: SpendTime_Type) {
  return (
    <li className='usetime'>
      <SpendTime />
      <p>{`About ${spend}`}</p>
    </li>
  );
}
