import Header from '../../components/header/header';
import './info.scss';
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
import Weather from '../../components/weather/weather';
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
import _ from 'lodash';
import { API_TYPE } from '../../func/interface';
import { useParams } from 'react-router';
import { useState } from 'react';
import ImgBox from './component/imgbox';
import InfoTag from './component/infotag';
import PageCount from '../../components/common/pageCount';
import { info_Type } from '../admin/administrator';
import { dataInfo } from '../../temp/infoDataF';
import InfoSkeleton from '../../components/skeleton/infoSkeleton';
import { API_DATA_TYPE, INFO_TYPE } from '../../func/interface';
import BookmarkButton from '../../components/bookmark/bookmarkButton';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectUserInfo } from '../../redux/slices/userInfoSlice';
import { addView } from '../../redux/slices/viewSlice';

export default function Info() {
  const user = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();
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
  const [bookmark, setBookmark] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);

  useEffect(() => {
    getAPIDataCommon(apidata);
    getInfoData(param.id);
    getLikeBookmark(user.userid as number, parseInt(param.id as string));
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
        getAPIDataInfo(temp);
      }
    };
    APIInterceptor(apidata);
  };

  const getAPIDataInfo = async (temp: API_DATA_TYPE) => {
    const apidata: API_TYPE = {
      url: `https://apis.data.go.kr/B551011/EngService1/detailInfo1?serviceKey=${process.env.REACT_APP_TOUR_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&contentId=${param.id}&contentTypeId=${param.typeid}&_type=json`,
      callback: (o: any) => {
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
        //setApiData(temp);
        //getBakcData(temp.contentid);
        dispatch(addView(parseInt(param.id as string)));
        setLoading((loading) => true);
      }
    };
    APIInterceptor(apidata);
  };
  /* 
  const getLikeBookmark = (id: number) => {
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
 */
  const getLikeBookmark = (id: number, num: number) => {
    const apidata: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/checklikebookmark`,
      data: { userid: id, dataid: num },
      callback: (o: any) => {
        const data = o.data.result;
        if (data[0].length > 0) {
          setLike((like) => true);
        }
        if (data[1].length > 0) {
          setBookmark((bookmark) => true);
        }
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
                typedData?.mainImg !== ''
                  ? typedData?.mainImg
                  : apidata.firstimage
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
            <BookmarkButton
              likeBool={like}
              bookmarkBool={bookmark}
              userid={user.userid as number}
              dataId={typedData?.id}
            />
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
        <Footer type={false} />
      </div>
    );
  }
}
