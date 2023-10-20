import './footer.scss';
import { ReactComponent as FINEDITION } from '../../assets/svg/logo_letter.svg';
import { useNavigate } from 'react-router';
import _ from 'lodash';
import { useAppSelector } from '../../redux/hooks';
import { selectUserInfo } from '../../redux/slices/userInfoSlice';

const FOOTERMENU = [
  /*   [
    {
      name: 'About us',
      to: null
    }
  ], */
  [
    {
      name: 'Magazine',
      to: '/magazine'
    },
    {
      name: 'Region',
      to: '/region'
    },
    {
      name: 'Seoul',
      to: '/cities/'
    }
  ],
  [
    {
      name: 'My Page',
      to: '/profile/'
    },
    {
      name: 'Bookmark',
      to: '/bookmark'
    }
    /*     {
      name: 'Contact us',
      to: null
    } */
  ]
];

interface Footer_TYPE {
  type: boolean;
}

export default function Footer({ type }: Footer_TYPE) {
  const nav = useNavigate();
  const user = useAppSelector(selectUserInfo);

  const onClickHandlerFooter = (to: string | null) => {
    if (to === null) return;
    nav(to);
  };

  return (
    <div className='footer'>
      <FINEDITION fill={type ? '#000' : '#fff'} />
      {_.map(FOOTERMENU, (a, index) => {
        return (
          <div
            className='footer_divide'
            key={`${a[index].name}_footer_${index}}`}
          >
            {_.map(a, (o, index) => {
              if (o.name === 'My Page') {
                return (
                  <button
                    onClick={() => {
                      user.userid && onClickHandlerFooter(o.to);
                    }}
                    style={{ color: type ? '#000' : '#fff' }}
                    key={`${o.name}_${index}`}
                  >
                    {o.name}
                  </button>
                );
              }
              return (
                <button
                  onClick={() => onClickHandlerFooter(o.to)}
                  style={{ color: type ? '#000' : '#fff' }}
                  key={`${o.name}_${index}`}
                >
                  {o.name}
                </button>
              );
            })}
          </div>
        );
      })}
      <p className='footer_copyrights'>
        Copyright 2023 Finedition. All rights reserved.
      </p>
    </div>
  );
}
