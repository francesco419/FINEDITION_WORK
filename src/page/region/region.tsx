import Header from '../../components/header/header';
import { ReactComponent as Hovers } from './asset/sample4.svg';
import './region.scss';
import SlideButton from '../../components/button/slideButton';
import Card from './components/card';
import _ from 'lodash';

const CARDDATA = [
  {
    location: 'Seoul',
    text: `Cultural heart of South Korea,\nfeatures historic palaces, temples, and a vibrant\nmodern culture. While it’s a bustling\nmetropolis, it also boasts beautiful nature\nscenery like Bukhansan Mountain and Han\nRiver, offering picturesque scenic views.`,
    to: 'd',
    xy: { x: 120, y: 510 },
    backColor: '#ED721D',
    regionNum: '032'
  },
  {
    location: 'Gyeonggi-do',
    text: `Surrounds the capital region and features
a mix of urban and rural landscapes,
including the scenic Yangpyeong area.
Dynamic hub of culture, economy, and
innovation going around.`,
    to: null,
    xy: { x: -50, y: 680 },
    backColor: '#DDD1AF',
    regionNum: '032'
  },
  {
    location: 'Incheon',
    text: `Major international port city, it plays a
crucial role in South Korea's global trade
and cultural exchange. Coastal city with
beautiful shorelines and islands with scenic
views of the West Sea.`,
    to: null,
    xy: { x: -110, y: 900 },
    backColor: '#ED721D',
    regionNum: '032'
  },
  {
    location: 'Chungcheong Namdo',
    text: `Offers a mix of mountains, plains, coastal
areas and historical sites like Gongju and
Buyeo, reflecting Korea's ancient history.
Taejosan Mountain and peaceful Seosan
Take are notable attractions.`,
    to: null,
    xy: { x: -110, y: 1060 },
    backColor: '#BDD18F',
    regionNum: '032'
  },
  {
    location: 'Saejong',
    text: `Famous for its traditional Korean cuisine,
including Jeonju Bibimbap, and its rich
cultural heritage. Offers picturesque rural
landscapes, including lush rice paddies
and the scenic Naejangsan National Park.`,
    to: null,
    xy: { x: -50, y: 1130 },
    backColor: '#D0DEB1',
    regionNum: '032'
  },
  {
    location: 'Daejeon',
    text: `Known for its scientific institutions and
educational facilities, it is at the forefront
of research and innovation. Nestled among
rolling hills and enjoys proximity to national
parks like Gyeryongsan, offering hiking and
outdoor activities.`,
    to: null,
    xy: { x: -50, y: 1200 },
    backColor: '#90C123',
    regionNum: '032'
  },
  {
    location: 'Jeolla Bukdo',
    text: `Famous for its traditional Korean cuisine,
including Jeonju Bibimbap, and its rich
cultural heritage. Offers picturesque rural
landscapes, including lush rice paddies
and the scenic Naejangsan National Park.`,
    to: null,
    xy: { x: -110, y: 1350 },
    backColor: '#DA9282',
    regionNum: '032'
  },
  {
    location: 'Gwangju',
    text: `Has a strong cultural identity, known for
its pro-democracy movements and vibrant
arts scene. Surrounded by mountains and
is known for its picturesque landscapes,
like Mudeung Mountain National Park.`,
    to: null,
    xy: { x: -110, y: 1480 },
    backColor: '#FFCEA2',
    regionNum: '032'
  },
  {
    location: 'Jeolla Namdo',
    text: `Known for its traditional villages, including
Suncheon and Boseong, offering a glimpse
into Korea's rural heritage. Famous for its
coastal beauty , with stunning islands like
Geoje and Suncheon Bay Wetland Reserve.`,
    to: null,
    xy: { x: -110, y: 1670 },
    backColor: '#F2AA6A',
    regionNum: '032'
  },
  {
    location: 'Jeju',
    text: `Has its own dialect, traditions, and iconic
haenyeo culture of female divers, preserving
its distinct cultural heritage. Here boasts
breathtaking landscapes, including Hallasan
volcano, pristine beaches, and unique
basalt formations.`,
    to: null,
    xy: { x: 400, y: 1950 },
    backColor: '#67CF7E',
    regionNum: '032'
  },
  {
    location: 'Jeju',
    text: `Has its own dialect, traditions, and iconic
haenyeo culture of female divers, preserving
its distinct cultural heritage. Here boasts
breathtaking landscapes, including Hallasan
volcano, pristine beaches, and unique
basalt formations.`,
    to: null,
    xy: { x: 400, y: 1950 },
    backColor: '#67CF7E',
    regionNum: '032'
  },
  {
    location: 'Jeju',
    text: `Has its own dialect, traditions, and iconic
haenyeo culture of female divers, preserving
its distinct cultural heritage. Here boasts
breathtaking landscapes, including Hallasan
volcano, pristine beaches, and unique
basalt formations.`,
    to: null,
    xy: { x: 400, y: 1950 },
    backColor: '#67CF7E',
    regionNum: '032'
  },
  {
    location: 'Jeju',
    text: `Has its own dialect, traditions, and iconic
haenyeo culture of female divers, preserving
its distinct cultural heritage. Here boasts
breathtaking landscapes, including Hallasan
volcano, pristine beaches, and unique
basalt formations.`,
    to: null,
    xy: { x: 400, y: 1950 },
    backColor: '#67CF7E',
    regionNum: '032'
  },
  {
    location: 'Jeju',
    text: `Has its own dialect, traditions, and iconic
haenyeo culture of female divers, preserving
its distinct cultural heritage. Here boasts
breathtaking landscapes, including Hallasan
volcano, pristine beaches, and unique
basalt formations.`,
    to: null,
    xy: { x: 400, y: 1950 },
    backColor: '#67CF7E',
    regionNum: '032'
  }
];

export default function Region() {
  return (
    <div className='region'>
      <Header type='black' />
      <div className='region_container'>
        <ul className='region_title'>
          <li>
            <h2>
              {`Explore Regions with Major Cities,\nas we curated some besties for your journey`}
            </h2>
          </li>
          <li>
            <p>Find the hidden beauty that lies under 1000 history of Korea</p>
          </li>
          <li>
            <p>
              *Unfortunetly, only Seoul page is available. Other cities will be
              accessible in 2024.01
            </p>
          </li>
          <li>
            <SlideButton />
          </li>
        </ul>
        <Hovers />
        {_.map(CARDDATA, (o) => {
          return (
            <Card
              location={o.location}
              text={o.text}
              to={o.to}
              xy={o.xy}
              backColor={o.backColor}
              regionNum={o.regionNum}
            />
          );
        })}
      </div>
    </div>
  );
}
{
  /*       <Hovers /> */
}
