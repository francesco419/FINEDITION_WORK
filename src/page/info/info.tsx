import Header from '../../components/header/header';
import './info.scss';
import frontimg from './assets/frontimg.png';
import { ReactComponent as Pick } from './assets/Storytelling.svg';
import { ReactComponent as Down } from './assets/arrow-down.svg';
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
import _ from 'lodash';
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
    name: 'usetime',
    svg: <UseTime />,
    text: `[Palace]<br>Feb-May, Sep-Oct 09:00-18:00<br>Jun-Aug 09:00-18:30<br>Nov-Jan 09:00-17:30<br>* Last admission: 1 hour before closing<br><br>
    [Secret Garden Tour (Guided tour only)]<br>Mar-May, Sep-Oct 10:00-17:30<br>Jun-Aug 10:00-18:00<br>Feb, Nov 10:00-17:00<br>Dec-Jan 10:00-16:30<br>* Last tour: 1 hr 30 min before closing<BR> * Secret Garden Tour has limited space and must travel with a guide`
  },
  {
    name: 'restdate',
    svg: <RestDate />,
    text: `Tuesdays`
  },
  {
    name: 'reservation',
    svg: <Reservation />,
    text: `No reservation`
  },
  {
    name: 'fee',
    svg: <Fee />,
    text: `Individuals - Adults 1,000  won / Children 500 won<br>\n <br>\n* Adults (ages 19-64) / Children (ages 7-18)\n* Free admission (ID required): Preschoolers
    (ages 6 & younger), senior citizens (ages 65 & older), visitors wearing hanbok`
  },
  {
    name: 'spendtime',
    svg: <SpendTime />,
    text: `About 1h 30m`
  },
  {
    name: 'homepage',
    svg: <Homepage />,
    text: `<a href=\"http://www.mdsd.or.kr/\" target=\"_blank\" title=\"새창  :명동대성당 홈페이지로 이동\">www.mdsd.or.kr</a>`
  },
  {
    name: 'transport',
    svg: <Transport />,
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

export default function Info() {
  const getTags = () => {
    const temp = _.filter(TAG_LIST, (o) => {
      return _.includes(tagcount, o.tag);
    });
    return temp;
  };

  return (
    <div className='info'>
      <Header type='black' />
      <div className='info_container'>
        <div className='info_about'>
          <div className='info_about-title'>
            <h1>Namsangol Hanok Village</h1>
            <p>Jung-gu, Seoul</p>
          </div>
          <div className='info_about-detail'>
            <div className='info_about-frontimg'>
              <img src={frontimg} />
            </div>
            <div className='info_about-text'>
              <div>
                <Pick />
                <h3>Finedition Pick</h3>
              </div>
              <p>{`Situated in the heart of Seoul, this Hanok village is very near from metro and unique surroundings of Jung-gu.
As it is surrounded by Namsan park, you can enjoy hanok village and the nature at the same time.
There are some unique performances and classes held, so make sure to reserve it before you visit!`}</p>
              <p>{`The Namsangol Hanok Village offers one the opportunity to experience a wide cross-section of Joseon-eracitizenry
and activities, from royalty to commoners. A great effort has been made to accurately furnish each dwelling with
appropriate era and social status appointments. A traditional Korean style garden, complete with a flowing stream
and pavilion was constructed on the site in order to revive the classical feel of the Joseon-era. `}</p>
            </div>
            {/* <div className='info_about-highlights d-flex'>
              <div className='d-flex'>
                <p>Surrounding Highlights</p>
                <Down />
              </div>
            </div> */}
          </div>
          <LocationMapCom
            mapx='126.8999035848'
            mapy='37.5523989260'
            place='망원한강공원'
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
              <UseTimeComp
                row={DETAIL_LIST[0].name}
                svg={DETAIL_LIST[0].svg}
                text={DETAIL_LIST[0].text}
              />
              <RestTimeComp
                row={DETAIL_LIST[1].name}
                svg={DETAIL_LIST[1].svg}
                text={DETAIL_LIST[1].text}
              />
              <ReservationComp
                row={DETAIL_LIST[2].name}
                svg={DETAIL_LIST[2].svg}
                text={DETAIL_LIST[2].text}
              />
              <EntryFeeComp
                row={DETAIL_LIST[3].name}
                svg={DETAIL_LIST[3].svg}
                text={DETAIL_LIST[3].text}
              />
              <SpendTimeComp
                row={DETAIL_LIST[4].name}
                svg={DETAIL_LIST[4].svg}
                text={DETAIL_LIST[4].text}
              />
              <HomepageComp
                row={DETAIL_LIST[5].name}
                svg={DETAIL_LIST[5].svg}
                text={DETAIL_LIST[5].text}
              />
              <NearbyComp
                row={DETAIL_LIST[6].name}
                svg={DETAIL_LIST[6].svg}
                text={DETAIL_LIST[6].text}
              />
              <LanguageComp
                row={DETAIL_LIST[7].name}
                svg={DETAIL_LIST[7].svg}
                text={DETAIL_LIST[7].text}
              />
              <KeyWordComp
                row={DETAIL_LIST[8].name}
                svg={DETAIL_LIST[8].svg}
                text={DETAIL_LIST[8].text}
              />
            </ul>
          </div>
          <MayLike />
          <RelatedMegazine />
          <Weather mapx='126.8999035848' mapy='37.5523989260' />
          <PastWeather mapx='126.8999035848' mapy='37.5523989260' />
        </div>
      </div>
    </div>
  );
}

function ListElement() {
  return <div className='info-element'></div>;
}
