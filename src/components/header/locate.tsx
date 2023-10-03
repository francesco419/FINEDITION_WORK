import _ from 'lodash';
import { useNavigate } from 'react-router';
import LocateButton from './components/toLocate';

type HeaderLocateType = {
  color: string;
};

const arr = [
  { name: 'Megazine', to: `${process.env.PUBLIC_URL}/megazine` },
  { name: 'Seoul', to: `${process.env.PUBLIC_URL}/info/264337/76` },
  { name: 'Region', to: `${process.env.PUBLIC_URL}/region` }
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
