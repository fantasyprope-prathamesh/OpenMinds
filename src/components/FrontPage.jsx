import { useState, useEffect } from "react";
import "../css/FrontPage.css";
import blogsData from "../data/BlogsData";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentBlog } from "../Redux/slice";
import { useNavigate } from "react-router-dom";
import { findNonSerializableValue } from "@reduxjs/toolkit";

const FrontPage = () => {
    const navigate = useNavigate();

   const dispatch = useDispatch();

   const handleBlockClick = (id)=>{
    console.log(id);
    dispatch(updateCurrentBlog(id));

    navigate('/detailPage');
   }

  return (
    <>
      {/* header section */}
      <div className="header-section">
        <div className="logo-name">
          <h2>MindOpens</h2>
        </div>
      </div>

      {/* blog cards section */}
      <div style={{ display: "flex",flexWrap:"wrap",justifyContent:"space-around",alignContent:"center",alignItems:"center",gap:"10",padding:"1opx" }}>
        {blogsData?.map((blog, indx) => {
          const { id, title, date, author, image, description, deepdescription } =
            blog;
          return (
            <div
              className="card"
              style={{
                width: "20vw",
                height: "450px",
                padding: "0.9rem",
                marginTop: "20px"
                // boxSizing: "border-box"
              }}
            >
              {/* <p className="fs-5">Title:{title}</p> */}
              <div>
                <span
                  className=""
                  style={{ color: "black", fontSize: "1.3rem" }}
                >
                  Title :{" "}
                </span>
                <span className="fs-6">{title}</span>
              </div>

              {/* date */}
              <div>
                <span
                  className=""
                  style={{ color: "black", fontSize: "1.3rem" }}
                >
                  Date :{" "}
                </span>
                <span className="fs-6">{date}</span>
              </div>
              {/* author */}
              <div>
                <span
                  className=""
                  style={{ color: "black", fontSize: "1.3rem" }}
                >
                  Author :{" "}
                </span>
                <span className="fs-6">{author}</span>
              </div>
              {/* image */}
              <div>
                <img
                  src={image}
                  alt={title}
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    height: "200px",
                    display: "block",
                  }}
                  onClick={()=>handleBlockClick(id)}
                />
              </div>
              {/* description */}
              <span className="" style={{ color: "black", fontSize: "1.3rem" }}>
                Description :{" "}
              </span>
              <span className="fs-6">{description}</span>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FrontPage;
