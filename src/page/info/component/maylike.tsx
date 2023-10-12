import '../info.scss';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { mayLike_Type } from '../../admin/administrator';

const temp = [
  { name: 'Bukchon Hanok Village', contentid: '111111' },
  { name: 'Eunpyeong Hanok Village', contentid: '111111' },
  { name: 'Seoul Namsan Traditional Theater', contentid: '111111' }
];

type MayLikeArr_Type = {
  arr: mayLike_Type[] | undefined;
};

export default function MayLike({ arr }: MayLikeArr_Type) {
  return (
    <div className='maylike'>
      <h2>You may also like</h2>
      <ul>
        {_.map(arr, (o) => {
          return (
            <li key={`${o.name}_${o.likeId}`}>
              <Link to={`/info/${o.likeId}/76`}>{o.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
