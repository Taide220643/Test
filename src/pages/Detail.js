import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllBook } from "../action";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <div className="card lg:card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src=""
          alt="book"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"></h2>
      
        <div className="card-actions justify-end">
          <button className="btn btn-primary"></button>
        </div>
      </div>
    </div>
  );
};

export default Detail;