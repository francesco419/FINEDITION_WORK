import './bookmarkButton.scss';
import { ReactComponent as Like } from '../../page/info/assets/like.svg';
import { ReactComponent as Bookmark } from '../../page/info/assets/bookmark.svg';
import { postInterceptor, sendAxiosState } from '../../func/interceptor';
import { AxiosResponse } from 'axios';
import { useState } from 'react';

type bookmark_Type = {
  userEmail: string;
  dataId: number | undefined;
};

export default function BookmarkButton({ userEmail, dataId }: bookmark_Type) {
  const [like, setLike] = useState<boolean>(false);
  const [bookamrk, setBookmark] = useState<boolean>(false);

  const likeHandler = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/postlike`,
      data: {
        type: like,
        useremail: userEmail,
        dataId: dataId
      },
      callback: (e: AxiosResponse) => {
        console.log(e);
      }
    };
    postInterceptor(data);
  };

  const bookmarkHandler = () => {
    let data: sendAxiosState = {
      url: `${process.env.REACT_APP_PROXY}/postbookmark`,
      data: {
        type: bookamrk,
        useremail: userEmail,
        dataId: dataId
      },
      callback: (e: AxiosResponse) => {}
    };
    postInterceptor(data);
  };

  return (
    <div className='bookmarkButton d-flex'>
      <button
        onClick={() => {
          setLike((like) => !like);
          likeHandler();
        }}
      >
        <Like fill={like ? '#8763ed' : '#323234'} />
      </button>
      <button
        onClick={() => {
          setBookmark((bookamrk) => !bookamrk);
          bookmarkHandler();
        }}
      >
        <Bookmark fill={bookamrk ? '#8763ed' : '#323234'} />
      </button>
    </div>
  );
}
