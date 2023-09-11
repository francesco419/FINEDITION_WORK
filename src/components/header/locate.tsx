import _ from 'lodash';
import { useNavigate } from 'react-router';

type HeaderLocateType = {
  color: string;
};

const arr = [
  { name: 'Megazine', to: '/cities' },
  { name: 'Seoul', to: '/cities' },
  { name: 'Cities', to: '/cities' }
];

export default function HeaderLocate({ color }: HeaderLocateType) {
  const nav = useNavigate();

  const onClickHandler = (to: string) => {
    nav(to);
  };

  return (
    <div className='header_locate'>
      {_.map(arr, (o) => {
        return (
          <button onClick={() => onClickHandler(o.to)} style={{ color: color }}>
            {o.name}
          </button>
        );
      })}
    </div>
  );
}
