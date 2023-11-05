import { InfoCount_Type } from '../../../components/common/pageCount';
import InfoTag from '../../info/component/infotag';
import PageCount from '../../../components/common/pageCount';

type StoryMap_Type = {
  introText: string;
  introImg: string;
  introImgText: string;
  introTag: string[];
  pageCount: InfoCount_Type;
};

export default function StoryMap({
  introText,
  introImg,
  introImgText,
  introTag,
  pageCount
}: StoryMap_Type) {
  return (
    <div className='storymap'>
      <div className='storymap_left'>
        <div className='storymap_left-text'>
          <p>{introText}</p>
        </div>
        <div className='storymap_left-map'>
          {introImg !== '' && <img src={introImg} />}
        </div>
        {introImgText !== '' && (
          <div className='storymap_imgText'>
            <p>{introImgText}</p>
          </div>
        )}
      </div>
      <div className='storymap_right'>
        <div>
          <InfoTag data={introTag} />
          <PageCount value={pageCount.value} />
        </div>
      </div>
    </div>
  );
}
