import { ReactComponent as Bookmark } from '../../assets/svg/fixed menu/bookmark.svg';
import { ReactComponent as Person } from '../../assets/svg/fixed menu/person.svg';
import { ReactComponent as Search } from '../../assets/svg/fixed menu/search.svg';
import { ReactComponent as Menu } from '../../assets/svg/fixed menu/menu.svg';

export default function HeaderMenu() {
  return (
    <div className='header_menu'>
      <HeaderSVG svg={<Search />} to={'Search'} />
      <HeaderSVG svg={<Person />} to={'Person'} />
      <HeaderSVG svg={<Bookmark />} to={'Bookmark'} />
      <HeaderSVG svg={<Menu />} to={'Menu'} />
    </div>
  );
}

interface HeaderSVGButton {
  svg: any;
  to: string;
}

function HeaderSVG({ svg, to }: HeaderSVGButton) {
  const onClickHandler = () => {
    console.log(to);
  };
  return <button onClick={onClickHandler}>{svg}</button>;
}
