import { qna_Type } from '../../../data/storyData';
import StoryQna from './storyQna';
import _ from 'lodash';

interface StoryMain_Type {
  main: {
    mainImage: string;
    sideImage: string;
    sideText: string;
    question: qna_Type[];
    ending: string;
  };
}

export default function StoryMain({ main }: StoryMain_Type) {
  return (
    <div className='storymain'>
      {main.mainImage !== '' && (
        <div className='storymain-mainPicture'>
          <img src={main.mainImage} />
        </div>
      )}
      <div className='storymain_mainText'>
        <div className='storymain_mainText-qna'>
          {_.map(main.question, (o, index) => {
            return <StoryQna qna={o} />;
          })}
        </div>
        <div className='storymain_mainText-side'>
          <p>{main.sideText === 'null' ? null : main.sideText}</p>
          {main.sideImage !== '' && <img src={main.sideImage} />}
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
        <p>{main.ending === 'null' ? null : main.ending}</p>
      </div>
    </div>
  );
}
