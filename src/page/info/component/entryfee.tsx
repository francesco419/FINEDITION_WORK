import React from 'react';
import '../info.scss';
import { ReactComponent as Fee } from '../assets/fee.svg';
import { ReactComponent as Info } from '../assets/info.svg';
import InfoHover from './infohover';
import { useEffect } from 'react';

type LiType = {
  row: string;
  svg: React.ReactNode;
  text: string;
};

export default function EntryFeeComp({ row, svg, text }: LiType) {
  return (
    <li className='usetime'>
      <Fee />
      {text ? (
        <>
          <p>{`Entry fee`}</p>
          <span>
            <InfoHover text={text} />
          </span>
        </>
      ) : (
        <>
          <p>{`No Entry fee`}</p>
        </>
      )}
    </li>
  );
}
