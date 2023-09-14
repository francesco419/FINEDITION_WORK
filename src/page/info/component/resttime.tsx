import React from 'react';
import '../info.scss';
import { ReactComponent as Info } from '../assets/info.svg';

type LiType = {
  row: string;
  svg: React.ReactNode;
  text: string;
};

export default function RestTimeComp({ row, svg, text }: LiType) {
  return (
    <li className='usetime'>
      <Info />
      <p>{`Closed on ${text}`}</p>
    </li>
  );
}
