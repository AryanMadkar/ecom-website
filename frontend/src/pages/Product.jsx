import React, { useContext, useEffect, useState } from "react";
import Cards from "../components/Cards";
import { ThemeContext } from "../context/Context";
import { allData } from "../assets/sample/Sampledata";
import { Link } from "react-router-dom";
const Product = () => {
  const [maindata, setmaindata] = useState([]);
  const [currentpage, setcurrentpage] = useState(1);
  const recordsperpage = 8;
  const lastindex = currentpage * recordsperpage;
  const firstindex = lastindex - recordsperpage;
  const records = allData.slice(firstindex, lastindex);
  const npage = Math.ceil(allData.length / recordsperpage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function getpreviouspage() {}
  function currentpage() {}
  function nextpage() {}

  function setdata() {
    setmaindata(allData);
  }
  useEffect(() => {
    setdata();
  }, [maindata]);
  return (
    <div>
      <section class="text-white body-font min-h-[72vh] flex flex-col justify-center">
        <div class="container px-3 py-4 mx-auto">
          <div className="w-full flex items-center justify-center"></div>
          <div className="flex flex-row items-center justify-center w-full m-[2rem]">
            <h1 className="text-[2rem] font-bold">Our products</h1>
          </div>
          <div class="flex flex-wrap border rounded-2xl mb-4 py-2 items-center justify-center  -m-4">
            {maindata.map((data, index) => {
              return <Cards key={index} data={data} />;
            })}
          </div>
        </div>
      </section>
      <div className="flex items-center justify-center flex-row gap-4">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => nextpage()}
        >
          Next
        </button>
        <div className="flex items-center justify-center flex-row gap-4">
          {numbers.map((n, i) => (
            <li key={i}>
              <button onClick={() => currentpage(n)}>{n}</button>
            </li>
          ))}
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={() => getpreviouspage()}
        >
          Previous
        </button>
      </div>
    </div>
  );
};

export default Product;
