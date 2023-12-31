import image20 from "../../components/images/image20.png";
import image22 from "../../components/images/image22.png";

function LandingTwo() {
  return (
    <section>
      <div className="Landing-two  ">
        <div className="container">
          <div className="lan-word-two">
            <span>Our goal</span>
            <p>
              We work hard to provide all that is new in terms of modern and
              unique products that help you stand out and shine...
            </p>
          </div>
          <div className="row lan-two-row">
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="">
                <img src={image20} alt={""} className="img-fluid" />
              </div>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <div className="">
                <img src={image22} alt={""} className="img-fluid" />
              </div>
            </div>
          </div>
          <div className="cfo-speech">
            <div className="signature">
              <span>A</span>
              <span>s</span>
            </div>
            <p>
              good things come to those who wait what has been missing in the
              modern fashion industry for year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingTwo;
