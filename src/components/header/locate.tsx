import _ from 'lodash';
import { useNavigate } from 'react-router';

type HeaderLocateType = {
  color: string;
};

const arr = [
  { name: 'Megazine', to: '/cities' },
  { name: 'Seoul', to: '/info/264337/76' },
  { name: 'Cities', to: '/cities' },
  { name: 'Info', to: '/infolist' }
];

export default function HeaderLocate({ color }: HeaderLocateType) {
  const nav = useNavigate();

  const onClickHandler = (to: string) => {
    nav(to);
  };

  return (
    <div className='header_locate'>
      {_.map(arr, (o, index) => {
        return (
          <button
            onClick={() => onClickHandler(o.to)}
            style={{ color: color }}
            key={`${index}_locate`}
          >
            {o.name}
          </button>
        );
      })}
    </div>
  );
}
