import Header from '../../components/header/header';
import './story.scss';
import { ReactComponent as Heart } from '../../assets/svg/likebookmark/like.svg';
import { ReactComponent as Bookmark } from '../../assets/svg/likebookmark/bookmark.svg';
import picture from '../cities/assets/svg/pic.png';
import map from './assets/map.png';
import _ from 'lodash';
import PageCount from '../../components/common/pageCount';
import InfoTag from '../info/component/infotag';

export default function Story() {
  return (
    <div className='story'>
      <Header type='gray' />
      <div className='story-container'>
        <div className='storyfront'>
          <div className='storyfront-info'>
            <div className='storyfront-top'>
              <h4>MAGAZINE l Locale</h4>
              <p>
                {`If you have to visit royal palaces, and hesitate to know which one to visit?\nHere’s our suggestion about royal palaces for foreign travelers. We\nestimated time for duration and your, and based on that, we\ncurated some itineries for you to check out!`}
              </p>
            </div>
            <div className='storyfront-bottom'>
              <h2>{`Five Royal Palaces in Seoul\n& Which one to Visit`}</h2>
              <p>10min read l 26th Oct, 2023</p>
              <div className='likeBookmark'>
                <Heart />
                <Bookmark />
              </div>
            </div>
          </div>
          <div className='storyfront-image'>
            <img src={picture} />
          </div>
        </div>
        <div className='story_body'>
          <StoryMap />
          <StoryGroup />
        </div>
      </div>
    </div>
  );
}

const mapDetail = [
  'Gyeongbokgung Palace',
  'Changdeokgung Palace',
  'Changgyeonggung Palace',
  'Deoksugung Palace',
  'Gyeonhuigung Palace'
];

function StoryMap() {
  return (
    <div className='storymap'>
      <div className='storymap_left'>
        <div className='storymap_left-text'>
          <p>{`Discover the rich history and culture of Seoul, the vibrant capital of South Korea, through the five\nmagnificent royal palaces that were once the epicenters of Korean royalty. These palaces located in the\nheart of the city offer a captivating glimpse into Korea's imperial past, particularly in the enchanting district\nof Jongno, where four of them are nestled. In this guide, we will explore the essence of each palace\nand answer some commonly asked questions to help you plan your visit.`}</p>
        </div>
        <div className='storymap_left-map'>
          <img src={map} />
          <ul className='storymap_left-mapdetail'>
            {_.map(mapDetail, (o, index) => {
              return (
                <li>
                  <p>{`${index + 1}. ${o}`}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className='storymap_right'>
        <div>
          <InfoTag />
          <PageCount />
        </div>
      </div>
    </div>
  );
}

function StoryGroup() {
  return (
    <div className='storygroup'>
      <StoryIndividual />
    </div>
  );
}

const list = [
  'Geunjeongjeon: The main hall, where important state affairs took place and where the king granted audiences to his officials.',
  'Gyeonghoeru: A stunning pavilion surrounded by a large pond, used for state banquets.',
  "Changing of the Guard Ceremony: Don't miss the daily reenactment of this ceremonial event in traditional attire.",
  'National Folk Museum: Located within the palace grounds, it offers insights into Korean culture and history.'
];

function StoryIndividual() {
  return (
    <div className='storyindiv'>
      <h2>{`[Gyeongbokgung Palace]`}</h2>
      <p>{`The "Palace of Shining Happiness," is the most iconic of Seoul's palaces. It was built in 1395 during the Joseon Dynasty and served as the primary royal residence. This palace holds historical importance as it was the heart of political power for over two centuries.
Geunjeongjeon: The main hall, where important state affairs took place and where the king granted audiences to his officials.
Gyeonghoeru: A stunning pavilion surrounded by a large pond, used for state banquets.
Changing of the Guard Ceremony: Don't miss the daily reenactment of this ceremonial event in traditional attire.
National Folk Museum: Located within the palace grounds, it offers insights into Korean culture and history.`}</p>
      <ul>
        {_.map(list, (o) => {
          return (
            <li>
              <p>{`${o}`}</p>
            </li>
          );
        })}
      </ul>
      <div className='storyindiv-'></div>
    </div>
  );
}
