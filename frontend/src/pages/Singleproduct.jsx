import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { allData } from "../assets/sample/Sampledata";

const Singleproduct = () => {
  let { id } = useParams();
  let newid = Number(id);
  const [singledata, setsingledata] = useState([]);
  const [newprice12, setNewprice12] = useState(0);
  let discount = 30;
  useEffect(() => {
    const data = allData.find((item) => item.id === newid);
    setsingledata(data);
    console.log(singledata);
    newprice();
  }, [singledata]);

  const newprice = () => {
    let newprice = (singledata.price / 100) * discount;
    setNewprice12(singledata.price - newprice);
  };

  return (
    <div className="flex flex-col justify-start gap-[2rem] px-4 items-start mt-2 w-full min-h-[70vh] p-2">
      <div className="text-2xl font-bold">{singledata.type}</div>
      <div className="flex w-full h-full flex-row items-start justify-center gap-[2rem]">
        <div className="w-1/2 h-full flex items-center justify-center">
          <img src={singledata.image_url} className="w-full h-full" />
        </div>
        <div className="flex w-1/2 flex-col h-full  gap-2">
          <div className="text-2xl font-bold">{singledata.model}</div>
          <div className="text-xl font-bold">{singledata.brand}</div>
          <div className="flex flex-row items-center justify-start gap-2">
            <div className="rating rating-sm">
              <input type="radio" name="rating-9" className="rating-hidden " />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2 "
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
              />
              <input
                type="radio"
                name="rating-9"
                className="mask mask-star-2"
              />
            </div>
            <h1>{singledata.rating}</h1>
          </div>
          <div className="flex flex-col items-start justify-start gap-2">
            {singledata.stock > 1 ? (
              <div className="flex flex-row items-center justify-start gap-2">
                <h1 className="text-md gap-2 font-bold">IN STOCK</h1>
                <h1 className="text-md gap-2 font-bold">{singledata.stock}</h1>
              </div>
            ) : (
              <div>SORRY NOT IN STOCK</div>
            )}
          </div>
          <div className="w-[80%] h-[1px] bg-white"></div>
          <div className="flex flex-col items-start justify-start gap-2">
            <h1>MRP: ${singledata.price}</h1>
            <h1>Store price: ${Math.round(newprice12)}</h1>
            <h4>You save: ${Math.round(singledata.price - newprice12)}</h4>
          </div>
          {singledata.battery_life ? (
            <div className="flex flex-row items-center justify-start">
              <h1>Battery: {singledata.battery_life}</h1>
            </div>
          ) : null}
          {singledata.connectivity && singledata.type === "tv" ? (
            <div className="flex flex-row items-center justify-start">
              <h1 className="font-bold">connectivity:</h1>
              {singledata.connectivity.map((item, index) => {
                return (
                  <div
                    className="flex border text-center border-white rounded-2xl hover:bg-white justify-center text-sm items-center hover:text-green-500 font-bold cursor-pointer w-fit m-2 p-2 flex-row"
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          ) : null}
          {singledata.smart_features ? (
            <div className="flex flex-row items-center justify-start">
              <h1 className="font-bold">smart features:</h1>
              {singledata.smart_features.map((item, index) => {
                return (
                  <div
                    className="flex border text-center border-white rounded-2xl hover:bg-white justify-center text-sm items-center hover:text-green-500 font-bold cursor-pointer w-fit m-2 p-2 flex-row"
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          ) : null}
          {singledata.resolution ? (
            <div className="flex flex-row items-center justify-start">
              <h1>resolution : {singledata.resolution}</h1>
            </div>
          ) : null}
          {singledata.connectivity && singledata.type === "earbuds" ? (
            <div className="flex flex-row items-center justify-start">
              <h1>connectivity : {singledata.connectivity}</h1>
            </div>
          ) : null}
          {singledata.colors ? (
            <div className="flex flex-row items-center justify-start">
              colors:
              {singledata.colors?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className="flex border text-center border-white rounded-full hover:bg-white justify-center items-center hover:text-green-500 font-bold cursor-pointer w-fit m-2 p-2 flex-row"
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          ) : null}
          <div>release date: {singledata.release_date}</div>
          {singledata.storage_options ? (
            <div className="flex flex-row items-center justify-start">
              storage:
              {singledata.storage_options?.map((item, index) => {
                return (
                  <div
                    className="flex border text-center border-white rounded-full hover:bg-white justify-center items-center hover:text-green-500 font-bold cursor-pointer w-fit m-2 p-2 flex-row"
                    key={index}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          ) : null}
          <div className="w-[80%] h-[1px] bg-white"></div>
          <div className="w-[80%]">{singledata.description}</div>
          <button className="btn btn-accent">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Singleproduct;
