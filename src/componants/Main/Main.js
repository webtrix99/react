import React, { useState } from "react";
import "./main.scss";
import { restaurantList } from "../../common/utils/dummayData";
import Card from "./Card";

const filterData = (searchWith, list) => {
  let aa = list.filter((res) =>
    (res.data.data.name + res.data.data.cuisines.join(" "))
      .toLowerCase()
      .includes(searchWith.toLowerCase())
  );
  return aa;
};
const Main = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setSearchText] = useState("");
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
            <div className="result-count">
              {restaurants.length
                ? `${restaurants.length} Restaurants found`
                : "No restaurants found"}
            </div>
          </div>
          <div className="resturants">
            {restaurants.length ? (
              restaurants.map((resturant) => {
                return (
                  <Card {...resturant.data.data} key={resturant.data.data.id} />
                );
              })
            ) : (
              <p>Result not found......</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
