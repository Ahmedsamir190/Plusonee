import pexelsphoto1 from "../../components/images/pexelsphoto1.jpeg";
import pexelsphoto2 from "../../components/images/pexelsphoto2.jpeg";
import pexelsphoto3 from "../../components/images/pexelsphoto3.jpeg";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";

function LandingOne() {
  const scroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <section>
      <div className="landing-one pt-5">
        <div className="container">
          <div className="row align-items-center row-content">
            <p className="words-one">
              Enjoy with your surf and discover new products
            </p>
            <div className=" col-sm-6 col-md-4 col-lg-4 ">
              <div className="box" data-work="Explore">
                <img src={pexelsphoto1} alt={""} className="img-fluid  " />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4  ">
              <div className="box photo-two" data-work="Explore">
                <img
                  src={pexelsphoto2}
                  alt={""}
                  className="img-fluid img-two"
                />
              </div>
            </div>
            <div className="col-sm-6 col-md-4 col-lg-4">
              <div className="box" data-work="Explore">
                <img src={pexelsphoto3} alt={""} className="img-fluid  " />
              </div>
            </div>
            <div className="link-to-product">
              <Link
                to="/products"
                className="shop-link  text-black"
                onClick={() => {
                  scroll();
                }}
              >
                Shop Now <BsFillArrowUpRightCircleFill className="circle" />
              </Link>
            </div>

            <p className="words-two ">
              Enjoy with your surf and discover new products
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingOne;
