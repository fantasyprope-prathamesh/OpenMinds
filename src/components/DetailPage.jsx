import { useState, useEffect } from "react";
import "../css/FrontPage.css";
import blogsData from "../data/BlogsData";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentBlog } from "../Redux/slice";
import { useNavigate } from "react-router-dom";
import BlogsInDetailPage from "./BlogsInDetailPage";
import NavBar from "./Navbar";
import Footer from "./Footer";

const DetailPage = () => {
  const blogId = useSelector((state) => {
    return state.blogesh.value;
  });

  const dispatch = useDispatch();

  ///-------------------------------------------------------------------------------------

  const [dynamicBlog, setDynamicBlog] = useState({
    id: "",
    title: "",
    date: "",
    author: "",
    image: "",
    description: "",
    deepdescription: "",
  });

  const updateDynamicBlog = (bid) => {
    //--------------------------------------------------------------------------------
    //storing in local storage..
    //  console.log("current bid ",bid);
    // localStorage.setItem("currBlog",bid);

    // const currentBlogData = localStorage.getItem("currBlog");
    // if (currentBlogData != null) {
    //   dispatch(updateCurrentBlog(currentBlogData));
    // }
    // // Save data to local storage whenever it changes
    // localStorage.setItem("currBlog", JSON.stringify(blogId));

    // console.log("memooo ", currentBlogData);
    //-----------------------------------------------------------------------------
    if (bid) {
      console.log("id", bid);
      const blogInfo = blogsData.find((item) => item.id === bid);

      console.log("bloginfo", blogInfo);

      if (blogInfo) {
        setDynamicBlog((dynamicBlog) => ({
          ...dynamicBlog,
          id: blogInfo.id,
          title: blogInfo.title,
          date: blogInfo.date,
          author: blogInfo.author,
          image: blogInfo.image,
          description: blogInfo.description,
          deepdescription: blogInfo.deepdescription,
        }));
      }
    }
  };

  //----------------------------------------------------------------------------------

  useEffect(() => {
    if (blogId != null) {
      updateDynamicBlog(blogId);
    }
  }, [blogId]);

  ///-----------------------------------------------------------------------------

  return (
    <>
      {/* navbar  */}
      <div className="header-section">
        <div className="logo-name">
          <h2>MindOpens</h2>
        </div>
      </div>

      {/* ------------------------------------------------------------- */}
      {dynamicBlog && (
        <div
          className="container "
          style={{
            marginTop: "2rem",
            width: "70%",
            maxHeight: "120vh",
            padding: "1rem",
            display: "flex",
            flexDirection: "horizontal",
            justifyContent: "space-between",
            backgroundColor: "rgb(225, 199, 143)",
            // height: "10vh"
          }}
        >
          <div
            className="left-div "
            style={{
              width: "50%",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
              marginRight: "1rem",
            }}
          >
            {console.log("Image:", dynamicBlog.image)}
            <img
              src={dynamicBlog.image}
              alt={dynamicBlog.title}
              style={{
                maxWidth: "100%",
                maxHeight: "400px",
                objectFit: "cover",
              }}
            />
          </div>

          <div
            className="right-div border border-2"
            style={{ width: "50%", display: "block", padding: "2rem" }}
          >
            {console.log("Title:", dynamicBlog.title)}
            <ul>
              <li>
                <div>
                  <span className="fw-bold fs-5">Title : </span>
                  <span className="fst-normal fs-6">{dynamicBlog.title}</span>
                </div>
              </li>

              <li>
                <div>
                  <span className="fw-bold fs-5">Date : </span>
                  <span className="fst-normal fs-6">{dynamicBlog.date}</span>
                </div>
              </li>

              <li>
                <div>
                  <span className="fw-bold fs-5">Author : </span>
                  <span className="fst-normal fs-6">{dynamicBlog.author}</span>
                </div>
              </li>

              <li>
                <div>
                  <span className="fw-bold fs-5">Description : </span>
                  <span className="fst-normal fs-6">
                    {dynamicBlog.deepdescription}
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div
        className="container "
        style={{
          marginTop: "1.5rem",
          width: "70%",
          maxHeight: "120vh",
          padding: "0.5rem",
          backgroundColor: "rgb(225, 199, 143)",
          // height: "10vh"
        }}
      ></div>

      {/* bottom cards  */}
      <BlogsInDetailPage idea={dynamicBlog.id} />

      {/* footer ===================================================================== */}
      <Footer/>
    </>
  );
};

export default DetailPage;
