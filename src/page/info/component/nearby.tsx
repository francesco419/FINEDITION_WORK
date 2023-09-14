import React from 'react';
import '../info.scss';
import { ReactComponent as NearBy } from '../assets/stationsvg.svg';

type LiType = {
  row: string;
  svg: React.ReactNode;
  text: string;
};

export default function NearbyComp({ row, svg, text }: LiType) {
  return (
    <li className='usetime'>
      <NearBy />
      <p>{text}</p>
    </li>
  );
}
