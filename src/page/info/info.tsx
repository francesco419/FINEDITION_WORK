import Header from '../../components/header/header';
import './info.scss';
import frontimg from './assets/frontimg.png';
import _, { set } from 'lodash';
import { ReactComponent as Like } from './assets/like.svg';
import { ReactComponent as Bookmark } from './assets/bookmark.svg';
import { ReactComponent as Traditional } from './assets/tags/flag.svg';
import { ReactComponent as Hightlight } from './assets/tags/highlights.svg';
import { ReactComponent as OnTrend } from './assets/tags/trend.svg';
import { ReactComponent as Recommend } from './assets/tags/recommend.svg';
import { ReactComponent as GoodforKids } from './assets/tags/kids.svg';
import { ReactComponent as PhotoSpot } from './assets/tags/photo_spot.svg';
import { ReactComponent as NatureLovers } from './assets/tags/nature.svg';
import { ReactComponent as UseTime } from './assets/time.svg';
import { ReactComponent as RestDate } from './assets/info.svg';
import { ReactComponent as Reservation } from './assets/reservation.svg';
import { ReactComponent as Fee } from './assets/fee.svg';
import { ReactComponent as SpendTime } from './assets/time.svg';
import { ReactComponent as Homepage } from './assets/link.svg';
import { ReactComponent as Transport } from './assets/stationsvg.svg';
import { ReactComponent as Language } from './assets/language.svg';
import { ReactComponent as Keyword } from './assets/keyword.svg';
import UseTimeComp from './component/usetime';
import RestTimeComp from './component/resttime';
import ReservationComp from './component/reservation';
import EntryFeeComp from './component/entryfee';
import SpendTimeComp from './component/spendtime';
import HomepageComp from './component/homepage';
import NearbyComp from './component/nearby';
import LanguageComp from './component/language';
import KeyWordComp from './component/keyword';
import MayLike from './component/maylike';
import RelatedMegazine from './component/relatemegazine';
import Weather from './component/weather';
import PastWeather from './component/pastweather';
import LocationMapCom from './component/map';
import Footer from '../../components/footer/footer';
import InfoDetail from './component/infodetail';
import axios from 'axios';
import { useEffect } from 'react';
import { APIInterceptor } from '../../func/interceptor';
import { API_TYPE } from '../../func/interface';
import { useParams } from 'react-router';
import { useState } from 'react';
import LoadingSpinner from '../../components/common/loadingspinner';

const TAG_LIST = [
  { tag: 'Traditional', svg: <Traditional /> },
  { tag: 'Highlight', svg: <Hightlight /> },
  { tag: 'On-trend', svg: <OnTrend /> },
  { tag: 'Recommend', svg: <Recommend /> },
  { tag: 'Good for kids', svg: <GoodforKids /> },
  { tag: 'Photo spot', svg: <PhotoSpot /> },
  { tag: 'Nature lovers', svg: <NatureLovers /> }
];

const tagcount = ['Traditional', 'Highlight', 'Recommend'];

const DETAIL_LIST = [
  {
    text: `[Palace]<br>Feb-May, Sep-Oct 09:00-18:00<br>Jun-Aug 09:00-18:30<br>Nov-Jan 09:00-17:30<br>* Last admission: 1 hour before closing<br><br>
    [Secret Garden Tour (Guided tour only)]<br>Mar-May, Sep-Oct 10:00-17:30<br>Jun-Aug 10:00-18:00<br>Feb, Nov 10:00-17:00<br>Dec-Jan 10:00-16:30<br>* Last tour: 1 hr 30 min before closing<BR> * Secret Garden Tour has limited space and must travel with a guide`
  },
  {
    text: `Tuesdays`
  },
  {
    text: `No reservation`
  },
  {
    text: `Individuals - Adults 1,000  won / Children 500 won<br>\n <br>\n* Adults (ages 19-64) / Children (ages 7-18)\n* Free admission (ID required): Preschoolers
    (ages 6 & younger), senior citizens (ages 65 & older), visitors wearing hanbok`
  },
  {
    text: `About 1h 30m`
  },
  {
    text: `<a href=\"http://www.mdsd.or.kr/\" target=\"_blank\" title=\"새창  :명동대성당 홈페이지로 이동\">www.mdsd.or.kr</a>`
  },
  {
    text: `Chungmuro Station (Line3)`,
    process: 'Chungmuro Station (Line3)'
  },
  {
    name: 'language',
    svg: <Language />,
    text: `[Guided Tours]<br>\n<br>\n * English - 10:00, 12:00, 14:00, 16:00<br>\n * Japanese - 09:00, 09:40, 10:40, 11:40, 12:40, 13:40, 14:40, 15:40, 16:40 (Mar-Sep)<br>\n * Chinese - 11:00, 13:00, 15:00<br>\n <br>\n<strong> </strong>* Reservation required via official website, except for Saturdays; up to 300 people per session<br>\n* Korean nationals may join a foreign language guided tour when accompanying international visitors.<br>\n* Guided tour in Japanese 16:40 session is only offered from March to September`
  },
  {
    name: 'keyword',
    svg: <Keyword />,
    text: `#namsangol #hanok #village #jung-gu #seoul #chungmuro #traditional #experience`
  }
];

/* 
addr1
contentid
contenttypeid : 76번으로 동일
firstimage
title
mapx
mapy
--
infocenter restdate
usetime
--
infoname : "Admission Fees" - infotext
infoname: "Interpretation Services Offered” - infotext
--
homepage
overview
--
originimgurl 

-----------------------------------------------------------------------------
*/
interface API_DATA_TYPE {
  addr1: string;
  contentid: string;
  contenttypeid: string;
  firstimage: string;
  title: string;
  mapx: string;
  mapy: string;
  homepage: string;
  overview: string;
  infocenter: string;
  restdate: string;
  usetime: string;
  fee: INFO_TYPE;
  Interpretation: INFO_TYPE;
  originimgurl: imgurlTYPE[];
}

interface imgurlTYPE {
  contentid: string;
  originimgurl: string;
  imgname: string;
  smallimageurl: string;
  cpyrhtDivCd: string;
  serialnum: string;
}

interface INFO_TYPE {
  contentid: string;
  contenttypeid: string;
  fldgubun: string;
  infoname: string;
  infotext: string;
  serialnum: string;
}

export default function Info() {
  const param = useParams();
  const [apidata, setApiData] = useState<API_DATA_TYPE>({
    addr1: '',
    contentid: '',
    contenttypeid: '',
    firstimage: '',
    title: '',
    mapx: '',
    mapy: '',
    homepage: '',
    overview: '',
    infocenter: '',
    restdate: '',
    usetime: '',
    fee: {
      contentid: '',
      contenttypeid: '',
      fldgubun: '',
      infoname: '',
      infotext: '',
      serialnum: ''
    },
    Interpretation: {
      contentid: '',
      contenttypeid: '',
      fldgubun: '',
      infoname: '',
      infotext: '',
      serialnum: ''
    },
    originimgurl: []
  });
  const [loading, setLoading] = useState<boolean>();

  useEffect(() => {
    getAPIDataCommon(apidata);
    //setLoading((loading) => true);
  }, []);

  const getAPIDataCommon = async (temp: API_DATA_TYPE) => {
    const interceptor: API_TYPE = {
      url: `https://apis.data.go.kr/B551011/EngService1/detailCommon1?serviceKey=${process.env.REACT_APP_TOUR_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${param.id}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&contentTypeId=${param.typeid}`,
      callback: (o: any) => {
        const response = o.data.response.body.items.item[0];
        //console.log(response);
        temp.addr1 = response.addr1;
        temp.contentid = response.contentid;
        temp.contenttypeid = response.contenttypeid;
        temp.firstimage = response.firstimage;
        temp.title = response.title;
        temp.mapx = response.mapx;
        temp.mapy = response.mapy;
        temp.homepage = response.homepage;
        temp.overview = response.overview;
        //setApiData(temp);
        //console.log(o);
        console.log('fetching (1) common success');
        getAPIDataIntro(temp);
      }
    };
    APIInterceptor(interceptor);
  };

  const getAPIDataIntro = async (temp: API_DATA_TYPE) => {
    const apidata: API_TYPE = {
      url: `https://apis.data.go.kr/B551011/EngService1/detailIntro1?serviceKey=${process.env.REACT_APP_TOUR_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${param.id}&contentTypeId=${param.typeid}&_type=json`,
      callback: (o: any) => {
        //console.log(o.data);
        const response = o.data.response.body.items.item[0];
        //console.log(response);
        temp.infocenter = response.infocenter;
        temp.restdate = response.restdate;
        temp.usetime = response.usetime;
        //setApiData(temp);
        //console.log(o);
        console.log('fetching (2) intro success');
        getAPIDataInfo(temp);
      }
    };
    APIInterceptor(apidata);
  };

  const getAPIDataInfo = async (temp: API_DATA_TYPE) => {
    const apidata: API_TYPE = {
      url: `https://apis.data.go.kr/B551011/EngService1/detailInfo1?serviceKey=${process.env.REACT_APP_TOUR_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${param.id}&contentTypeId=${param.typeid}&_type=json`,
      callback: (o: any) => {
        //console.log(o.data);
        const response = o.data.response.body.items.item;
        response.forEach((o: INFO_TYPE, index: number) => {
          if (o.infoname === 'Admission Fees') {
            temp.fee = o;
            return;
          }
          if (o.infoname === 'Interpretation Services Offered')
            temp.Interpretation = o;
          return;
        });
        //console.log(o);
        console.log('fetching (3) info success');
        setApiData(temp);
        setLoading((loading) => true);
      }
    };
    APIInterceptor(apidata);
  };

  const getAPIDataImage = async (temp: API_DATA_TYPE) => {
    const apidata: API_TYPE = {
      url: `https://apis.data.go.kr/B551011/EngService1/detailImage1?serviceKey=${process.env.REACT_APP_TOUR_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${param.id}&imageYN=Y&subImageYN=Y`,
      callback: (o: any) => {
        //console.log(o.data);
        //const response = o.data.response.body.items.item[0];
        //setApiData(temp);
      }
    };
    APIInterceptor(apidata);
  };
  /* const REG = new RegExp(/\(.*\)/gi); */

  const getTags = () => {
    const temp = _.filter(TAG_LIST, (o) => {
      return _.includes(tagcount, o.tag);
    });
    return temp;
  };

  console.log(apidata);

  return (
    <div className={loading ? 'info' : ''}>
      {loading ? (
        <>
          <Header type='black' />
          <div className='info_container'>
            <div className='info_about'>
              <InfoDetail
                title={apidata.title}
                addr1={apidata.addr1}
                firstimage={
                  apidata.firstimage !== '' ? apidata.firstimage : frontimg
                }
                overview={apidata.overview}
              />
              <LocationMapCom
                mapx={apidata.mapx}
                mapy={apidata.mapy}
                place={apidata.title}
              />
              <div className='info_about-imgbox'>
                <div></div>
                <div></div>
              </div>
            </div>
            <div className='info_infomation'>
              <div className='info_infomation-view d-flex'>
                <Like />
                <Bookmark />
              </div>
              <ul className='info_infomation-tags'>
                {_.map(getTags(), (o, index) => {
                  return (
                    <li
                      key={o.tag}
                      style={{
                        backgroundColor: index % 2 === 1 ? '#C2E56C' : '#B9B5FF'
                      }}
                    >
                      {o.svg}
                      <p>{o.tag}</p>
                    </li>
                  );
                })}
              </ul>
              <div className='info_infomation-detail'>
                <ul>
                  <li>
                    <p>00 Bookmarked</p>
                  </li>
                  <li>
                    <p>00 Liked</p>
                  </li>
                  <li>
                    <p>00 Reviewed</p>
                  </li>
                </ul>
                <hr
                  style={{
                    border: '0',
                    borderTop: '1px solid #000',
                    margin: '20px 0 18px'
                  }}
                />
                <ul>
                  <UseTimeComp text={apidata.usetime} />
                  <RestTimeComp text={apidata.restdate} />
                  <ReservationComp text={DETAIL_LIST[2].text} />
                  <EntryFeeComp text={apidata.fee.infotext} />
                  <SpendTimeComp text={DETAIL_LIST[4].text} />
                  <HomepageComp text={apidata.homepage} />
                  <NearbyComp text={DETAIL_LIST[6].text} />
                  <LanguageComp text={apidata.Interpretation.infotext} />
                  <KeyWordComp text={DETAIL_LIST[8].text} />
                </ul>
              </div>
              <MayLike />
              <RelatedMegazine />
              <Weather mapx='126.8999035848' mapy='37.5523989260' />
              <PastWeather mapx='126.8999035848' mapy='37.5523989260' />
            </div>
          </div>
          <Footer />
        </>
      ) : (
        <div
          style={{
            width: '100vw',
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <LoadingSpinner />
        </div>
      )}
    </div>
  );
}

function ListElement() {
  return <div className='info-element'></div>;
}
