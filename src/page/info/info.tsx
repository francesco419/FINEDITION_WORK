import Header from '../../components/header/header';
import './info.scss';
import frontimg from './assets/frontimg.png';
import _, { set } from 'lodash';
import { ReactComponent as Like } from './assets/like.svg';
import { ReactComponent as Bookmark } from './assets/bookmark.svg';
import { ReactComponent as Tele } from './assets/tele.svg';
import { ReactComponent as Locate } from './assets/location.svg';
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
import { useEffect } from 'react';
import {
  APIInterceptor,
  getInterceptor,
  sendAxiosState
} from '../../func/interceptor';
import { API_TYPE } from '../../func/interface';
import { useParams } from 'react-router';
import { useState } from 'react';
import LoadingSpinner from '../../components/common/loadingspinner';
import ImgBox from './component/imgbox';
import InfoTag from './component/infotag';
import PageCount from '../../components/common/pageCount';
import { info_Type } from '../admin/administrator';
import { dataInfo } from '../../temp/infoDataF';
import InfoSkeleton from '../../components/skeleton/infoSkeleton';

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
  const [loading, setLoading] = useState<boolean>();
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
  const [typedData, setTypedData] = useState<info_Type>();

  useEffect(() => {
    getAPIDataCommon(apidata);
    getInfoData(param.id);
    //setLoading((loading) => true);
  }, []);

  const getInfoData = (id: string | undefined) => {
    if (id === undefined) {
      return;
    }

    const contentid = parseInt(id);
    _.forEach(dataInfo, (o) => {
      if (o.id === contentid) {
        setTypedData((typedData) => o);
      }
    });
  };

  const getAPIDataCommon = async (temp: API_DATA_TYPE) => {
    const interceptor: API_TYPE = {
      url: `https://apis.data.go.kr/B551011/EngService1/detailCommon1?serviceKey=${process.env.REACT_APP_TOUR_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&contentId=${param.id}&defaultYN=Y&firstImageYN=Y&areacodeYN=Y&catcodeYN=Y&addrinfoYN=Y&mapinfoYN=Y&overviewYN=Y&contentTypeId=${param.typeid}`,
      callback: (o: any) => {
        const response = o.data.response.body.items.item[0];
        temp.addr1 = response.addr1;
        temp.contentid = response.contentid;
        temp.contenttypeid = response.contenttypeid;
        temp.firstimage = response.firstimage;
        temp.title = response.title;
        temp.mapx = response.mapx;
        temp.mapy = response.mapy;
        temp.homepage = response.homepage;
        temp.overview = response.overview;
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
        const response = o.data.response.body.items.item[0];
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
        //console.log('fetching (3) info success');
        //setApiData(temp);
        //getBakcData(temp.contentid);
        setLoading((loading) => true);
      }
    };
    APIInterceptor(apidata);
  };

  const getBakcData = (id: string) => {
    const apidata: sendAxiosState = {
      url: 'http://localhost:8080/getinfo',
      data: { id: id },
      callback: (o: any) => {
        //console.log(o);
        console.log(o);
        //setApiData(temp);
        //setLoading((loading) => true);
      }
    };
    getInterceptor(apidata);
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

  if (!loading) {
    return <InfoSkeleton />;
  } else {
    return (
      <div className={loading ? 'info' : ''}>
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
              typedDetailText={typedData?.pickText}
            />
            <LocationMapCom
              mapx={apidata.mapx}
              mapy={apidata.mapy}
              place={apidata.title}
            />
            <div className='info_about-tele'>
              <div>
                <Locate />
                <p>{apidata.addr1}</p>
              </div>
              <div>
                <Tele />
                <p>{apidata.infocenter}</p>
              </div>
            </div>
            <ImgBox img={apidata.title.match(new RegExp(/[가-힣]+\s?/))} />
          </div>
          <div className='info_infomation'>
            <div className='info_infomation-view d-flex'>
              <Like />
              <Bookmark />
            </div>
            <InfoTag data={typedData?.tag} />
            <PageCount
              value={{
                bookmark: typedData?.bookmark,
                liked: typedData?.like,
                view: typedData?.view
              }}
            />
            <div className='info_infomation-detail'>
              <hr />
              <ul>
                <UseTimeComp text={apidata.usetime} />
                <RestTimeComp text={apidata.restdate} />
                <ReservationComp text={'`No reservation`'} />
                <EntryFeeComp text={apidata.fee.infotext} />
                <SpendTimeComp spend={typedData?.spendTime} />
                <HomepageComp text={apidata.homepage} />
                <NearbyComp station={typedData?.station} />
                <LanguageComp text={apidata.Interpretation.infotext} />
                <KeyWordComp keyword={typedData?.keyword} />
              </ul>
            </div>
            <MayLike arr={typedData?.maylike} />
            <Weather mapx='126.8999035848' mapy='37.5523989260' />
            <PastWeather mapx='126.8999035848' mapy='37.5523989260' />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
{
  /* <RelatedMegazine /> */
}

// N/A (Open all year round)
// 메인이미지 대체품
