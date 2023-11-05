import { StoryAnswer } from './storyAnswer';
import { qna_Type } from '../../../data/storyData';
import _ from 'lodash';

interface StoryQnaWrap_Type {
  qna: qna_Type;
}

export default function StoryQna({ qna }: StoryQnaWrap_Type) {
  return (
    <div className='storyqna'>
      <h2>{qna.mainTitle}</h2>
      <p>{qna.mainText}</p>
      {typeof qna.main_ListText === 'string' ? (
        <p>{qna.main_ListText}</p>
      ) : (
        <div>
          {_.map(qna.main_ListText, (o, index) => {
            return (
              <StoryAnswer
                point={o.point}
                pointAns={o.pointAns}
                key={`qnaList_${index}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
