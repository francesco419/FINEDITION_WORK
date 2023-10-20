import '../info.scss';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { mayLike_Type } from '../../admin/administrator';
import { useNavigate } from 'react-router-dom';

type MayLikeArr_Type = {
  arr: mayLike_Type[] | undefined;
};

export default function MayLike({ arr }: MayLikeArr_Type) {
  const nav = useNavigate();

  const onClickHandler = (id: number) => {
    nav(`/info/${id}/76`);
    window.location.reload();
  };
  return (
    <div className='maylike'>
      <h2>You may also like</h2>
      <ul>
        {_.map(arr, (o) => {
          return (
            <li key={`${o.name}_${o.likeId}`}>
              <button onClick={() => onClickHandler(o.likeId)}>{o.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
