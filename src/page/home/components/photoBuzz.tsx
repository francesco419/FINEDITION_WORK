import './photoBuzz.scss';
import { ReactComponent as Renew } from '../../../assets/svg/Autorenew.svg';
import { useEffect, useRef, useState } from 'react';
import { MegazineCardType } from '../megazineCard';
import _ from 'lodash';
import { APIInterceptor } from '../../../func/interceptor';
import { API_TYPE } from '../../../func/interface';
import { Axios, AxiosResponse } from 'axios';
import { gallary_type } from '../../../func/interface';
import { cardType } from '../../admin/administrator';
import { cardData } from '../../../temp/cardData';

export default function PhotoBuzz() {
  const [image, setImage] = useState<cardType[]>([]);

  useEffect(() => {
    getRandomImage(cardData);
  }, []);

  const getRandomImage = (data: cardType[]) => {
    let arr: cardType[] = [];
    let randomNum: number[] = [];

    for (;;) {
      if (arr.length === 10) {
        break;
      }
      let random = getRandomAgain(randomNum);
      if (typeof random === 'number') {
        randomNum.push(random);
        arr.push(data[random]);
      }
    }
    setImage((image) => [...arr]);
  };

  const getRandomAgain = (arr: number[]) => {
    let random = _.random(1, 50);
    let find = _.indexOf(arr, random);
    //console.log(arr, find, random);
    if (find === -1) {
      return random;
    } else {
      getRandomAgain(arr);
    }
  };

  return (
    <div className='wordbuzz'>
      <div className='wordbuzz_title'>
        <h3>Photo Buzz</h3>
        <button
          onClick={() => {
            getRandomImage(cardData);
          }}
        >
          <Renew />
        </button>
      </div>
      <div className='apimap'>
        {_.map(image, (o, index) => {
          return <MapPop obj={o} key={`${o.id}_${index}`} />;
        })}
      </div>
    </div>
  );
}

type PopType = {
  obj: cardType;
};

function MapPop({ obj }: PopType) {
  const handleImgError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = 'https://picsum.photos/200/300';
  };

  return (
    <div>
      <img
        src={obj.coverImg}
        onError={(e) => handleImgError(e)}
        title={obj.coverName}
      />
    </div>
  );
}

const ddd = [
  '3006358',
  '3006542',
  '897540',
  '264351',
  '1326972',
  '1340416',
  '264337',
  '264550',
  '264340',
  '264315',
  '264134',
  '264257',
  '264116',
  '2946681',
  '264152',
  '2944158',
  '264358',
  '2944084',
  '2003918',
  '2943972',
  '1348713',
  '264138',
  '1909500',
  '1349202',
  '1542646',
  '789703',
  '789696',
  '1323377',
  '1751094',
  '264454',
  '1748004',
  '264348',
  '264354',
  '264329',
  '264316 ',
  '264350',
  '561382',
  '264312',
  '264571',
  '264312',
  '2475097',
  '2543150',
  '2813573',
  '1810712',
  '1747593',
  '264223',
  '1913218',
  '264320',
  '264106',
  '264111',
  '264115',
  '264132',
  '264308',
  '1348621',
  '2037040',
  '1876944',
  '1748351',
  '264473',
  '778924',
  '1051832',
  '1747984',
  '1256219',
  '264317',
  '1747995',
  '264113',
  '1382671',
  '1887247',
  '1887239',
  '264107',
  '1114212',
  '2035491',
  '264478',
  '2497803',
  '264122',
  '2541628',
  '1924956',
  '1382366',
  '1930523',
  '1241248',
  '1352705',
  '1382517',
  '1011983',
  '2553836',
  '2484384',
  '2482058'
];
