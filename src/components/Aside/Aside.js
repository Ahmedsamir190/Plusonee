import { useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";

function Aside(props) {
  const { categories } = props;
  const { category } = props;
  const { allproducts } = props;
  const { setProducts } = props;
  const { handleloading } = props;
  const [toggleone, setToggeleone] = useState(true);
  const [toggletwo, setToggeletwo] = useState(true);
  const [togglethree, setToggelethree] = useState(true);
  const [range, setRange] = useState(0);
  const [from, setFrom] = useState(0);
  const [to, setTo] = useState(0);
  const [priceRange, setPriceRange] = useState("");

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

  const handlePriceRangeChange = (event) => {
    const selectedRange = event.target.value;
    setPriceRange(selectedRange);

    let minPrice, maxPrice;

    if (selectedRange === "rangeone") {
      minPrice = 100;
      maxPrice = 300;
    } else if (selectedRange === "rangetwo") {
      minPrice = 301;
      maxPrice = 600;
    } else if (selectedRange === "rangethree") {
      minPrice = 601;
      maxPrice = 1000;
    }

    fetch(
      `https://api.escuelajs.co/api/v1/products/?price_min=${minPrice}&price_max=${maxPrice}`
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
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
                        handleloading();
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
                  type={"radio"}
                  id="rangeone"
                  onChange={handlePriceRangeChange}
                  value="rangeone"
                  name={"os"}
                  onClick={() => {
                    handleloading();
                  }}
                />
                <label htmlFor="rangeone">$100 to $300</label>
              </div>
              <div className="input-check ">
                <input
                  type={"radio"}
                  name={"os"}
                  id="rangetwo"
                  onChange={handlePriceRangeChange}
                  value="rangetwo"
                  onClick={() => {
                    handleloading();
                  }}
                />
                <label htmlFor="rangetwo">$301 to $600</label>
              </div>
              <div className="input-check ">
                <input
                  type={"radio"}
                  id="rangethree"
                  onChange={handlePriceRangeChange}
                  value="rangethree"
                  name={"os"}
                  onClick={() => {
                    handleloading();
                  }}
                />
                <label htmlFor="rangethree">$601 to $1101</label>
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
                    handleloading();
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
                    handleloading();
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
