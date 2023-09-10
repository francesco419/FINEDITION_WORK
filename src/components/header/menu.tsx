import { ReactComponent as Bookmark } from '../../assets/svg/fixed menu/bookmark.svg';
import { ReactComponent as Person } from '../../assets/svg/fixed menu/person.svg';
import { ReactComponent as Search } from '../../assets/svg/fixed menu/search.svg';
import { ReactComponent as Menu } from '../../assets/svg/fixed menu/menu.svg';
import { useAppDispatch } from '../../redux/hooks';
import { setLoginFormTrue } from '../../redux/slices/loginSlice';

export default function HeaderMenu() {
  const dispatch = useAppDispatch();
  const not = false;

  const navTo = (to: string) => {
    //useNavigate = nav(`./${to}`)
  };

  const navToLogIn = (to: string) => {
    if (not) {
      return;
    } else {
      dispatch(setLoginFormTrue());
    }
  };
  return (
    <div className='header_menu'>
      <HeaderSVG svg={<Search />} to={navTo} />
      <HeaderSVG svg={<Person />} to={navToLogIn} />
      <HeaderSVG svg={<Bookmark />} to={navTo} />
      <HeaderSVG svg={<Menu />} to={navTo} />
    </div>
  );
}

interface HeaderSVGButton {
  svg: any;
  to: (to: string) => void;
}

function HeaderSVG({ svg, to }: HeaderSVGButton) {
  return <button onClick={() => to('a')}>{svg}</button>;
}
