import './magazine.scss';
import { ReactComponent as Map } from '../../assets/svg/map.svg';
import { ReactComponent as Search } from '../../assets/svg/search_grey.svg';
import _ from 'lodash';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import ListFront from './components/listFront';
import ListCheckBox from './components/listCheckBox';
import ThemeCheckBox from './components/themeCheckBox';
import Card from '../../components/card/cardComp';
import { storyCardData, StoryCardDate_Type } from '../../data/storyCardData';
import { useState } from 'react';
import { useAppSelector } from '../../redux/hooks';
import { selectView } from '../../redux/slices/viewSlice';

const cities = [
  { id: 'KR-26', name: 'Busan' },
  { id: 'KR-43', name: 'Chungbuk' },
  { id: 'KR-44', name: 'Chungnam' },
  { id: 'KR-27', name: 'Daegu & Ulsan', id2: 'KR-31', name2: 'Daegu & Ulsan' },
  { id: 'KR-29', name: 'Gwangju' },
  { id: 'KR-42', name: 'Gwangwon' },
  { id: 'KR-47', name: 'Gyeongbuk' },
  { id: 'KR-41', name: 'Gyeonggi' },
  { id: 'KR-48', name: 'Gyeongnam' },
  { id: 'KR-28', name: 'Incheon' },
  { id: 'KR-49', name: 'Jeju' },
  { id: 'KR-45', name: 'Jeonbuk' },
  { id: 'KR-46', name: 'Jeonnam' },
  { id: 'KR-11', name: 'Seoul' },
  {
    id: 'KR-30',
    name: 'Sejong & Daejeon',
    id2: 'KR-49',
    name2: 'Sejong & Daejeon'
  },
  { id: '', name: 'None' }
];

const theme = [
  { id: 't0', name: 'Edition' },
  { id: 't1', name: 'Info' },
  { id: 't2', name: 'Explore' },
  { id: 't3', name: 'Culture' },
  { id: 't4', name: 'Cuisine' },
  { id: 't5', name: 'Locale' },
  { id: 't6', name: 'Trends' },
  { id: 't7', name: 'Shopping' }
];

export default function Magazine() {
  const [searchTheme, setSearchTheme] = useState<string[]>([]);
  const [searchCity, setSearchCity] = useState<string[]>([]);
  const [sort, setSort] = useState<string>('for Sophie');
  const view = useAppSelector(selectView);

  const sortHandler = (str: string) => {
    setSort((sort) => str);
  };

  const changeThemeHandler = (theme: string, bool: boolean) => {
    if (bool) {
      setSearchTheme((searchTheme) => [...searchTheme, theme]);
    } else {
      setSearchTheme((searchTheme) =>
        _.remove(searchTheme, (a) => {
          return a !== theme;
        })
      );
    }
  };

  const changeCityHandler = (city: string, bool: boolean) => {
    if (bool) {
      setSearchCity((searchCity) => [...searchCity, city]);
    } else {
      setSearchCity((searchCity) =>
        _.remove(searchCity, (a) => {
          return a !== city;
        })
      );
    }
  };

  const sortBy = (story: StoryCardDate_Type[]) => {
    if (sort === 'Read') {
      return _.filter(story, (o) => {
        return view.view.includes(o.id);
      });
    }

    if (sort === 'Unread') {
      return _.filter(story, (o) => {
        return !view.view.includes(o.id);
      });
    }
    return story;
  };

  return (
    <div className='background-full'>
      <div className='citie'>
        <Header type='gray' />
        <ListFront sort={sort} handler={sortHandler} />
        <div className='citie_section'>
          <div className='citie_search'>
            <div className='citie_search-bar'>
              <Search />
              <input type='text' placeholder='Search for keyword' />
            </div>
            {/* <div className='citie_search-reset'>
              <button>RESET ALL</button>
            </div> */}
          </div>
          <div className='citie_city_region'>
            <p className='citie_city_region-title'>REGIONS</p>
            <div className='citie_city_region-check'>
              {_.map(cities, (o) => {
                return (
                  <ListCheckBox
                    id={o.id}
                    name={o.name}
                    change={changeCityHandler}
                    key={`${o.id}_checkbox`}
                  />
                );
              })}
            </div>
          </div>
          <div className='citie_city_map'>
            <Map />
          </div>
          <div className='citie_theme'>
            <div className='citie_theme-title'>
              <p>STORY THEME</p>
            </div>
            <div className='citie_theme-check'>
              {_.map(theme, (o) => {
                return (
                  <ThemeCheckBox
                    id={o.id}
                    name={o.name}
                    change={changeThemeHandler}
                    key={`${o.id}_theme`}
                  />
                );
              })}
            </div>
          </div>
        </div>
        <div className='citie_list'>
          {_.map(sortBy(storyCardData), (o) => {
            if (searchTheme.length > 0 && searchCity.length > 0) {
              if (
                searchTheme.includes(o.coverTheme) &&
                searchCity.includes(o.coverRegion)
              ) {
                console.log(1);
                return (
                  <Card
                    data={o}
                    color={'#000'}
                    type='small'
                    fcolor='#000'
                    key={`${o.id}_magazine`}
                  />
                );
              }
              return;
            }

            if (searchTheme.length > 0) {
              if (searchTheme.includes(o.coverTheme)) {
                console.log(2);
                return (
                  <Card
                    data={o}
                    color={'#000'}
                    type='small'
                    fcolor='#000'
                    key={`${o.id}_magazine`}
                  />
                );
              }
              return;
            }

            if (searchCity.length > 0) {
              if (searchCity.includes(o.coverRegion)) {
                console.log(3);
                return (
                  <Card
                    data={o}
                    color={'#000'}
                    type='small'
                    fcolor='#000'
                    key={`${o.id}_magazine`}
                  />
                );
              }
              return;
            }

            return (
              <Card
                data={o}
                color={'#000'}
                type='small'
                fcolor='#000'
                key={`${o.id}_magazine`}
              />
            );
          })}
        </div>
        <Footer type={true} />
      </div>
    </div>
  );
}
