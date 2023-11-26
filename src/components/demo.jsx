import { useState, useEffect } from "react";
import "../css/FrontPage.css";
import blogsData from "../data/BlogsData";
import { useSelector, useDispatch } from "react-redux";
import { updateCurrentBlog } from "../Redux/slice";
import { useNavigate } from "react-router-dom";

const Demo = ()=>{
    return(
        <>
            <div>
                hello
            </div>
        </>
    )
}

export default Demo;