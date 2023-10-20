import './photoBuzz.scss';
import { ReactComponent as Renew } from '../../../assets/svg/Autorenew.svg';
import { useEffect, useState } from 'react';
import _ from 'lodash';
import { cardType } from '../../admin/administrator';
import { cardData } from '../../../temp/cardData';
import PhotoBox from './photoBox';
import { APIInterceptor, sendAxiosState } from '../../../func/interceptor';
import { AxiosResponse } from 'axios';
import { API_TYPE } from '../../../func/interface';
import { ReactComponent as Exit } from '../../../assets/svg/exit.svg';

export default function PhotoBuzz() {
  const [image, setImage] = useState<any[]>([]);
  const [popUpImage, setPopUpImage] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    getAxios();
  }, []);

  /*   useEffect(() => {
    getAxios();
  }, [image]); */

  const getAxios = () => {
    let random = _.random(1, 20);
    let data: API_TYPE = {
      url: `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySyncDetailList1?serviceKey=${process.env.REACT_APP_TOUR_KEY}&numOfRows=10&pageNo=${random}&MobileOS=ETC&MobileApp=AppTest&showflag=1&_type=json&title=서울`,
      callback: (o) => {
        const img = o.data.response.body.items.item;
        setImage((image) => img);
        //getRandomImage(img);
      }
    };
    APIInterceptor(data);
  };

  const popUpImageHandler = (img: string) => {
    setPopUpImage((popUpImage) => img);
    setShow((show) => true);
  };

  const popUpShowHandler = () => {
    setShow((show) => false);
  };

  const getRandomImage = (data: any[]) => {
    let arr: any[] = [];
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
            getAxios();
          }}
        >
          <Renew />
        </button>
      </div>
      <div className='apimap'>
        {_.map(image, (o, index) => {
          return <PhotoBox obj={o} key={`${o.id}_${index}`} />;
        })}
      </div>
    </div>
  );
}

/**
 * https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySyncDetailList1?serviceKey=FGp7RfYKOyKsQvkjg5BJq1WwFEIWEOZ2brqelJZ%2Br3DFzTow2%2B2Kb7tHBMlwzzOSUEXxNtg25Z%2B7c83%2FFAl57A%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&showflag=1&_type=json&title=서울
 */
