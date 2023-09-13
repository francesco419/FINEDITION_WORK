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
import axios from 'axios';
import { useEffect } from 'react';
import Weather from './component/weather';
import _ from 'lodash';
import { countReset } from 'console';

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

const qq = `[Palace]<br>Feb-May, Sep-Oct 09:00-18:00<br>Jun-Aug 09:00-18:30<br>Nov-Jan 09:00-17:30<br>* Last admission: 1 hour before closing<br><br>
[Secret Garden Tour (Guided tour only)]<br>Mar-May, Sep-Oct 10:00-17:30<br>Jun-Aug 10:00-18:00<br>Feb, Nov 10:00-17:00<br>Dec-Jan 10:00-16:30<br>* Last tour: 1 hr 30 min before closing<BR> * Secret Garden Tour has limited space and must travel with a guide`;

const twst = '09:00-18:0019:00-18:00';

//const REG_USETIME: RegExp = `/^[0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2}$/`;

const REG_USETIME: RegExp = new RegExp(/[0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2}/);

const REG_USETIME2: RegExp = new RegExp(
  /([A-Z][a-z]{2}-[A-Z][a-z]{2},\s)?[A-Z][a-z]{2}-[A-Z][a-z]{2}\s[0-9]{2}:[0-9]{2}-[0-9]{2}:[0-9]{2}/,
  'g'
);

const COUNTRY = [
  { code: 'EN', country: 'English' },
  { code: 'AE', country: 'Arabic' },
  { code: 'CN', country: 'Chinese' },
  { code: 'CZ', country: 'Czech' },
  { code: 'DK', country: 'Danish' },
  { code: 'ID', country: 'Indonesian' },
  { code: 'MY', country: 'Malaysian' },
  { code: 'NL', country: 'Dutch' },
  { code: 'FR', country: 'French' },
  { code: 'FI', country: 'Finnish' },
  { code: 'DE', country: 'German' },
  { code: 'IT', country: 'Italian' },
  { code: 'JP', country: 'Japanese' },
  { code: 'KR', country: 'Korean' },
  { code: 'NO', country: 'Norwegian' },
  { code: 'PL', country: 'Polish' },
  { code: 'BR', country: 'Portuguese' },
  { code: 'RO', country: 'Romanian' },
  { code: 'RU', country: 'Russian' },
  { code: 'ES', country: 'Spanish' },
  { code: 'SE', country: 'Swedish' },
  { code: 'TH', country: 'Thai' },
  { code: 'PH', country: 'Filipino' },
  { code: 'TR', country: 'Turkish' }
];

const DETAIL_LIST = [
  {
    name: 'usetime',
    svg: <UseTime />,
    text: `[Palace]<br>Feb-May, Sep-Oct 09:00-18:00<br>Jun-Aug 09:00-18:30<br>Nov-Jan 09:00-17:30<br>* Last admission: 1 hour before closing<br><br>
    [Secret Garden Tour (Guided tour only)]<br>Mar-May, Sep-Oct 10:00-17:30<br>Jun-Aug 10:00-18:00<br>Feb, Nov 10:00-17:00<br>Dec-Jan 10:00-16:30<br>* Last tour: 1 hr 30 min before closing<BR> * Secret Garden Tour has limited space and must travel with a guide`,
    process: qq.match(REG_USETIME)
  },
  {
    name: 'restdate',
    svg: <RestDate />,
    text: `Tuesdays`,
    process: `Closed on Tuesday`
  },
  {
    name: 'reservation',
    svg: <Reservation />,
    text: `No reservation`,
    process: 'No reservation'
  },
  {
    name: 'fee',
    svg: <Fee />,
    text: `Individuals - Adults 1,000  won / Children 500 won<br>\n <br>\n* Adults (ages 19-64) / Children (ages 7-18)\n* Free admission (ID required): Preschoolers
    (ages 6 & younger), senior citizens (ages 65 & older), visitors wearing hanbok`,
    process: 'Yes'
  },
  {
    name: 'spendtime',
    svg: <SpendTime />,
    text: `About 1h 30m`,
    process: 'About 1h 30m'
  },
  {
    name: 'homepage',
    svg: <Homepage />,
    text: `<a href=\"http://www.mdsd.or.kr/\" target=\"_blank\" title=\"새창  :명동대성당 홈페이지로 이동\">www.mdsd.or.kr</a>`,
    process:
      `<a href=\"http://www.mdsd.or.kr/\" target=\"_blank\" title=\"새창  :명동대성당 홈페이지로 이동\">www.mdsd.or.kr</a>`.match(
        new RegExp(
          /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&=]*)/
        )
      )
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
    text: `[Guided Tours]<br>\n<br>\n * English - 10:00, 12:00, 14:00, 16:00<br>\n * Japanese - 09:00, 09:40, 10:40, 11:40, 12:40, 13:40, 14:40, 15:40, 16:40 (Mar-Sep)<br>\n * Chinese - 11:00, 13:00, 15:00<br>\n <br>\n<strong> </strong>* Reservation required via official website, except for Saturdays; up to 300 people per session<br>\n* Korean nationals may join a foreign language guided tour when accompanying international visitors.<br>\n* Guided tour in Japanese 16:40 session is only offered from March to September`,
    process: ''
  },
  {
    name: 'keyword',
    svg: <Keyword />,
    text: 'a',
    process: [
      '#namsangol',
      '#hanok',
      '#village',
      '#jung-gu',
      '#seoul',
      '#chungmuro',
      '#traditional',
      '#experience'
    ]
  }
];

export default function Info() {
  useEffect(() => {
    temple();
  }, []);

  const temple = () => {
    const a = qq.replaceAll('<br>', '\n');
  };

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
          <div className='info_about-imgbox'>
            <div></div>
            <div></div>
          </div>
          <div className='info_about-map'></div>
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
          <ul className='info_infomation-detail'>
            <li>
              <p>00 Bookmarked</p>
            </li>
            <li>
              <p>00 Liked</p>
            </li>
            <li>
              <p>00 Reviewed</p>
            </li>
            <li></li>
            <li>
              {_.map(DETAIL_LIST, (o) => {
                return (
                  <ul>
                    {o.svg}
                    <div
                      style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        maxWidth: '200px'
                      }}
                    >
                      {typeof o.process === 'string' ? (
                        <p>{o.process}&nbsp;</p>
                      ) : (
                        _.map(o.process, (o) => {
                          return <p>{o}</p>;
                        })
                      )}
                    </div>
                    {(o.name === 'fee' || o.name === 'usetime') && (
                      <li style={{ position: 'relative' }}>
                        <RestDate />
                        <div
                          style={{
                            position: 'absolute',
                            top: '100%',
                            right: '50%',
                            width: '300px'
                          }}
                        >
                          <pre>
                            {
                              o.text.replaceAll(new RegExp(/<[bB][rR]>/g), '\n') //.replaceAll('*', '')
                            }
                          </pre>
                        </div>
                      </li>
                    )}
                  </ul>
                );
              })}
            </li>
          </ul>
          <ul className='info_infomation-maylike'>
            <li></li>
          </ul>
          <div className='info_infomation-megazine'></div>
          <div className='info_infomation-weather'>
            <div className='info_infomation-recent'></div>
            <div className='info_infomation-calender'></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ListElement() {
  return <div className='info-element'></div>;
}
