import React from 'react';
import '../info.scss';
import { ReactComponent as Closed } from '../assets/closed.svg';

type LiType = {
  row: string;
  svg: React.ReactNode;
  text: string;
};

export default function RestTimeComp({ row, svg, text }: LiType) {
  return (
    <li className='usetime'>
      <Closed />
      <p>{`Closed on ${text}`}</p>
    </li>
  );
}
