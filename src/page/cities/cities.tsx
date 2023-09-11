import './cities.scss';
import { ReactComponent as Map } from '../../assets/svg/map.svg';
import { ReactComponent as Search } from '../../assets/svg/search_grey.svg';
import { ReactComponent as Down } from '../../assets/svg/sort_down.svg';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import Header from '../../components/header/header';
import { data } from '../../temp/megazinecard';
import MegazineCard from '../home/megazineCard';
import Footer from '../../components/footer/footer';

const cities = [
  { id: 'KR-11', name: 'Seoul' },
  { id: 'KR-28', name: 'Incheon' },
  { id: 'KR-41', name: 'Gyeonggi' },
  { id: 'KR-42', name: 'Gangwon' },
  { id: 'KR-43', name: 'Chungcheonbuk' },
  { id: 'KR-44', name: 'Chungcheonnam' },
  {
    id: 'KR-30',
    name: 'Sejong & Daejeon',
    id2: 'KR-49',
    name2: 'Sejong & Daejeon'
  },
  { id: 'KR-45', name: 'Jeollabuk' },
  { id: 'KR-46', name: 'Jeollanam' },
  { id: 'KR-29', name: 'Gwangju' },
  { id: 'KR-47', name: 'Gyeongsangbuk' },
  { id: 'KR-48', name: 'Gyeongsangnam' },
  { id: 'KR-27', name: 'Daegu & Ulsan', id2: 'KR-31', name2: 'Daegu & Ulsan' },
  { id: 'KR-26', name: 'Busan' },
  { id: 'KR-50', name: 'Jeju' }
];

const theme = [
  { id: 't0', name: 'Travel' },
  { id: 't1', name: 'Spots' },
  { id: 't2', name: 'Culture' },
  { id: 't3', name: 'Food' },
  { id: 't4', name: 'Shopping' },
  { id: 't5', name: 'Insight' },
  { id: 't6', name: 'News' }
];

const DROPTEMP = [
  { text: 'Newest' },
  { text: 'Oldest' },
  { text: 'Read' },
  { text: 'Unread' },
  { text: 'Most Liked' },
  { text: 'Most Bookmarked' },
  { text: 'My Bookmark' }
];

export default function Cities() {
  const [sort, setSort] = useState<string>('for Sophie');
  const [show, setShow] = useState<boolean>(false);
  return (
    <div className='background-full'>
      <div className='citie'>
        <Header type='gray' />
        <div className='citie_head'>
          <div className='citie_head_title'>
            <p>We curate to the finest</p>
          </div>
          <div className='citie_head_sort'>
            <button
              onClick={() => {
                setShow((show) => !show);
              }}
            >
              <Down />
            </button>
            <p>{sort}</p>
            {show && (
              <div className='citie_head_drop'>
                {_.map(DROPTEMP, (o) => {
                  return (
                    <button
                      onClick={() => {
                        setSort((sort) => o.text);
                        setShow((show) => !show);
                      }}
                    >
                      {o.text}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className='citie_section'>
          <div className='citie_search'>
            <div className='citie_search-bar'>
              <Search />
              <input type='text' placeholder='Search for keyword' />
            </div>
            <div className='citie_search-reset'>
              <button>RESET ALL</button>
            </div>
          </div>
          <div className='citie_city_region'>
            <p className='citie_city_region-title'>City & Region</p>
            <div className='citie_city_region-check'>
              {_.map(cities, (o) => {
                return <CitiesCheckBox id={o.id} name={o.name} />;
              })}
            </div>
          </div>
          <Map />
          <div className='citie_theme'>
            <div className='citie_theme-title'>
              <p>Story Theme</p>
            </div>
            <div className='citie_theme-check'>
              {_.map(theme, (o) => {
                return <ThemeCheckBox id={o.id} name={o.name} />;
              })}
            </div>
          </div>
        </div>
        <div className='citie_list'>
          {_.map(data, (o) => {
            return <MegazineCard img={o.img} color={o.color} />;
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
}

type CheckBoxType = {
  id: string;
  name: string;
};

function CitiesCheckBox({ id, name }: CheckBoxType) {
  useEffect(() => {
    const doc = document.getElementById(id) as SVGPathElement | null;
  }, []);

  return (
    <div className='citie-checkbox' id={`${id}_id`}>
      <input
        id={`${id}_check`}
        type='checkbox'
        hidden
        onChange={(e) => {
          if (e.target) {
            const tar = e.target;
            const svg = document.getElementById(id) as SVGPathElement | null;
            const label = document.getElementById(
              `${id}_label`
            ) as HTMLLabelElement | null;
            if (svg && label) {
              if (tar.checked) {
                svg.style.fill = '#e67d40';
                label.style.backgroundColor = '#e67d40';
              } else {
                svg.style.fill = '#cccccc';
                label.style.backgroundColor = '#fff';
              }
            }
          }
        }}
      />
      <label
        id={`${id}_label`}
        htmlFor={`${id}_check`}
        className='citie-checkbox_check'
      ></label>
      <label className='citie-checkbox_label'>{name}</label>
    </div>
  );
}

function ThemeCheckBox({ id, name }: CheckBoxType) {
  return (
    <div className='citie-checkbox' id={`${id}_id`}>
      <input
        id={`${id}_check`}
        type='checkbox'
        hidden
        onChange={(e) => {
          if (e.target) {
            const tar = e.target;
            const label = document.getElementById(
              `${id}_label`
            ) as HTMLLabelElement | null;
            if (label) {
              if (tar.checked) {
                label.style.backgroundColor = '#e67d40';
              } else {
                label.style.backgroundColor = '#fff';
              }
            }
          }
        }}
      />
      <label
        id={`${id}_label`}
        htmlFor={`${id}_check`}
        className='citie-checkbox_check'
      ></label>
      <label className='citie-checkbox_label'>{name}</label>
    </div>
  );
}
