import Card from '../../../components/card/cardComp';
import { cardData } from '../../../temp/cardData';
import _ from 'lodash';

export default function ProfileMyList() {
  return (
    <div className='profileMyList'>
      <div className='profileMyList_header'>
        <p>00 Viewed</p>
        <p>00 Bookmarked*</p>
      </div>
      <ul className='profileMyList_list'>
        {_.map(_.shuffle(cardData), (o, index) => {
          if (index > 40) {
            return;
          }
          return (
            <li>
              <Card data={o} color={'#fff'} type='small' fcolor='#000' />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
