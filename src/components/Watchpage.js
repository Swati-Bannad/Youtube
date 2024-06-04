import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { closeMenu } from "../utils/hamburgerSlice";
import { useSearchParams } from "react-router-dom";
// import Commentscontainer from "./Commentscontaner";
import Livechat from "./Livechat";

const Watchpage = () => {
    const [searchParams] = useSearchParams();
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu())
    }, [])

    return (
        <div className="watch-wrap flex w-full " >
            <div className="">
                <iframe src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
                title="YouTube video player"  
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" ></iframe>
                
            </div>
            <Livechat />
        </div>
    )
}
export default Watchpage;