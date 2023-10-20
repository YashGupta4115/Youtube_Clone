import { useState, useEffect } from "react";
import ApiKey from "../assets/apiKey";

const ChannelStats = ({ channelId }) => { 
    
    const [channelStats, setChannelStats] = useState({});
    const channelUrl = `https://www.googleapis.com/youtube/v3/channels?key=${ApiKey}&part=snippet&id=${channelId}`;
        
    useEffect(() => {
        fetch(channelUrl)
            .then(response => response.json())
            .then(channelData => setChannelStats(channelData.items[0]))
            .catch(error => {
                console.error('Error fetching channel stats:', error);
            });
    }, [channelUrl]); // Use [channelUrl] as the dependency array
    
    // Extract the channel icon URL from the channelStats and return the JSX
    const channelIconUrl = channelStats.snippet?.thumbnails?.default?.url;
    
    return (
        <img alt={`channelIcon ${channelId}`} className="channel-imag" src={channelIconUrl} />
    );
}

export default ChannelStats;
