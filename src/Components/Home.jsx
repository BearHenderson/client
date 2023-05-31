import React from 'react';
import {Link, useNavigate} from 'react-router-dom';
import backgroundImage from '../assets/images/backgroundImage.jpg';

const Home = () => {
  const navigate = useNavigate();
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
              <h1>EXCUSE ME MAG</h1>
              <p>Stories, art, & angst for the disaffected & easily unimpressed.</p>
              {/* Additional text or components */}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="content">
            <div className="content-inner">
              <h2>EXCUSE ME Mag</h2>
              <p>Oh, hey, welcome to the official EXCUSE ME Mag web page. This here’s the place where you can find out all about our weird lit and art zine (Stories! Art! Angst!) and purchase digital & print copies for yourself & your friends</p>
              <p>EXCUSE ME Mag mostly ISN’T about politics, but when it is, we lean far left. Also, sometimes the art has nudity, or the stories have parts that are unsuitable for kids; that’s why the cover of each issue says “FOR MATURE READERS.”</p>
              <p>No pressure, but just in case you’re swinging good with the loot, here’s a button where you can make a donation to further our noble cause:</p>
              <button type="button" className="btn btn-warning" onClick={redirectToPaypal}>Donate</button>
              {/* Additional text or components */}
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div className="content-inner">
            <h2>WHO READS EXCUSE ME MAG?</h2>
            <div className="row">
              <div className="col-sm-2">
                <h4>Joe O'Brien</h4>
                <img src={require("../assets/images/Joe.jpeg")} alt="Joe" className="img-thumbnail" style={{ width: "400px", height: "300px" }} />
              </div>
              <div className="col-sm-2">
                <h4>Darius James</h4>
                <img src={require("../assets/images/Darius.jpg")} alt="Darius" className="img-thumbnail" style={{ width: "400px", height: "300px" }} />
              </div>
              <div className="col-sm-2">
                <h4>Lydia Otzko</h4>
                <img src={require("../assets/images/Ina.jpg")} alt="Ina" className="img-thumbnail" style={{ width: "400px", height: "300px" }} />
              </div>
              <div className="col-sm-2">
                <h4>Barrymore Tebbs</h4>
                <img src={require("../assets/images/Barrymore.jpg")} alt="Barrymore" className="img-thumbnail" style={{ width: "400px", height: "300px" }} />
              </div>
              <div className="col-sm-2">
                <h4>Mark Borchardt</h4>
                <img src={require("../assets/images/Borchardt.jpg")} alt="Borchardt" className="img-thumbnail" style={{ width: "400px", height: "300px" }} />
              </div>
              <div className="col-sm-2">
                <h4>Lydia Xythali</h4>
                <img src={require("../assets/images/Lydia.jpeg")} alt="Lydia" className="img-thumbnail" style={{ width: "400px", height: "300px" }} />
              </div>
            </div>
          </div>
        </div>         
    </div>
    </div>
  );
};

export default Home;







