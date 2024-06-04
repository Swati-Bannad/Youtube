import { useEffect,useState } from "react";
import { YOUTUBE_VIDEO_KEY } from "../utils/constant";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
    const [videos, setVideos] = useState([]);
    const getVideos = async() =>{
        const data= await fetch(YOUTUBE_VIDEO_KEY);
        const json = await data.json();
        // console.log(json);
        // console.log(json.items);
        setVideos(json.items);
    }
    useEffect(() => {
        getVideos();
    } ,[])

    return(
        <div className="flex flex-wrap">
            {/* <Videocard info={videos[1]}/> */}
            {videos.map((video) => (
                <Link key={video.id} to={"/watch?v=" + video.id}>
                    <Videocard info={video}/>
                </Link>
            ))}
        </div>
    )
}

export default Videocontainer;