import './card.scss';
import { ReactComponent as BookMark } from '../../assets/svg/bookmark-big.svg';
import image from '../../assets/image/temp/Frame.png';
import { cardType } from '../../page/admin/administrator';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../redux/hooks';
import { selectClick } from '../../redux/slices/clickSlice';
import { StroyCardDate_Type } from '../../data/storyCardData';
import { is } from 'date-fns/locale';
import { storyData_Type } from '../../data/storyData';

export interface MegazineCardType {
  data: cardType | StroyCardDate_Type;
  color: string;
  click?: boolean;
  type: string;
  fcolor?: string;
}

export default function Card({ data, color, type, fcolor }: MegazineCardType) {
  const nav = useNavigate();
  const click = useAppSelector(selectClick);

  if ('coverLocate' in data) {
    const navigateHandler = () => {
      if (click === false) nav(`/info/${data.id}/${data.typeId}`);
    };

    return (
      <dl className={`magazineCard-${type}`} onClick={navigateHandler}>
        <dt>
          <img src={data.coverImg} />
        </dt>
        <dd>
          <p>{data.coverLocate}</p>
          <p style={{ color: fcolor ? fcolor : '#fff' }}>{data.coverTitle},</p>
          <p style={{ color: fcolor ? fcolor : '#fff' }}>{data.coverAddr}</p>
        </dd>
      </dl>
    );
  } else {
    const navigateHandler = () => {
      if (click === false) nav(`/story/${data.id}`);
    };
    const theme = data.coverTheme;

    return (
      <dl className={`magazineCard-${type}`} onClick={navigateHandler}>
        <dt>
          <img src={data.coverImg} />
        </dt>
        <dd>
          <p>{theme}</p>
          <p
            style={{ color: fcolor ? fcolor : '#fff' }}
          >{`${data.coverTitle}`}</p>
        </dd>
      </dl>
    );
  }
}
