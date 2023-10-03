import Header from '../../components/header/header';
import { ReactComponent as Hovers } from './asset/sample4.svg';
import './region.scss';
import SlideButton from '../../components/button/slideButton';
import Card from './components/card';
import _, { forEach } from 'lodash';
import { CARDDATA } from '../../temp/card';
import Footer from '../../components/footer/footer';
import { useState, useEffect } from 'react';
import RegionSlideButton from './components/regionSlideButton';

export default function Region() {
  useEffect(() => {
    document.addEventListener('click', (e) => {
      console.log(e.pageX, e.pageY, window.innerHeight);
    });
  });
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
          <RegionSlideButton />
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
      <Footer />
    </div>
  );
}
