import _ from 'lodash';
import { useNavigate } from 'react-router';
import LocateButton from './components/toLocate';
import { useLocation } from 'react-router';

type HeaderLocateType = {
  color: string;
};

const arr = [
  { name: 'Magazine', to: `${process.env.PUBLIC_URL}/magazine` },
  { name: 'Region', to: `${process.env.PUBLIC_URL}/region` },
  { name: 'Seoul', to: `${process.env.PUBLIC_URL}/cities/` }
];

export default function HeaderLocate({ color }: HeaderLocateType) {
  const nav = useNavigate();
  const location = useLocation();

  console.log(location.pathname.includes('info'));

  const onClickHandler = (to: string) => {
    nav(to);
  };

  return (
    <div className='header_locate'>
      {_.map(arr, (o, index) => {
        if (o.name === 'Seoul') {
          return (
            <LocateButton
              clickHandler={() => onClickHandler(o.to)}
              color={location.pathname.includes('info') ? '#bceb49' : color}
              obj={o}
              key={`${index}_locate`}
            />
          );
        }
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
