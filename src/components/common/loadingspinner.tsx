import { useEffect, useState } from 'react';
import { useInterval } from 'usehooks-ts';
import './lo.scss';

export default function LoadingSpinner() {
  const [color, setColor] = useState<string[]>([]);
  let colorArr = [
    '#C2D3E8', //0
    '#B9B5FF', //2
    '#CECBEC', //1
    '#9391F5', //3
    '#6962E1', //4
    '#8170F0', //5
    '#C2E56C', //6
    '#C2DEB6' //7
  ];
  /*   let colorArr = [
    '#C2D3E8',
    '#8170F0',
    '#B9B5FF',
    '#C2E56C',
    '#CECBEC',
    '#6962E1',
    '#9391F5',
    '#C2DEB6'
  ];
 */
  useEffect(() => {
    setColor(colorArr);
  }, []);

  useInterval(() => {
    const present = color;
    const popped = present.pop();
    if (popped) present.unshift(popped);
    setColor((color) => [...present]);
  }, 100);

  return (
    <div className='lo'>
      <svg
        width='152'
        height='152'
        viewBox='0 0 152 152'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g id='Loading Spinner'>
          <path
            id='Vector'
            d='M79.4834 44.3333H73.1501C71.2501 44.3333 69.9834 43.0667 69.9834 41.1667V15.8333C69.9834 13.9333 71.2501 12.6667 73.1501 12.6667H79.4834C81.3834 12.6667 82.6501 13.9333 82.6501 15.8333V41.1667C82.6501 43.0667 81.3834 44.3333 79.4834 44.3333Z'
            fill={color[0]}
          />
          <path
            id='Vector_2'
            d='M79.4834 139.333H73.1501C71.2501 139.333 69.9834 138.067 69.9834 136.167V110.833C69.9834 108.933 71.2501 107.667 73.1501 107.667H79.4834C81.3834 107.667 82.6501 108.933 82.6501 110.833V136.167C82.6501 138.067 81.3834 139.333 79.4834 139.333Z'
            fill={color[5]}
          />
          <path
            id='Vector_3'
            d='M107.983 79.1667V72.8333C107.983 70.9333 109.25 69.6667 111.15 69.6667H136.483C138.383 69.6667 139.65 70.9333 139.65 72.8333V79.1667C139.65 81.0667 138.383 82.3333 136.483 82.3333H111.15C109.567 82.3333 107.983 81.0667 107.983 79.1667Z'
            fill={color[2]}
          />
          <path
            id='Vector_4'
            d='M12.9834 79.1667V72.8333C12.9834 70.9333 14.2501 69.6667 16.1501 69.6667H41.4834C43.3834 69.6667 44.6501 70.9333 44.6501 72.8333V79.1667C44.6501 81.0667 43.3834 82.3333 41.4834 82.3333H16.1501C14.5667 82.3333 12.9834 81.0667 12.9834 79.1667Z'
            fill={color[6]}
          />
          <path
            id='Vector_5'
            d='M101.017 55.7333L96.5833 51.3C95.3166 50.0333 95.3166 48.1333 96.5833 46.8667L114.633 28.8167C115.9 27.55 117.8 27.55 119.067 28.8167L123.5 33.25C124.767 34.5167 124.767 36.4167 123.5 37.6833L105.45 55.7333C104.183 57 102.283 57 101.017 55.7333Z'
            fill={color[1]}
          />
          <path
            id='Vector_6'
            d='M33.8833 122.867L29.45 118.433C28.1833 117.167 28.1833 115.267 29.45 114L47.5 95.95C48.7667 94.6833 50.6667 94.6833 51.9333 95.95L56.3667 100.383C57.6333 101.65 57.6333 103.55 56.3667 104.817L38.3167 122.867C37.05 124.133 35.15 124.133 33.8833 122.867Z'
            fill={color[4]}
          />
          <path
            id='Vector_7'
            d='M96.5833 100.7L101.017 96.2667C102.283 95 104.183 95 105.45 96.2667L123.5 114C124.767 115.267 124.767 117.167 123.5 118.433L119.067 122.867C117.8 124.133 115.9 124.133 114.633 122.867L96.5833 104.817C95.3166 103.867 95.3166 101.967 96.5833 100.7Z'
            fill={color[3]}
          />
          <path
            id='Vector_8'
            d='M29.45 33.5667L33.8833 29.1333C35.15 27.8667 37.05 27.8667 38.3167 29.1333L56.3667 47.1833C57.6333 48.45 57.6333 50.35 56.3667 51.6167L51.9333 56.05C50.6667 57.3167 48.7667 57.3167 47.5 56.05L29.45 38C28.1833 36.7333 28.1833 34.8333 29.45 33.5667Z'
            fill={color[7]}
          />
        </g>
      </svg>
    </div>
  );
}