import { useEffect } from 'react';
import { cardType } from '../../admin/administrator';
import Card from '../../../components/card/cardComp';
import _ from 'lodash';
import './searchList.scss';

type SearchList_Type = {
  list: cardType[];
  searchWord: string;
  sort: string;
};

export default function SearchList({ list, searchWord }: SearchList_Type) {
  useEffect(() => {}, []);

  return (
    <ul className='searchList'>
      {_.map(list, (o) => {
        if (searchWord === '') {
          return (
            <li>
              <Card data={o} color='#000' type='small' fcolor='#fff' />
            </li>
          );
        } else {
          if (o.coverTitle.toLowerCase().includes(searchWord))
            return (
              <li>
                <Card data={o} color='#000' type='small' fcolor='#fff' />
              </li>
            );
        }
      })}
    </ul>
  );
}
