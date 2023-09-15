import React from 'react';
import '../info.scss';
import { ReactComponent as NearBy } from '../assets/stationsvg.svg';
import { LiType } from './usetime';

export default function NearbyComp({ text }: LiType) {
  return (
    <li className='usetime'>
      <NearBy />
      <p>{text}</p>
    </li>
  );
}
