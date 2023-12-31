import './bookmarkButton.scss';
import { ReactComponent as Like } from '../../page/info/assets/like.svg';
import { ReactComponent as Bookmark } from '../../page/info/assets/bookmark.svg';
import { postInterceptor, sendAxiosState } from '../../func/interceptor';
import { AxiosResponse } from 'axios';
import { useState, useEffect } from 'react';
import _ from 'lodash';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { setLoginFormTrue } from '../../redux/slices/loginSlice';

type bookmark_Type = {
  userid: number;
  dataId: number | undefined;
  likeBool: boolean;
  bookmarkBool: boolean;
};

export default function BookmarkButton({
  userid,
  dataId,
  likeBool,
  bookmarkBool
}: bookmark_Type) {
  const [like, setLike] = useState<boolean>();
  const [bookmark, setBookmark] = useState<boolean>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setLike((like) => likeBool);
    setBookmark((bookmark) => bookmarkBool);
  }, []);

  const likeAddHandler = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/postlikeadd`,
      data: {
        userid: userid,
        dataId: dataId
      },
      callback: (e: AxiosResponse) => {
        if (e.data.flag) {
          setLike((like) => !like);
        }
      }
    };
    postInterceptor(data);
  };

  const likeDeleteHandler = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/postlikedel`,
      data: {
        useremail: userid,
        dataId: dataId
      },
      callback: (e: AxiosResponse) => {
        if (e.data.flag) {
          setLike((like) => !like);
        }
      }
    };
    postInterceptor(data);
  };

  const likeHandler = () => {
    if (userid) {
      if (!like) {
        likeAddHandler();
      } else {
        likeDeleteHandler();
      }
    } else {
      dispatch(setLoginFormTrue());
    }
  };

  const debouncedL = _.debounce(likeHandler, 250);

  /**--------------------------------------------- */

  const bookmarkAddHandler = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/postbookmarkadd`,
      data: {
        userid: userid,
        dataId: dataId
      },
      callback: (e: AxiosResponse) => {
        if (e.data.flag) {
          setBookmark((bookmark) => !bookmark);
        }
      }
    };
    postInterceptor(data);
  };

  const bookmarkDeleteHandler = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/postbookmarkdel`,
      data: {
        useremail: userid,
        dataId: dataId
      },
      callback: (e: AxiosResponse) => {
        if (e.data.flag) {
          setBookmark((bookmark) => !bookmark);
        }
      }
    };
    postInterceptor(data);
  };

  const bookmarkHandler = () => {
    if (userid) {
      if (!bookmark) {
        bookmarkAddHandler();
      } else {
        bookmarkDeleteHandler();
      }
    } else {
      dispatch(setLoginFormTrue());
    }
  };

  const debouncedB = _.debounce(bookmarkHandler, 250);

  return (
    <div className='bookmarkButton d-flex'>
      <button onClick={debouncedL}>
        <Like fill={like ? '#8763ed' : '#323234'} />
      </button>
      <button onClick={debouncedB}>
        <Bookmark fill={bookmark ? '#8763ed' : '#323234'} />
      </button>
    </div>
  );
}
