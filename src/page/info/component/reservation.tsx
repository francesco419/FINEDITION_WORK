import React from 'react';
import '../info.scss';
import { ReactComponent as Reservation } from '../assets/reservation.svg';

type LiType = {
  row: string;
  svg: React.ReactNode;
  text: string;
};

export default function ReservationComp({ row, svg, text }: LiType) {
  return (
    <li className='usetime'>
      <Reservation />
      <p>{`No reservation`}</p>
    </li>
  );
}
