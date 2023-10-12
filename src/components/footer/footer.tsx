import './footer.scss';
import { ReactComponent as FINEDITION } from '../../assets/svg/logo_letter.svg';
import { useNavigate } from 'react-router';
import _ from 'lodash';

const FOOTERMENU = [
  [
    {
      name: 'About us',
      to: null
    }
  ],
  [
    {
      name: 'Magazine',
      to: null
    },
    {
      name: 'Region',
      to: null
    },
    {
      name: 'City',
      to: null
    }
  ],
  [
    {
      name: 'My Page',
      to: null
    },
    {
      name: 'Bookmark',
      to: null
    },
    {
      name: 'Contact us',
      to: null
    }
  ]
];

interface Footer_TYPE {
  type: string;
}

export default function Footer() {
  const nav = useNavigate();

  const onClickHandlerFooter = (to: string | null) => {
    if (to === null) return;
    nav(`/${to}`);
  };

  return (
    <div className='footer'>
      <FINEDITION />
      {_.map(FOOTERMENU, (a, index) => {
        return (
          <div
            className='footer_divide'
            key={`${a[index].name}_footer_${index}}`}
          >
            {_.map(a, (o, index) => {
              return (
                <button
                  onClick={() => onClickHandlerFooter(o.to)}
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
