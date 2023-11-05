import Card from '../../../components/card/cardComp';
import { Individual_Type } from '../../../data/storyData';
import { cardData } from '../../../temp/cardData';
import _ from 'lodash';

type StoryIndividual_Type = {
  individual: Individual_Type;
};

export default function StoryIndividual({ individual }: StoryIndividual_Type) {
  return (
    <div className='storyindiv'>
      <h2>{individual.individual_Heading}</h2>
      <div className='storyindiv-maintext'>
        <p>{individual.individual_Text}</p>
      </div>
      <ul>
        {_.map(individual.individual_ListText, (o, index) => {
          return (
            <li key={`listText_${index}`}>
              <p>{`${o}`}</p>
            </li>
          );
        })}
      </ul>
      {individual.individual_CardID !== '' &&
        _.map(cardData, (o) => {
          if (o.id === parseInt(individual.individual_CardID))
            return (
              <div className='storyindiv-card' key={`${o.id}_invdivCard`}>
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
