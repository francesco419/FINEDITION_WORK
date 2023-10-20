import './spots.scss';
import { cardData } from '../../../temp/cardData';
import { cardType } from '../../admin/administrator';
import Card from '../../../components/card/cardComp';
import _ from 'lodash';

const data0: cardType[] = [
  cardData[0],
  cardData[1],
  cardData[2],
  cardData[3],
  cardData[4]
];

const list = [2475097, 1382671, 1747593, 1909500, 1011983];

export default function HomeSpots() {
  return (
    <div className='home_spots' data-aos='fade-up' data-aos-duration='1000'>
      <h2>Interesting Spots in Seoul</h2>
      <div className='home_spots-cards'>
        {_.map(
          _.filter(cardData, (o) => {
            return list.includes(o.id);
          }),
          (o, index) => {
            return (
              <Card
                data={o}
                color='#fff'
                type='medium'
                fcolor='#fff'
                key={`${o.id}_spot_${index}}`}
              />
            );
          }
        )}
      </div>
    </div>
  );
}
