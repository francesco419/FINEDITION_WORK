import Header from '../../components/header/header';
import './story.scss';
import { ReactComponent as Heart } from '../../assets/svg/likebookmark/like.svg';
import { ReactComponent as Bookmark } from '../../assets/svg/likebookmark/bookmark.svg';
import picture from '../cities/assets/svg/pic.png';
import map from './assets/map.png';
import _ from 'lodash';
import PageCount from '../../components/common/pageCount';
import InfoTag from '../info/component/infotag';
import Card from '../../components/card/cardComp';
import mainImg from './assets/mainImage.jpg';
import sideImg from './assets/sideImage.jpg';
import Footer from '../../components/footer/footer';

export default function Story() {
  const tempe = ['1', '2', '3', '4'];
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
          <StoryMain
            main={{
              mainImage: mainImg,
              sideImage: sideImg,
              question: [
                {
                  title:
                    'Q. If I had to pick one palace, which one would you suggest?',
                  explain: `When it comes to choosing just one palace to visit, it's essential to focus on what resonates with you the most. Each palace has its unique charm, making it a challenging choice. However, here are some recommendations based on your preferences and available time:`,
                  answer: [
                    {
                      point: '[Gyeongbokgung Palace]',
                      pointAns: `epitome of Korean royal elegance, with its grandeur courtyards and stunning architecture.
        You can immerse yourself in its splendor by spending a few hours here.`
                    },
                    {
                      point: '[Changdeok Palace]',
                      pointAns: `UNESCO World Heritage site, is perfect for those who seek a peaceful escape amidst natural beauty.
        Its tranquil Secret Garden is known for its serenity, so allocate at least two hours for your visit.`
                    },
                    {
                      point: '[Deoksugung Palace]',
                      pointAns: `The only palace open until 9 p.m., making it a top choice if you're interested in experiencing a palace's nighttime charm. You can enjoy a unique night view without prior reservation.`
                    },
                    {
                      point: '[Changgyeong Palace]',
                      pointAns: `A smaller palace with a serene atmosphere, is ideal for a peaceful stroll. Consider adding it
        to your itinerary if you have time.`
                    }
                  ]
                },
                {
                  title: 'Q. Do I need to visit all five palaces?',
                  explain: `When it comes to choosing just one palace to visit, it's essential to focus on what resonates with you the most. Each palace has its unique charm, making it a challenging choice. However, here are some recommendations based on your preferences and available time:`,
                  answer: [
                    {
                      point: '[Gyeongbokgung Palace]',
                      pointAns: `epitome of Korean royal elegance, with its grandeur courtyards and stunning architecture.
        You can immerse yourself in its splendor by spending a few hours here.`
                    },
                    {
                      point: '[Changdeok Palace]',
                      pointAns: `UNESCO World Heritage site, is perfect for those who seek a peaceful escape amidst natural beauty.
        Its tranquil Secret Garden is known for its serenity, so allocate at least two hours for your visit.`
                    },
                    {
                      point: '[Deoksugung Palace]',
                      pointAns: `The only palace open until 9 p.m., making it a top choice if you're interested in experiencing a palace's nighttime charm. You can enjoy a unique night view without prior reservation.`
                    },
                    {
                      point: '[Changgyeong Palace]',
                      pointAns: `A smaller palace with a serene atmosphere, is ideal for a peaceful stroll. Consider adding it
        to your itinerary if you have time.`
                    }
                  ]
                }
              ],
              ending: `Exploring Jongno and its royal palaces is an unforgettable journey through Korea's history and culture. Whether you choose to visit one or all of these magnificent palaces, each holds a piece of the nation's heritage waiting to be discovered. So, step into the past and embrace the beauty and grandeur of
              Seoul's royal legacy.`
            }}
          />
          <RelatedMagazine strArr={tempe} />
        </div>
      </div>
      <Footer />
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
      <StoryIndividual />
      <StoryIndividual />
      <StoryIndividual />
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

interface storyIndiv_Type {
  main: string;
  mainText: string;
  listUp: string[];
  cardNo: string;
}

function StoryIndividual() {
  return (
    <div className='storyindiv'>
      <h2>{`[Gyeongbokgung Palace]`}</h2>
      <div className='storyindiv-maintext'>
        <p>{`The "Palace of Shining Happiness," is the most iconic of Seoul's palaces. It was built in 1395 during the Joseon Dynasty and served as the primary royal residence. This palace holds historical importance as it was the heart of political power for over two centuries.`}</p>
      </div>
      <ul>
        {_.map(list, (o) => {
          return (
            <li>
              <p>{`${o}`}</p>
            </li>
          );
        })}
      </ul>
      <div className='storyindiv-card'>
        {/* <Card img={'1'} color={'#00000000'} type='small' /> */}
      </div>
    </div>
  );
}

interface StoryMain_Type {
  main: {
    mainImage: string;
    sideImage: string;
    question: StoryQna_Type[];
    ending: string;
  };
}

function StoryMain({ main }: StoryMain_Type) {
  return (
    <div className='storymain'>
      <div className='storymain-mainPicture'>
        <img src={main.mainImage} />
      </div>
      <div className='storymain_mainText'>
        <div className='storymain_mainText-qna'>
          {_.map(main.question, (o) => {
            return <StoryQna qna={o} />;
          })}
        </div>
        <div className='storymain_mainText-side'>
          <p>{`Keep in mind that all palaces, except Deoksugung, close around 6:00 p.m., and the last admission is an hour before closing.`}</p>
          <img src={sideImg} />
        </div>
      </div>
      <div className='storymain_endText'>
        <p>{main.ending}</p>
      </div>
    </div>
  );
}

interface StoryQnaWrap_Type {
  qna: StoryQna_Type;
}

interface StoryQna_Type extends StoryAnswer_Type {
  title: string;
  explain: string;
}

function StoryQna({ qna }: StoryQnaWrap_Type) {
  return (
    <div className='storyqna'>
      <h2>{qna.title}</h2>
      <p>{qna.explain}</p>
      {typeof qna.answer === 'string' ? (
        <p>{qna.answer}</p>
      ) : (
        <div>
          {_.map(qna.answer, (o) => {
            return <StoryAnswer point={o.point} pointAns={o.pointAns} />;
          })}
        </div>
      )}
    </div>
  );
}

interface StoryAnswer_Type {
  answer: string | Answer_Type[];
}

interface Answer_Type {
  point: string;
  pointAns: string;
}

function StoryAnswer({ point, pointAns }: Answer_Type) {
  return (
    <div className='storyAnswer'>
      <h4>{point}</h4>
      <p>{pointAns}</p>
    </div>
  );
}

interface StrArr_Type {
  strArr: string[];
}

function RelatedMagazine({ strArr }: StrArr_Type) {
  return (
    <div className='relateMagazine'>
      <h4>Related Magazine Stories</h4>
      <div className='relateMagazine-cardBox'>
        {/*  {_.map(strArr, (o) => {
          return <Card img={'1'} color={'#00000000'} type='medium' />;
        })} */}
      </div>
    </div>
  );
}
