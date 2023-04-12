import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function Aside(props) {
  const { categories } = props;
  const { category } = props;
  const { allproducts } = props;
  const { setProducts } = props;

  const [toggleone, setToggeleone] = useState(true);
  const [toggletwo, setToggeletwo] = useState(true);
  const [togglethree, setToggelethree] = useState(true);
  const [range, setRange] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);

  const Handleone = () => {
    setToggeleone((toggleone) => !toggleone);
  };
  const Handletwo = () => {
    setToggeletwo((toggletwo) => !toggletwo);
  };
  const Handlethree = () => {
    setToggelethree((togglethree) => !togglethree);
  };

  // make filter for price range

  const RangeOne = () => {
    fetch(
      `https://api.escuelajs.co/api/v1/products/?price_min=100&price_max=300`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const RangeTwo = () => {
    fetch(
      "https://api.escuelajs.co/api/v1/products/?price_min=301&price_max=600"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const RangeThree = () => {
    fetch(
      "https://api.escuelajs.co/api/v1/products/?price_min=601&price_max=1001"
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const Rangefour = () => {
    fetch(
      ` https://api.escuelajs.co/api/v1/products/?price_min=${from}&price_max=${to}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  const Rangefive = () => {
    fetch(
      ` https://api.escuelajs.co/api/v1/products/?price_min=1&price_max=${range}`
    )
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  return (
    <div className="aside-checkbox bg-white ">
      <div>
        <h3
          onClick={Handleone}
          className="py-2 d-flex justify-content-between align-items-center title text-secondary"
          style={{ cursor: "pointer" }}
        >
          Categories
          {toggleone ? (
            <FaAngleDown style={{ color: "#d6c9af", cursor: "pointer" }} />
          ) : (
            <FaAngleUp style={{ cursor: "pointer" }} />
          )}
        </h3>
      </div>
      <form className="form">
        <div className="check ">
          {toggleone && (
            <>
              <div className="input-check">
                <input
                  id="all-product"
                  type={"checkbox"}
                  onClick={() => {
                    allproducts();
                  }}
                />
                <label htmlFor="all-product">Get All Products</label>
              </div>
              {categories.map((categorie) => {
                return (
                  <div className="input-check" key={categorie.id}>
                    <input
                      id={categorie.id}
                      type={"checkbox"}
                      name={"os"}
                      onClick={() => {
                        category(categorie.id);
                      }}
                    />
                    <label htmlFor={categorie.id}>{categorie.name}</label>
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div>
          <h3
            onClick={Handletwo}
            className="py-2 d-flex justify-content-between align-items-center title text-secondary"
            style={{ cursor: "pointer" }}
          >
            Price
            {toggletwo ? (
              <FaAngleDown style={{ color: "#d6c9af", cursor: "pointer" }} />
            ) : (
              <FaAngleUp style={{ cursor: "pointer" }} />
            )}
          </h3>
        </div>
        <div className="check ">
          {toggletwo && (
            <>
              <div className="input-check ">
                <input
                  id="categoryone"
                  type={"radio"}
                  name={"os"}
                  onClick={() => {
                    RangeOne();
                  }}
                />
                <label htmlFor="categoryone">$100 to $300</label>
              </div>
              <div className="input-check ">
                <input
                  id="categorytwo"
                  type={"radio"}
                  name={"os"}
                  onClick={() => {
                    RangeTwo();
                  }}
                />
                <label htmlFor="categorytwo">$301 to $600</label>
              </div>
              <div className="input-check ">
                <input
                  id="categorythree"
                  type={"radio"}
                  name={"os"}
                  onClick={() => {
                    RangeThree();
                  }}
                />
                <label htmlFor="categorythree">$601 to $1101</label>
              </div>
            </>
          )}
        </div>
        <div>
          <h3
            className="py-3 d-flex justify-content-between align-items-center title text-secondary"
            onClick={Handlethree}
            style={{ cursor: "pointer" }}
          >
            {" "}
            Price-Range
            {togglethree ? (
              <FaAngleDown style={{ color: "#d6c9af", cursor: "pointer" }} />
            ) : (
              <FaAngleUp style={{ cursor: "pointer" }} />
            )}
          </h3>
        </div>
        {togglethree && (
          <div className="check ">
            <>
              <div className="filter-price pb-lg-4">
                <div className="input-price">
                  <input
                    id="price"
                    type={"number"}
                    min={"5"}
                    max={"1000"}
                    placeholder={"$Min"}
                    className="border border-dark"
                    onChange={(e) => {
                      setFrom(e.target.value);
                    }}
                  />
                </div>
                <div className="input-price">
                  <input
                    id="price"
                    type={"number"}
                    min={"0"}
                    max={"1000"}
                    placeholder={"$Max"}
                    className="border border-dark"
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                  />
                </div>
                <button
                  type={"button"}
                  onClick={() => {
                    Rangefour();
                  }}
                  className="go-button"
                >
                  Go
                </button>
              </div>
              <div className="input-check ">
                <label htmlFor="range">Range</label>
                <input
                  id="range"
                  type={"range"}
                  name={"os"}
                  min={"0"}
                  max={"1101"}
                  step={"100"}
                  // value={"0"}
                  onChange={(e) => {
                    setRange(e.target.value);
                    Rangefive();
                  }}
                />
                <span>${range}</span>
              </div>
            </>
          </div>
        )}
      </form>
    </div>
  );
}

export default Aside;
