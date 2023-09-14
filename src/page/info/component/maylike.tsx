import '../info.scss';
import _ from 'lodash';
import { Link } from 'react-router-dom';

const temp = [
  { name: 'Bukchon Hanok Village', contentid: '111111' },
  { name: 'Eunpyeong Hanok Village', contentid: '111111' },
  { name: 'Seoul Namsan Traditional Theater', contentid: '111111' }
];
//받는 데이터 형태
/*
    {
        name:'Bukchon Hanok Village',
        contentid:'1243423'
    }
    */

export default function MayLike() {
  return (
    <div className='maylike'>
      <h2>You may also like</h2>
      <ul>
        {_.map(temp, (o) => {
          return (
            <li>
              <Link to={`/info/${o.contentid}/76`}>{o.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
