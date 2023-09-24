import './search.scss';
import { ReactComponent as Search } from '../../../assets/svg/header/searchbar.svg';
import _ from 'lodash';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';

const HISTORY = [
  'Seoul',
  'Busan',
  'Autumn',
  'Where to go',
  'Samgyeopsal',
  'Hanok village',
  'Hangang',
  'Market',
  'Where to go'
];

const EDITION = [
  {
    title: 'Most popular',
    arr: [
      'Seoul',
      'Busan',
      'Autumn',
      'Hanok village',
      'Hangang',
      'Shopping',
      'Seongsu',
      'Hanbok',
      'Cafe hopping',
      'Airport'
    ]
  },
  {
    title: 'Recommendation',
    arr: [
      'Near Seoul',
      '5 day initiaries',
      'Korean desert',
      'Museum SAN',
      'Jazz festivals',
      'Souvenir',
      'Night scenery',
      'Bicycle'
    ]
  }
];

export default function SearchDropDown() {
  const nav = useNavigate();
  const [searchArray, setSearchArray] = useState<string[]>(HISTORY);

  return (
    <div className='searchbar'>
      <div className='searchbar_container'>
        <div className='searchbar_searchbar'>
          <div className='searchbar_searchbar-bar'>
            <Search />
            <input
              type='text'
              placeholder='What are you curious about?'
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  nav(`/cities/`);
                }
              }}
            />
          </div>
          <div className='searchbar_searchbar-history'>
            <div className='searchbar_searchbar-history-b'>
              <button>Recent</button>
              <span>l</span>
              <button
                onClick={() => {
                  setSearchArray((searchArray) => []);
                }}
              >
                Delete all
              </button>
            </div>
            <div>
              {searchArray.length === 0 ? (
                <p style={{ color: '#616161', margin: '13px 0 0' }}>
                  No recent history
                </p>
              ) : (
                _.map(searchArray, (o, index) => {
                  return (
                    <button className='history-keyname' key={`${o}_${index}`}>
                      {o}
                    </button>
                  );
                })
              )}
            </div>
          </div>
        </div>
        <div className='searchbar_edition'>
          {_.map(EDITION, (o) => {
            return (
              <div className='searchbar_edition-box' key={o.title}>
                <h3>{o.title}</h3>
                <div>
                  {_.map(o.arr, (o) => {
                    return (
                      <button className='edition-keyname' key={o}>
                        {o}
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div></div>
    </div>
  );
}

/*            if (searchArray.length === 0) {
  return <p style={{ color: '#616161' }}>No recent history</p>;
} else { */
