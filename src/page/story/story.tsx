import Header from '../../components/header/header';
import './story.scss';
import _ from 'lodash';
import { useEffect, useState } from 'react';
import Footer from '../../components/footer/footer';
import { useParams } from 'react-router';
import { storyData, storyData_Type } from '../../data/storyData';
import { useAppDispatch } from '../../redux/hooks';
import { addView } from '../../redux/slices/viewSlice';
import BookmarkButton from '../../components/bookmark/bookmarkButton';
import { useAppSelector } from '../../redux/hooks';
import { selectUserInfo } from '../../redux/slices/userInfoSlice';
import StoryMain from './components/storMain';
import StoryMap from './components/storyMap';
import StoryGroup from './components/storyGroup';

export default function Story() {
  const [bookmark, setBookmark] = useState<boolean>(false);
  const [like, setLike] = useState<boolean>(false);
  const [story, setStory] = useState<storyData_Type>();
  const tempe = ['1', '2', '3', '4'];
  const param = useParams();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUserInfo);

  useEffect(() => {
    if (param.id !== undefined) {
      const id = parseInt(param.id);
      setStory((story) => storyData[id - 1]);
    }
    dispatch(addView(parseInt(param.id as string)));
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
                <BookmarkButton
                  userid={user.userid as number}
                  dataId={story.id}
                  likeBool={like}
                  bookmarkBool={bookmark}
                />
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
              introTag={story.tagline}
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
            {/* <RelatedMagazine strArr={tempe} /> */}
          </div>
        </div>
        <Footer type={true} />
      </div>
    );
  } else {
    return <div></div>;
  }
}
