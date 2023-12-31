import Header from '../../components/header/header';
import { ReactComponent as Hovers } from './asset/sample4.svg';
import './region.scss';
import Card from './components/card';
import _ from 'lodash';
import { CARDDATA } from '../../temp/card';
import Footer from '../../components/footer/footer';
import RegionSlideButton from './components/regionSlideButton';

export default function Region() {
  return (
    <div className='region'>
      <Header type='black' />
      <div className='region_container'>
        <ul className='region_title'>
          <li data-aos='fade-up' data-aos-duration='500'>
            <h2>
              {`Explore Regions with Major Cities,\nas we curated some besties for your journey`}
            </h2>
          </li>
          <li data-aos='fade-up' data-aos-duration='700'>
            <p>Find the hidden beauty that lies under 1000 history of Korea</p>
          </li>
          <li data-aos='fade-up' data-aos-duration='1000'>
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
      <Footer type={false} />
    </div>
  );
}
