import './news.scss';
import _ from 'lodash';
import youtube from '../../../assets/image/Youtube.png';
import insta from '../../../assets/image/Insta.png';
import yLogo from '../../../assets/image/Youtube-logo.png';

const NEWSTITLE: NewsBoxType[] = [
  {
    title: `Byeongsan Seowon offers relaxation for\nthe body and soul in Andong`,
    link: 'https://koreajoongangdaily.joins.com/news/2023-09-06/culture/foodTravel/Byeongsan-Seowon-offers-relaxation-for-the-body-and-soul-in-Andong/1863255'
  },
  {
    title: `Creator of superhero webtoon 'Moving'\ngoes all in for Disney+ adaptation`,
    link: 'https://en.yna.co.kr/view/AEN20230828006400315?section=culture/entertainment'
  },
  {
    title: `Seoul releases list of city's must-try\neateries, bars ahead of Taste of Seoul week`,
    link: 'https://koreajoongangdaily.joins.com/news/2023-08-31/culture/foodTravel/Seoul-releases-list-of-citys-musttry-eateries-bars-ahead-of-Taste-of-Seoul-week/1859461'
  },
  {
    title: `When life gets tedious, set course for\nthese three islands in Sinan`,
    link: 'https://english.hani.co.kr/arti/english_edition/e_entertainment/1095381.html'
  },
  {
    title: `Korean teachers use leave for collective\naction, heightening tensions with government`,
    link: 'https://english.hani.co.kr/arti/english_edition/e_national/1107056.html'
  }
];

const DISCOVERIMG = [
  {
    src: youtube,
    href: 'https://www.youtube.com/@finedition'
  },
  {
    src: insta,
    href: 'https://www.instagram.com/finedition.kr/'
  }
];

export default function NewsHome() {
  return (
    <div className='newsHome'>
      <div className='newsHome_right'>
        <h2>{`Discover diversity \nof Korea with us`}</h2>
        <div style={{ display: 'flex' }}>
          {_.map(DISCOVERIMG, (o, index) => {
            return (
              <div className='newsHome_right_image'>
                <img src={o.src} key={`${index}_img`} />
                <a href={o.href} />
              </div>
            );
          })}
        </div>
        <div className='newsHome_video'>
          <img src={yLogo} />
          <a href='https://www.youtube.com/@finedition' />
        </div>
        <p>{`Finedition Youtube Channel Coming soon\non November, 2023`}</p>
      </div>
      <div className='newsHome_left'>
        <div className='newsHome_title'>
          <h2>Latest News in Korea</h2>
        </div>
        {_.map(NEWSTITLE, (o) => {
          return <NewsBox title={o.title} link={o.link} key={`${o.title}`} />;
        })}
      </div>
    </div>
  );
}

interface NewsBoxType {
  title: string;
  link: string;
}

function NewsBox({ title, link }: NewsBoxType) {
  return (
    <div className='newsHome_textBox'>
      <a href={link}>{title}</a>
    </div>
  );
}
