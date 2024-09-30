import React, { useContext } from "react";
import image from "/feature1.jpg";
import { IoMdArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/Context";
const Homepagecard = () => {
  const { setfeatures, setsetfeatures } = useContext(ThemeContext);
  return (
    <div>
      <div className="card bg-base-100 sm:m-2 w-96 shadow-xl">
        <figure>
          <Link onClick={()=>{
            setsetfeatures("phones")
          }} to="/product">
            <img src={image} alt="phones" />
          </Link>
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">Shoes!</h2>
          <p className="text-white">
            If a dog chews shoes whose shoes does he choose?
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary text-white">
              <IoMdArrowForward />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepagecard;
