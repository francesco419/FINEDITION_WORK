import _ from 'lodash';
import { Individual_Type } from '../../../data/storyData';
import StoryIndividual from './storyIndiv';

type StoryGroup_Type = {
  data: Individual_Type[];
};

export default function StoryGroup({ data }: StoryGroup_Type) {
  return (
    <div className='storygroup'>
      {_.map(data, (o) => {
        return (
          <StoryIndividual
            individual={o}
            key={`${o.individual_Heading}_storyIndivCard`}
          />
        );
      })}
    </div>
  );
}
