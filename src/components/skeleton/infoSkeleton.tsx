import './infoSkeleton.scss';
import Header from '../header/header';
import Footer from '../footer/footer';

export default function InfoSkeleton() {
  return (
    <div className='skeletonInfo'>
      <Header type='black' />
      <div
        style={{
          display: 'flex',
          padding: '180px 70px 180px',
          justifyContent: 'space-between',
          backgroundColor: '#000'
        }}
      >
        <div>
          <div
            style={{
              width: '880px',
              height: '36px',
              margin: '0 0 10px 0'
            }}
            className='skeletonAnimation'
          ></div>
          <div
            style={{ width: '880px', height: '693px' }}
            className='skeletonAnimation'
          ></div>
          <div
            style={{
              width: '880px',
              height: '346px',
              margin: '43px 0 37px 0'
            }}
            className='skeletonAnimation'
          ></div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div
              style={{
                width: '404px',
                height: '271px'
              }}
              className='skeletonAnimation'
            ></div>
            <div
              style={{
                width: '404px',
                height: '271px'
              }}
              className='skeletonAnimation'
            ></div>
          </div>
        </div>
        <div>
          <div
            style={{ width: '300px', height: '975px' }}
            className='skeletonAnimation'
          ></div>
          <div
            style={{
              width: '300px',
              height: '232px',

              margin: '18px 0 0 0'
            }}
            className='skeletonAnimation'
          ></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
