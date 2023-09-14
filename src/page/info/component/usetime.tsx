import React from 'react';
import '../info.scss';
import { ReactComponent as UseTime } from '../assets/time.svg';
import InfoHover from './infohover';

type LiType = {
  row: string;
  svg: React.ReactNode;
  text: string;
};

export default function UseTimeComp({ row, svg, text }: LiType) {
  const REG_USETIME: RegExp = new RegExp(/[0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2}/);
  return (
    <li className='usetime'>
      <UseTime />
      <p>{text.match(REG_USETIME)}</p>
      <InfoHover text={text} />
    </li>
  );
}
