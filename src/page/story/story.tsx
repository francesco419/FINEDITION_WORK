import Header from '../../components/header/header';
import './story.scss';
import { ReactComponent as Heart } from '../../assets/svg/likebookmark/like.svg';
import { ReactComponent as Bookmark } from '../../assets/svg/likebookmark/bookmark.svg';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import PageCount, { InfoCount_Type } from '../../components/common/pageCount';
import InfoTag from '../info/component/infotag';
import Footer from '../../components/footer/footer';
import { useParams } from 'react-router';
import {
  Individual_Type,
  qna_Type,
  storyData,
  storyData_Type
} from '../../data/storyData';
import Card from '../../components/card/cardComp';
import { cardData } from '../../temp/cardData';

export default function Story() {
  const [story, setStory] = useState<storyData_Type>();
  const tempe = ['1', '2', '3', '4'];
  const param = useParams();

  useEffect(() => {
    if (param.id !== undefined) {
      const id = parseInt(param.id);
      setStory((story) => storyData[id - 1]);
    }
  });

  if (story) {
    return (
      <div className='story'>
        <Header type='gray' />
        <div className='story-container'>
          <div className='storyfront'>
            <div className='storyfront-info'>
              <div className='storyfront-top'>
                <h4>{`MAGAZINE l ${story.upperTheme}`}</h4>
                <p>{story.upperWhy}</p>
              </div>
              <div className='storyfront-bottom'>
                <h2>{story.upperTitle}</h2>
                <p>{story.upperTime} read l 26th Oct, 2023</p>
                <div className='likeBookmark'>
                  <Heart />
                  <Bookmark />
                </div>
              </div>
            </div>
            <div className='storyfront-image'>
              <img src={story.upperImg} />
            </div>
          </div>
          <div className='story_body'>
            <StoryMap
              introText={story.introText}
              introImg={story.introImg}
              introImgText={story.introImgText}
              pageCount={story.pageCount}
            />
            <StoryGroup data={story.individual} />
            <StoryMain
              main={{
                mainImage: story.mainImg,
                sideImage: story.sideImg,
                sideText: story.sideText,
                question: story.qna,
                ending: story.conclusion
              }}
            />
            <RelatedMagazine strArr={tempe} />
          </div>
        </div>
        <Footer type={true} />
      </div>
    );
  } else {
    return <div></div>;
  }
}

type StoryMap_Type = {
  introText: string;
  introImg: string;
  introImgText: string;
  pageCount: InfoCount_Type;
};

function StoryMap({
  introText,
  introImg,
  introImgText,
  pageCount
}: StoryMap_Type) {
  return (
    <div className='storymap'>
      <div className='storymap_left'>
        <div className='storymap_left-text'>
          <p>{introText}</p>
        </div>
        <div className='storymap_left-map'>
          <img src={introImg} />
        </div>
        {introImgText !== '' && (
          <div className='aaaa'>
            <p>
              Samgyeopsal is not just a meal; it's a cultural and gastronomic
              adventure that offers a taste of Korea's rich culinary traditions.
              By considering these important facts before savoring this beloved
              dish, you can enhance your experience and fully immerse yourself
              in the unique flavors and traditions of Samgyeopsal. From choosing
              the right grill and making reservations to exploring the
              delightful side dishes, you're well-equipped to embark on a
              delicious journey through the world of Korean cuisine. So, fire up
              the grill, enjoy the sizzle, and create lasting memories with
              Samgyeopsal.
            </p>
          </div>
        )}
      </div>
      <div className='storymap_right'>
        <div>
          <InfoTag data={['Traditional', 'Highlight', 'Recommend']} />
          <PageCount value={pageCount.value} />
        </div>
      </div>
    </div>
  );
}

type StoryGroup_Type = {
  data: Individual_Type[];
};

function StoryGroup({ data }: StoryGroup_Type) {
  return (
    <div className='storygroup'>
      {_.map(data, (o) => {
        return <StoryIndividual individual={o} />;
      })}
    </div>
  );
}

type StoryIndividual_Type = {
  individual: Individual_Type;
};

function StoryIndividual({ individual }: StoryIndividual_Type) {
  return (
    <div className='storyindiv'>
      <h2>{individual.individual_Heading}</h2>
      <div className='storyindiv-maintext'>
        <p>{individual.individual_Text}</p>
      </div>
      <ul>
        {_.map(individual.individual_ListText, (o) => {
          return (
            <li>
              <p>{`${o}`}</p>
            </li>
          );
        })}
      </ul>
      {individual.individual_CardID !== '' &&
        _.map(cardData, (o) => {
          if (o.id === parseInt(individual.individual_CardID))
            return (
              <div className='storyindiv-card'>
                <Card data={o} color={'#00000000'} type='small' />
              </div>
            );
        })}
      {individual.individual_image !== '' && (
        <div>
          <img src={individual.individual_image} />
        </div>
      )}
    </div>
  );
}

interface StoryMain_Type {
  main: {
    mainImage: string;
    sideImage: string;
    sideText: string;
    question: qna_Type[];
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
          {_.map(main.question, (o, index) => {
            return <StoryQna qna={o} />;
          })}
        </div>
        <div className='storymain_mainText-side'>
          <p>{main.sideText}</p>
          <img src={main.sideImage} />
        </div>
      </div>
      <hr
        style={{
          width: '1000px',
          margin: '20px auto 0 0',
          borderColor: '#8763ed',
          borderTop: '0'
        }}
      />
      <div className='storymain_endText'>
        <p>{main.ending}</p>
      </div>
    </div>
  );
}

interface StoryQnaWrap_Type {
  qna: qna_Type;
}

interface StoryQna_Type extends StoryAnswer_Type {
  title: string;
  explain: string;
}

function StoryQna({ qna }: StoryQnaWrap_Type) {
  return (
    <div className='storyqna'>
      <h2>{qna.mainTitle}</h2>
      <p>{qna.mainText}</p>
      {typeof qna.main_ListText === 'string' ? (
        <p>{qna.main_ListText}</p>
      ) : (
        <div>
          {_.map(qna.main_ListText, (o) => {
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
