import { useState, useEffect } from "react";
import "../css/FrontPage.css";
import blogsData from "../data/BlogsData";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentBlog } from "../Redux/slice";
import { useNavigate , Link } from "react-router-dom";
import { findNonSerializableValue } from "@reduxjs/toolkit";

const FrontPage = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleBlockClick = (id) => {
    console.log(id);
    dispatch(updateCurrentBlog(id));

    navigate("/detailPage");
  };

  return (
    <>
      {/* header section */}
      <div className="header-section">
        <div className="logo-name">
          <h2>MindOpens</h2>
        </div>
      </div>

      {/* blog cards section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          alignContent: "center",
          alignItems: "center",
          gap: "10",
          padding: "1opx",
          // backgroundColor:"rgb(243, 238, 234)"
        }}
      >
        {blogsData?.map((blog, indx) => {
          const {
            id,
            title,
            date,
            author,
            image,
            description,
            deepdescription,
          } = blog;
          return (
            <div
              className="card"
              style={{
                width: "20vw",
                height: "430px",
                padding: "0.9rem",
                marginTop: "20px",
                // boxSizing: "border-box"
                backgroundColor:"rgb(215, 187, 245)"
              }}
            >
              {/* <p className="fs-5">Title:{title}</p> */}
              <div>
                <span
                  className="fw-bold fs-5"
                  style={{ color: "black", fontSize: "1.3rem" }}
                >
                  Title :{" "}
                </span>
                <span className="fst-normal fs-6">{title}</span>
              </div>

              {/* date */}
              <div>
                <span
                  className="fw-bold fs-5"
                  style={{ color: "black", fontSize: "1.3rem" }}
                >
                  Date :{" "}
                </span>
                <span className="fst-normal fs-6">{date}</span>
              </div>
              {/* author */}
              <div>
                <span
                  className="fw-bold fs-5"
                  style={{ color: "black", fontSize: "1.3rem" }}
                >
                  Author :{" "}
                </span>
                <span className="fst-normal fs-6">{author}</span>
              </div>
              {/* image */}
              <div style={{ padding: "3px 0 3px 0" }}>
                <img
                  src={image}
                  alt={title}
                  style={{
                    maxWidth: "100%",
                    display: "block",
                    maxHeight: "150px",
                  }}
                  onClick={() => handleBlockClick(id)}
                />
              </div>
              {/* description */}
              <div>
                <span
                  className="fw-bold fs-5"
                  style={{ color: "black", fontSize: "1.3rem" }}
                >
                  Description :{" "}
                </span>
                <span className="fst-normal fs-6">{description}</span>
              </div>

              {/* //---read more................... */}

              <div style={{padding:'5px'}} className="text-right">
                <Link className="fs-6" to="/detailPage" onClick={(()=>{
                  dispatch(updateCurrentBlog(id));
                })}>Read more..</Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default FrontPage;
