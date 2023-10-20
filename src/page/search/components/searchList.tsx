import { useEffect } from 'react';
import { cardType } from '../../admin/administrator';
import Card from '../../../components/card/cardComp';
import { StoryCardDate_Type } from '../../../data/storyCardData';
import _ from 'lodash';
import './searchList.scss';

type SearchList_Type = {
  list: (cardType | StoryCardDate_Type)[];
  searchWord: string;
  sort: string;
};

export default function SearchList({ list, searchWord }: SearchList_Type) {
  useEffect(() => {}, []);

  return (
    <ul className='searchList'>
      {list.length > 0 ? (
        _.map(list, (o) => {
          if ('coverLocate' in o) {
            if (searchWord === '') {
              return (
                <li>
                  <Card data={o} color='#000' type='medium' fcolor='#fff' />
                </li>
              );
            } else {
              if (o.coverTitle.toLowerCase().includes(searchWord))
                return (
                  <li>
                    <Card data={o} color='#000' type='medium' fcolor='#fff' />
                  </li>
                );
            }
          } else {
            if (searchWord === '') {
              return (
                <li>
                  <Card data={o} color='#000' type='medium' fcolor='#fff' />
                </li>
              );
            } else {
              if (o.keyword.includes(searchWord))
                return (
                  <li>
                    <Card data={o} color='#000' type='medium' fcolor='#fff' />
                  </li>
                );
            }
          }
        })
      ) : (
        <div className='noresult'>
          <h2>No Result</h2>
        </div>
      )}
    </ul>
  );
  /*   if ('coverLocate' in list) {
    return (
      <ul className='searchList'>
        {_.map(list, (o) => {
          if (searchWord === '') {
            return (
              <li>
                <Card
                  data={o as cardType}
                  color='#000'
                  type='medium'
                  fcolor='#fff'
                />
              </li>
            );
          } else {
            if ((o as cardType).coverTitle.toLowerCase().includes(searchWord))
              return (
                <li>
                  <Card
                    data={o as cardType}
                    color='#000'
                    type='medium'
                    fcolor='#fff'
                  />
                </li>
              );
          }
        })}
      </ul>
    );
  } else {
    return (
      <ul className='searchList'>
        {_.map(list, (o) => {
          if (searchWord === '') {
            return (
              <li>
                <Card
                  data={o as StoryCardDate_Type}
                  color='#000'
                  type='medium'
                  fcolor='#fff'
                />
              </li>
            );
          } else {
            if ((o as StoryCardDate_Type).keyword.includes(searchWord))
              return (
                <li>
                  <Card
                    data={o as StoryCardDate_Type}
                    color='#000'
                    type='medium'
                    fcolor='#fff'
                  />
                </li>
              );
          }
        })}
      </ul>
    );
  } */
}
