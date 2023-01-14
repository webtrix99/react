import React, { useState, useRef } from "react";
import "./main.scss";
import { restaurantList } from "../../common/utils/dummayData";
import Card from "./Card";

const filterData = (searchWith, list) => {
  return list.filter((res) =>
    (res.data.data.name + res.data.data.cuisines.join(" "))
      .toLowerCase()
      .includes(searchWith.toLowerCase())
  );
};

const filterByFood = () => {
  let foodTypes = [];
  restaurantList.map((res) => {
    foodTypes.push(...res.data.data.cuisines);
  });
  return [...new Set(foodTypes)];
};

const Main = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
  const [toggle, seToggle] = useState(false);
  const [checkedItems, setCheckedItems] = useState({});
  const [vegType, setVegType] = useState(false);
  const textInput = useRef(null);

  const Switch = () => {
    return (
      <>
        <input
          className="react-switch-checkbox"
          id={`react-switch-new`}
          type="checkbox"
          onChange={(e) => filterVag(e)}
        />
        <label className="react-switch-label" htmlFor={`react-switch-new`}>
          <span className={`react-switch-button`} />
        </label>
      </>
    );
  };
  function filterVag(e) {
    console.log(e.target.checked);
    setVegType(e.target.checked);
    let vegList;
    if (e.target.checked) {
      vegList = restaurantList.filter((res) => !res.data.data?.veg);
    } else {
      vegList = restaurantList.filter((res) => res.data.data.veg);
    }
    setRestaurants(vegList);
  }
  function handleChange(e) {
    setCheckedItems({
      ...checkedItems,
      [e.target.name]: e.target.checked,
    });
  }
  function toggleFilter() {
    seToggle(!toggle);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const selectedItems = Object.keys(checkedItems).filter(
      (item) => checkedItems[item]
    );
    let filteredArray = restaurantList.filter((item) => {
      if (selectedItems.length) {
        for (i = 0; i < item.data.data.cuisines.length; i++) {
          if (selectedItems.includes(item.data.data.cuisines[i])) {
            return true;
            break;
          }
        }
      } else {
        return true;
      }
    });
    console.log(filteredArray, selectedItems, restaurants);
    setRestaurants(filteredArray);
  }

  return (
    <>
      <div className="main">
        <div className="main-inner">
          <div className="head">
            <div className="search-bar">
              <input
                type="search"
                placeholder="Search by Resturant or Food Type...."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  e.target.value
                    ? setRestaurants(filterData(e.target.value, restaurants))
                    : setRestaurants(restaurantList);
                }}
              />
              <button
                onClick={() => {
                  setRestaurants(filterData(searchText, restaurants));
                }}
                type="button"
              >
                Search
              </button>
            </div>
            <div className="filters">
              <span>{vegType ? "Non-veg" : "Vag"}</span>
              <input
                className="react-switch-checkbox"
                id={`react-switch-new`}
                type="checkbox"
                onChange={(e) => filterVag(e)}
              />
              <label
                className="react-switch-label"
                htmlFor={`react-switch-new`}
              >
                <span className={`react-switch-button`} />
              </label>
              <button onClick={toggleFilter}>Filter By Food</button>
            </div>
            <div className="result-count">
              <span>
                {restaurants.length
                  ? `${restaurants.length} Restaurants found`
                  : "No restaurants found"}
              </span>
            </div>
          </div>
          <div className="foot-type">
            {toggle && (
              <form>
                {filterByFood().map((res) => {
                  return (
                    <div className="input-box" key={res}>
                      <input
                        type="checkbox"
                        name={res}
                        id={`ab-${res}`}
                        onChange={handleChange}
                        ref={textInput}
                      />
                      <label htmlFor={`ab-${res}`}>
                        <span>{res}</span>
                      </label>
                    </div>
                  );
                })}
                <button onClick={handleSubmit}>Apply Filter</button>
              </form>
            )}
          </div>
          <div className="resturants">
            {restaurants.length ? (
              restaurants.map((resturant) => {
                return (
                  <Card {...resturant.data.data} key={resturant.data.data.id} />
                );
              })
            ) : (
              <p className="alert">Result not found......</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
