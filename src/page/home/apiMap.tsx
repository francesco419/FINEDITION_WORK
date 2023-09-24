import { data } from '../../temp/megazinecard';
import './wordBuzz.scss';
import _ from 'lodash';
import { useRef } from 'react';
import { MegazineCardType } from './megazineCard';

export default function ApiMap() {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className='apimap'>
      {_.map(data, (o, index) => {
        if (index < 10) return <MapPop obj={o} key={`${o.color}_${index}`} />;
      })}
    </div>
  );
}

type PopType = {
  obj: MegazineCardType;
};

function MapPop({ obj }: PopType) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div ref={ref}>
      <img src={obj.img} />
    </div>
  );
}
