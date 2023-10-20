import Card from '../../../components/card/cardComp';
import { cardData } from '../../../temp/cardData';
import _ from 'lodash';
import { useAppSelector } from '../../../redux/hooks';
import { selectView } from '../../../redux/slices/viewSlice';
import { storyCardData } from '../../../data/storyCardData';
import { selectBookmark } from '../../../redux/slices/bookmarklikeSlice';
import { useNavigate } from 'react-router';

export default function ProfileMyList() {
  const view = useAppSelector(selectView);
  const bookmark = useAppSelector(selectBookmark);
  const nav = useNavigate();

  const toBookmark = () => {
    nav('/bookmark');
  };

  return (
    <div className='profileMyList'>
      <div className='profileMyList_header'>
        <p>{view.view.length} Viewed</p>
        <button onClick={toBookmark}>
          <p>{bookmark.bookmark.length} Bookmarked*</p>
        </button>
      </div>
      <div className='profileMyList_list'>
        <ul>
          {_.map(_.shuffle([...cardData, ...storyCardData]), (o, index) => {
            if (view.view.includes(o.id)) {
              return (
                <li>
                  <Card data={o} color={'#fff'} type='small' fcolor='#000' />
                </li>
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
}
