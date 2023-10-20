import { ReactComponent as Traditional } from '../assets/tags/flag.svg';
import { ReactComponent as Hightlight } from '../assets/tags/highlights.svg';
import { ReactComponent as OnTrend } from '../assets/tags/trend.svg';
import { ReactComponent as Recommend } from '../assets/tags/recommend.svg';
import { ReactComponent as GoodforKids } from '../assets/tags/kids.svg';
import { ReactComponent as Intagrammable } from '../assets/tags/photo_spot.svg';
import { ReactComponent as NightScenery } from '../assets/tags/nature.svg';
import { ReactComponent as Landscape } from '../assets/tags/landscape.svg';
import { ReactComponent as Shopper } from '../assets/tags/shopper.svg';
import { ReactComponent as Stroll } from '../assets/tags/stroll.svg';
import { ReactComponent as FunJoy } from '../assets/tags/funjoy.svg';
import _ from 'lodash';

const TAG_LIST = [
  { tag: 'Traditional', svg: <Traditional /> },
  { tag: 'Highlight', svg: <Hightlight /> },
  { tag: 'On-trend', svg: <OnTrend /> },
  { tag: 'Recommend', svg: <Recommend /> },
  { tag: 'Night scenery', svg: <NightScenery /> },
  { tag: 'Good with kids', svg: <GoodforKids /> },
  { tag: 'Instagrammable', svg: <Intagrammable /> },
  { tag: 'Great scenery', svg: <Landscape /> },
  { tag: 'Shoppers’ heaven', svg: <Shopper /> },
  { tag: 'Stroll friendly', svg: <Stroll /> },
  { tag: 'Fun & joy', svg: <FunJoy /> }
];

interface infoTag_Type {
  data: string[] | undefined;
}

export default function InfoTag({ data }: infoTag_Type) {
  const getTags = () => {
    if (data !== undefined) {
      const temp = _.filter(TAG_LIST, (o) => {
        return _.includes(data, o.tag.replaceAll(' ', ''));
      });
      return temp;
    }
  };

  return (
    <ul className='info_infomation-tags'>
      {_.map(getTags(), (o, index) => {
        return (
          <li
            key={o.tag}
            style={{
              backgroundColor: index % 2 === 1 ? '#bceb49' : '#b6b2f8'
            }}
          >
            {o.svg}
            <p>{o.tag}</p>
          </li>
        );
      })}
    </ul>
  );
}
