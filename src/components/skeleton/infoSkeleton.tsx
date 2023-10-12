import './infoSkeleton.scss';
import Header from '../header/header';

export default function InfoSkeleton() {
  return (
    <div className='skeletonInfo'>
      <Header type='black' />
      <div style={{ display: 'flex' }}>
        <div>
          <div style={{ width: '880px', height: '36px' }}></div>
          <div style={{ width: '880px', height: '693px' }}></div>
          <div style={{ width: '880px', height: '346px' }}></div>
          <div>
            <div style={{ width: '404px', height: '271px' }}></div>
            <div style={{ width: '404px', height: '271px' }}></div>
          </div>
        </div>
        <div>
          <div style={{ width: '300px', height: '975px' }}></div>
          <div style={{ width: '300px', height: '232px' }}></div>
        </div>
      </div>
    </div>
  );
}
