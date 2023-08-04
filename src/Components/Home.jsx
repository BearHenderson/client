import React from 'react';
import backgroundImage from '../assets/images/backgroundImage.jpg';
import Navbar from './Navbar';

const Home = () => {
  const redirectToPaypal = () => {
    window.location.href = "https://www.paypal.com/donate?token=ozNo-N7LXIiKbtLQJ347usu0FcnbAateVnarjjUrJyNdmST3FNQJ9F9wz05rqsmt7PjgpccPvt4w4dAQ";};

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <div
            className="background-image-container"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          >
            <div className="overlay-text-container">
              <Navbar />
              <h1 className='playfair-font'>EXCUSE ME MAG</h1>
              <p className='playfair-font'>Stories, art, & angst for the disaffected & easily unimpressed.</p>
              {/* Additional text or components */}
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-sm-4">
          <div className="content">
            <div className="content-inner">
              <h2 className="playfair-font" >EXCUSE ME Mag</h2>
              <h6 className='playfair-font-lrg'>Oh, hey, welcome to the official EXCUSE ME Mag web page. This here’s the place where you can find out all about our weird lit and art zine (Stories! Art! Angst!) and purchase digital & print copies for yourself & your friends.
              EXCUSE ME Mag mostly ISN’T about politics, but when it is, we lean far left. Also, sometimes the art has nudity, or the stories have parts that are unsuitable for kids; that’s why the cover of each issue says “FOR MATURE READERS.”</h6>
              <h6 className='playfair-font-lrg'>No pressure, but just in case you’re swinging good with the loot, here’s a button where you can make a donation to further our noble cause:</h6>
              <button type="button" className="btn btn-warning" onClick={redirectToPaypal}>Donate</button>
              <br/>
              {/* Additional text or components */}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="content-inner">
            <h2 className='playfair-font'>WHO READS EXCUSE ME MAG?</h2>
            <div className="row justify-content-center">
              <div className="col-sm-3">
              <a href={require("../assets/images/Joe.jpeg")} target="_blank">
                <img src={require("../assets/images/Joe.jpeg")} alt="Joe" className="img-thumbnail" style={{ width: "375px", height: "375px" }} />
              </a>
              <h4 className='playfair-font'>Joe O'Brien</h4>
              </div>
              <div className="col-sm-3">
              <a href={require("../assets/images/Darius.jpg")} target="_blank">
                <img src={require("../assets/images/Darius.jpg")} alt="Darius" className="img-thumbnail" style={{ width: "375px", height: "375px" }} />
              </a>
              <h4 className='playfair-font'>Darius James</h4>
              </div>
              <div className="col-sm-3">
              <a href={require("../assets/images/Ina.jpg")} target="_blank">
                <img src={require("../assets/images/Ina.jpg")} alt="Ina" className="img-thumbnail" style={{ width: "375px", height: "375px" }} />
              </a>
              <h4 className='playfair-font'>Lydia Otzko</h4>
              </div>
              <div className='row justify-content-center'>
              <div className="col-sm-3">
              <a href={require("../assets/images/Barrymore.jpg")} target="_blank">
                <img src={require("../assets/images/Barrymore.jpg")} alt="Barrymore" className="img-thumbnail" style={{ width: "375px", height: "375px" }} />
              </a>
              <h4 className='playfair-font'>Barrymore Tebbs</h4>
              </div>
              <div className="col-sm-3">
              <a href={require("../assets/images/Borchardt.jpg")} target="_blank">
                <img src={require("../assets/images/Borchardt.jpg")} alt="Borchardt" className="img-thumbnail" style={{ width: "375px", height: "375px" }} />
              </a>
              <h4 className='playfair-font'>Mark Borchardt</h4>
              </div>
              <div className="col-sm-3">
              <a href={require("../assets/images/Lydia.jpeg")} target="_blank">
                <img src={require("../assets/images/Lydia.jpeg")} alt="Lydia" className="img-thumbnail" style={{ width: "375px", height: "375px" }} />
              </a>
              <h4 className='playfair-font'>Lydia Xythali</h4>
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col sm-6">
          <Navbar />
          </div>
        </div>
  
      
  );
};

export default Home;







