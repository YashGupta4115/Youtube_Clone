import { useState, useEffect } from "react";
import Views from "./formatViews";
import ApiKey from "../assets/apiKey";

const ChannelStatsSubs = ({ channelId }) => { 
    const [channelStats, setChannelStats] = useState({});
    const apiKey = ApiKey; // Replace with your actual API key
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&part=snippet,statistics&id=${channelId}`;
        
    useEffect(() => {
        fetch(channelUrl)
            .then(response => response.json())
            .then(channelData => setChannelStats(channelData.items[0]))
            .catch(error => {
                console.error('Error fetching channel stats:', error);
            });
    }, [channelUrl]); 
    const channelSubs = channelStats.statistics?.subscriberCount;
    
    return (
        <Views views={channelSubs}/>
    );
}

export default ChannelStatsSubs;
