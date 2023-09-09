import './festival.scss';
import { useState } from 'react';
import _ from 'lodash';
import { ReactComponent as Arrow } from '../../assets/svg/Arrow circle down.svg';
import youtube from '../../assets/image/Youtube.png';
import insta from '../../assets/image/Insta.png';
import facebook from '../../assets/image/Facebook.png';
import yLogo from '../../assets/image/Youtube-logo.png';

const NEWSTITLE: NewsBoxType[] = [
  {
    title: 'Festivals coming up on autumn',
    link: 'http://www.naver.com'
  },
  {
    title: 'Gwanghamun open to visitors',
    link: 'http://www.naver.com'
  },
  {
    title: 'Will be rainning all day long',
    link: 'http://www.naver.com'
  },
  {
    title: 'Shopping week is on your way',
    link: 'http://www.naver.com'
  },
  {
    title: 'Spaces between things are unbalanced!',
    link: 'http://www.naver.com'
  },
  {
    title: 'Autumn is coming, be prepared!',
    link: 'http://www.naver.com'
  }
];

const DISCOVERIMG = [
  {
    src: youtube
  },
  {
    src: insta
  },
  {
    src: facebook
  }
];

export default function NewsHome() {
  return (
    <div className='newsHome'>
      <div className='newsHome_left'>
        <div className='newsHome_title'>
          <h2>Latest News in Korea</h2>
          <button>
            <Arrow />
          </button>
        </div>
        {_.map(NEWSTITLE, (o) => {
          return <NewsBox title={o.title} link={o.link} key={`${o.title}`} />;
        })}
      </div>
      <div className='newsHome_right'>
        <h2>{`Discover various \nways of Korea`}</h2>
        {_.map(DISCOVERIMG, (o, index) => {
          return (
            <img
              src={o.src}
              key={`${index}_img`}
              className='newsHome_right_image'
            />
          );
        })}
        <div className='newsHome_video'>
          <img src={yLogo} />
        </div>
        <p>{`Must know tips when exploring Seoul\n#Seoul #travel #Korea`}</p>
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
