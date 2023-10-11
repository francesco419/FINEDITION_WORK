import './spots.scss';
import { cardData } from '../../../temp/cardData';
import { cardType } from '../../admin/administrator';
import CardSlide from '../../../components/card/slide/cardSlide';
import Card from '../../../components/card/cardComp';
import _ from 'lodash';

const data0: cardType[] = [
  cardData[0],
  cardData[1],
  cardData[2],
  cardData[3],
  cardData[4]
];

export default function HomeSpots() {
  return (
    <div className='home_spots'>
      <h2>Interesting Spots around you</h2>
      <div className='home_spots-cards'>
        {_.map(data0, (o) => {
          return <Card data={o} color='#fff' type='medium' fcolor='#fff' />;
        })}
      </div>
    </div>
  );
}
