import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './errorpage.scss';

export default function ErrorPage() {
  return (
    <div className='errorpage'>
      <Header type='black' />
      <div className='errorpage-body'>
        <div className='errorpage_container'>
          <div className='errorpage_container-title'>
            <h2>Oops!</h2>
          </div>
          <div className='errorpage_container-body'>
            <p>{`Sorry, the page you requested was not found.\nTry going back or report the problem to us!`}</p>
          </div>
          <div className='errorpage_container-contact'>
            <p>Contact us</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
