import '../info.scss';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import img from '../assets/relate.png';

const temp = [
  { name: 'Bukchon Hanok Village', contentid: '111111' },
  { name: 'Eunpyeong Hanok Village', contentid: '111111' }
];
//받는 데이터 형태
/*
    {
        name:'Bukchon Hanok Village',
        contentid:'1243423'
    }
    */

export default function RelatedMegazine() {
  return (
    <div className='relatemegazine'>
      <h2>Related Magazine Stories</h2>
      <ul>
        {_.map(temp, (o) => {
          return (
            <li>
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
