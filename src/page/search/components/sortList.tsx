import { useState } from 'react';
import { ReactComponent as Sort } from '../../../assets/search/svg/sort.svg';

type Sort_Type = {
  sortState: (word: string) => void;
};

export default function SortList({ sortState }: Sort_Type) {
  const [visible, setVisible] = useState<boolean>(false);

  const onClickHandler = () => {
    setVisible((visible) => !visible);
  };

  return (
    <li>
      <button onClick={onClickHandler}>
        <Sort />
      </button>
      {visible && (
        <ul className='bookmark-absolute'>
          <li>
            <button
              onClick={() => {
                sortState('Read'); //부분에 들어갈 것으로 분류기준
                onClickHandler();
              }}
            >
              <p>Read</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                sortState('Unread');
                onClickHandler();
              }}
            >
              <p>Unread</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                sortState('Newest');
                onClickHandler();
              }}
            >
              <p>Newest</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                sortState('Oldest');
                onClickHandler();
              }}
            >
              <p>Oldest</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                sortState('Most Liked');
                onClickHandler();
              }}
            >
              <p>Most Liked</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                sortState('Most Bookmarked');
                onClickHandler();
              }}
            >
              <p>Most Bookmarked</p>
            </button>
          </li>
          <li>
            <button
              onClick={() => {
                sortState('Most Viewed');
                onClickHandler();
              }}
            >
              <p>Most Viewed</p>
            </button>
          </li>
        </ul>
      )}
    </li>
  );
}
