import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './bookmark.scss';
import _ from 'lodash';
import { cardData } from '../../temp/cardData';
import { useState } from 'react';
import SearchComponent from '../../components/common/search/searchComponent';
import SearchList from '../search/components/searchList';
import SortList from '../search/components/sortList';

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

export default function Bookmark() {
  const [sort, setSort] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');

  const onChangeHandler = (str: string) => {
    setSearchWord((searchWord) => str);
  };

  const sortStateHandler = (str: string) => {
    setSort((sort) => str);
  };

  return (
    <div className='bookmark'>
      <Header type='purple' />
      <div className='bookmark_container'>
        <div className='bookmark_head'>
          <div>
            <h2>MY BOOKMARK</h2>
            <h2>ODYSSEY</h2>
          </div>
        </div>
        <div className='bookmark_overview'>
          <ul className='bookmark_overview-count'>
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
        <SearchList list={cardData} searchWord={searchWord} sort={sort} />
      </div>
      <Footer type={false} />
    </div>
  );
}
