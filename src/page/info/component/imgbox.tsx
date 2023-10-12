import axios from 'axios';
import { useEffect, useState } from 'react';
import _ from 'lodash';

type IMGBOXTYPE = {
  img: any;
};

type IMGBOX_TYPE = {
  galContentId: string;
  galContentTypeId: string;
  galTitle: string;
  galWebImageUrl: string;
  galCreatedtime: string;
  galModifiedtime: string;
  galPhotographyMonth: string;
  galPhotographyLocation: string;
  galPhotographer: string;
  galSearchKeyword: string;
};

export default function ImgBox({ img }: IMGBOXTYPE) {
  const [imgData, setImgData] = useState<IMGBOX_TYPE[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    getMultipleImage();
  }, []);

  const getMultipleImage = async () => {
    await axios
      .get(
        `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=${
          process.env.REACT_APP_TOUR_KEY
        }&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${encodeURI(
          img[0]
        )}&_type=json`
      )
      .then((o) => {
        console.log(o.data.response.body.items.item);
        setImgData((imgData) => _.shuffle(o.data.response.body.items.item));
        setLoading((loading) => true);
        console.log('fetching image success');
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className='info_about-imgbox'>
      {loading && imgData.length >= 2 ? (
        <>
          {_.map(imgData, (o, index) => {
            if (index < 2) {
              return (
                <div key={`${o.galContentId}_${index}`}>
                  <img src={o.galWebImageUrl} />
                </div>
              );
            }
          })}
        </>
      ) : null}
    </div>
  );
}
