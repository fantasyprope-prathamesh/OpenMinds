import { useState, useEffect } from "react";
import "../css/FrontPage.css";
import blogsData from "../data/BlogsData";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentBlog } from "../Redux/slice";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const blogId = useSelector((state) => {
    return state.blogesh.value;
  });

  const [dynamicBlog, setDynamicBlog] = useState({
    id: "",
    title: "",
    date: "",
    author: "",
    image: "",
    description: "",
    deepdescription: "",
  });

  const updateDynamicBlog = () => {
    if (blogId) {
      console.log("id", blogId);
      const blogInfo = blogsData.find((item) => item.id === blogId);
  
      console.log('bloginfo', blogInfo);
  
      if (blogInfo) {
        setDynamicBlog((prevDynamicBlog) => ({
          ...prevDynamicBlog,
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
  

  //----------------------------------------------------------------------------
  useEffect(()=>{
      updateDynamicBlog();
  },[])

  useEffect(() => {
    updateDynamicBlog();
  }, [blogId]);

  return (
    <>
      <div
        className="container "
        style={{
          marginTop: "2rem",
          width: "70%",
          padding: "3rem",
          display: "flex",
          flexDirection: "horizontal",
          justifyContent: "space-between"
        }}
      >
        <div
          className="left-div border border-2"
          style={{ width: "50%", height: "30rem" }}
        >
          <img
            src={dynamicBlog.image}
            alt={dynamicBlog.title}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          ></img>
        </div>

        <div className="right-div border border-2" style={{ width: "50%", height: "30rem" , display:"block"}}>
          <ul>
            <li>
              <div>
                <span>Title : </span>
                <span>{dynamicBlog.title}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DetailPage;
