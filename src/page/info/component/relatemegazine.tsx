import '../info.scss';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import img from '../assets/relate.png';

const temp = [
  { name: 'Bukchon Hanok Village', contentid: '111111' },
  { name: 'Eunpyeong Hanok Village', contentid: '111111' }
];

export default function RelatedMegazine() {
  return (
    <div className='relatemegazine'>
      <h2>Related Magazine Stories</h2>
      <ul>
        {_.map(temp, (o) => {
          return (
            <li key={`${o.name}_${o.contentid}`}>
              <Link to={`/info/${o.contentid}/76`}>
                <img src={img} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
