import './pageCount.scss';

interface InfoCount_Type {
  value: {
    bookmark: number | undefined;
    liked: number | undefined;
    view: number | undefined;
  };
}

export default function PageCount({ value }: InfoCount_Type) {
  return (
    <div className='pageCount'>
      <ul>
        <li>
          <p>{value.bookmark} Bookmarked</p>
        </li>
        <li>
          <p>{value.liked} Liked</p>
        </li>
        <li>
          <p>{value.view} Viewed</p>
        </li>
      </ul>
    </div>
  );
}
