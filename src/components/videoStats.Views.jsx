import ApiKey from "../assets/apiKey";
import { useState, useEffect } from "react";
import Views from "./formatViews";

const VideoStatViews = ({videoId})=>{
    const [videoStats, setvideoStats] = useState({});
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${ApiKey}`;
        
    useEffect(() => {
        fetch(videoUrl)
            .then(response => response.json())
            .then(videoData => setvideoStats(videoData.items[0]))
            .catch(error => {
                console.error('Error fetching channel stats:', error);
            });
    }, [videoUrl]); // Use [channelUrl] as the dependency array
    
    // Extract the channel icon URL from the channelStats and return the JSX
    const videoViews = videoStats.statistics?.viewCount;
    
    return (
        <Views views={videoViews}/>
    );
}

export default VideoStatViews;