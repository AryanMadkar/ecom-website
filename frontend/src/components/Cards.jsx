import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Cards = ({ data }) => {
  const [colors, setColors] = useState("");
  const [storage, setStorage] = useState("");
  const navigate = useNavigate();
  const showid = () => {
    navigate(`/singleproduct/${data.id}`);
  };
  return (
    <div onClick={showid}>
      <div class=" p-4 m-4  w-[20vw] hover:scale-105 transition-all duration-300 hover:shadow-lg cursor-pointer ">
        <a class="block relative h-48 rounded overflow-hidden">
          <img
            alt="ecommerce"
            class="object-cover object-center rounded-lg w-full h-full block"
            src={data.image_url}
          />
        </a>
        <div class="mt-4">
          <div className="flex flex-row items-center justify-between px-1">
            <h3 class="text-white text-xs tracking-widest title-font mb-1">
              {data.brand}
            </h3>
            <h3 className="text-sm text-blue-900">{data.type}</h3>
          </div>
          <div className="flex flex-row items-center justify-between px-1">
            <h2 class="text-gray-600 title-font text-lg font-medium">
              {data.model.slice(0, 11)}
            </h2>
            {data.storage_options ? (
              <div className="flex   flex-row text-sm ">
                <div className="border px-1 hover:bg-orange-500 active:bg-orange-600  text-center rounded-md ">
                  {data?.storage_options?.[0]}
                </div>
                <div className="border px-1 hover:bg-red-500 active:bg-red-600 text-center  rounded-md mx-2">
                  {data?.storage_options?.[1]}
                </div>
              </div>
            ) : null}
          </div>
          <p class="mt-1 text-green-500">${data.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
