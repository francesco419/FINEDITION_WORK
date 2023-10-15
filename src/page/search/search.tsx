import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './search.scss';
import { useParams } from 'react-router';
import _ from 'lodash';
import { cardType } from '../admin/administrator';
import { cardData } from '../../temp/cardData';
import { useEffect, useState } from 'react';
import SearchComponent from '../../components/common/search/searchComponent';
import SearchList from './components/searchList';
import { ReactComponent as Sort } from '../../assets/search/svg/sort.svg';
import SortList from './components/sortList';

const count = {
  Overview: {
    count: 0
  },
  Magazine: {
    count: 0
  },
  Info: {
    count: 0
  }
};

export default function Search() {
  const [listUp, setListUp] = useState<cardType[]>([]);
  const [sort, setSort] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');
  const { keyword } = useParams();

  useEffect(() => {
    if (keyword !== undefined) {
      _.map(cardData, (o) => {
        if (o.coverTitle.toLowerCase().includes(keyword)) {
          setListUp((arr) => [...arr, o]);
        }
      });
    }
  }, []);

  const onChangeHandler = (str: string) => {
    setSearchWord((searchWord) => str);
  };

  const sortStateHandler = (str: string) => {
    setSort((sort) => str);
  };

  return (
    <div className='search'>
      <Header type='black' />
      <div className='search_container'>
        <div className='search_head'>
          <h2>Search results for &nbsp;</h2>
          <h2>{`"${keyword}"`}</h2>
        </div>
        <div className='search_overview'>
          <ul className='search_overview-count'>
            {_.map(Object.entries(count), ([key, value]) => {
              return (
                <li>
                  <p>{`${key} ${value.count}`}</p>
                </li>
              );
            })}
            <SortList sortState={sortStateHandler} />
          </ul>
          <SearchComponent
            value={{
              placeholder: 'Search for keyword'
            }}
            change={onChangeHandler}
          />
        </div>
        <SearchList list={listUp} searchWord={searchWord} sort={sort} />
      </div>
      <Footer />
    </div>
  );
}
