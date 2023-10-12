import _ from 'lodash';
import { useNavigate } from 'react-router';
import LocateButton from './components/toLocate';

type HeaderLocateType = {
  color: string;
};

const arr = [
  { name: 'Megazine', to: `${process.env.PUBLIC_URL}/megazine` },
  { name: 'Region', to: `${process.env.PUBLIC_URL}/region` },
  { name: 'Seoul', to: `${process.env.PUBLIC_URL}/cities/` }
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
          <LocateButton
            clickHandler={() => onClickHandler(o.to)}
            color={color}
            obj={o}
            key={`${index}_locate`}
          />
        );
      })}
    </div>
  );
}
