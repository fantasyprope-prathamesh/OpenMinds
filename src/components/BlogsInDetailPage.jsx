import { useState, useEffect } from "react";
import "../css/FrontPage.css";
import blogsData from "../data/BlogsData";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentBlog } from "../Redux/slice";
import { useNavigate, Link } from "react-router-dom";

const BlogsInDetailPage = ({ idea }) => {
    const dispatch = useDispatch();

  const handleBlockClick = (id) => {
    dispatch(updateCurrentBlog(id));
  };

  return (
    <>
      <div>
        <div
          className="row g-10"
          style={{
            margin:"auto",
            marginTop: "1.5rem",
            width: "70%",
            maxHeight: "120vh",
            padding: "0.5rem",
            backgroundColor: "rgb(247, 247, 247)",
            // height: "10vh"
          }}
        >
          {blogsData &&
            blogsData.slice(0, 3).map((blog, index) => {
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
                  className="card col"
                  style={{
                    width: "20vw",
                    height: "430px",
                    padding: "0.9rem",
                    marginTop: "20px",
                    // boxSizing: "border-box"
                    backgroundColor: "rgb(215, 187, 245)",
                    marginRight:"10px"
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

                  <div style={{ padding: "5px" }} className="text-right">
                    <Link
                      className="fs-6"
                      to="/detailPage"
                      onClick={() => {
                        dispatch(updateCurrentBlog(id));
                      }}
                    >
                      Read more..
                    </Link>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default BlogsInDetailPage;
