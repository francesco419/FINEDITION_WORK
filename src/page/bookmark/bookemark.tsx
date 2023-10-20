import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './bookmark.scss';
import _ from 'lodash';
import { cardData } from '../../temp/cardData';
import { useState, useEffect } from 'react';
import SearchComponent from '../../components/common/search/searchComponent';
import SearchList from '../search/components/searchList';
import SortList from '../search/components/sortList';
import { sendAxiosState, getInterceptor } from '../../func/interceptor';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import { selectUserInfo } from '../../redux/slices/userInfoSlice';
import {
  getBookmark,
  getLike,
  selectBookmark
} from '../../redux/slices/bookmarklikeSlice';
import { storyCardData } from '../../data/storyCardData';

export default function Bookmark() {
  const [sort, setSort] = useState<string>('');
  const [searchWord, setSearchWord] = useState<string>('');
  const user = useAppSelector(selectUserInfo);
  const dispatch = useAppDispatch();
  const bookmark = useAppSelector(selectBookmark);

  const count = {
    Overview: {
      count: bookmark.bookmark.length
    },
    Magazine: {
      count: _.filter(bookmark.bookmark, (o) => {
        return o < 50;
      }).length
    },
    Info: {
      count: _.filter(bookmark.bookmark, (o) => {
        return o > 50;
      }).length
    }
  };

  useEffect(() => {
    if (user.userid) getLikeBookmark(user.userid);
  }, []);

  const getLikeBookmark = (id: number) => {
    const apidata: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/getlikebookmark`,
      data: { userid: id },
      callback: (o: any) => {
        if (!o.data.flag) {
          return;
        }

        if (o.data.result[0]) {
          let arr: number[] = [];

          _.map(o.data.result[0], (o) => {
            arr.push(o.likenum);
          });

          dispatch(getLike(arr));
        }

        if (o.data.result[1]) {
          let arr: number[] = [];

          _.map(o.data.result[1], (o) => {
            arr.push(o.bookmarknum);
          });

          dispatch(getBookmark(arr));
        }
      }
    };
    getInterceptor(apidata);
  };

  const onChangeHandler = (str: string) => {
    setSearchWord((searchWord) => str);
  };

  const sortStateHandler = (str: string) => {
    setSort((sort) => str);
  };

  const sortOutBookmark = () => {
    const info = _.filter(cardData, (o) => {
      return bookmark.bookmark.includes(o.id);
    });
    const story = _.filter(storyCardData, (o) => {
      return bookmark.bookmark.includes(o.id);
    });

    return [...info, ...story];
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
        <SearchList
          list={sortOutBookmark()}
          searchWord={searchWord}
          sort={sort}
        />
        {/* <SearchList list={storyCardData} searchWord={searchWord} sort={sort} /> */}
      </div>
      <Footer type={false} />
    </div>
  );
}
