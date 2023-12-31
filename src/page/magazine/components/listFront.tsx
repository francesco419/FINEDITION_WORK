import { useState } from 'react';
import { ReactComponent as Down } from '../../../assets/svg/sort_down.svg';
import _ from 'lodash';

const DROPTEMP = [
  { text: 'Newest' },
  { text: 'Oldest' },
  { text: 'Read' },
  { text: 'Unread' },
  { text: 'Most Liked' },
  { text: 'Most Bookmarked' },
  { text: 'My Bookmark' }
];

type ListFront_Type = {
  sort: string;
  handler: (str: string) => void;
};

export default function ListFront({ sort, handler }: ListFront_Type) {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className='citie_head'>
      <div className='citie_head_title'>
        <h2>Finedition Magazine</h2>
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
        <p
          style={{ cursor: 'pointer' }}
          onClick={() => {
            setShow((show) => !show);
          }}
        >
          {sort}
        </p>
        {show && (
          <div className='citie_head_drop'>
            {_.map(DROPTEMP, (o) => {
              return (
                <button
                  onClick={() => {
                    handler(o.text);
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
  );
}
