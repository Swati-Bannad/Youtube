const Videocard = (props) =>{
    const { info } = props;
    // console.log(info);
    const {snippet, statistics} = info;
    const {channelTitle, thumbnails, title} = snippet;
    const {viewCount} = statistics;

    if(!info) return null;

    return (
        <div className="shadow-md p-3 mr-3 mt-3 rounded-md video-card bg-white w-52">
            <img className="rounded-md" src={thumbnails.high.url} alt="videoimage"/>
            <div>
                <ul>
                    <li className="font-bold video-title">{title}</li>
                    <li className="text-gray-400">{channelTitle}</li>
                    <li className="text-gray-400"><span>{viewCount} views</span></li>
                </ul>
            </div>
        </div>
    )
}

export default Videocard;