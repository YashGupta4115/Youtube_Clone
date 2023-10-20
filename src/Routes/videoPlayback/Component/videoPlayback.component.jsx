import PrimaryVideoPlayPage from './primaryVP.component';
import Secondary from './secondaryVP.component';
import './videoPlayback.styles.css';
import { useParams } from 'react-router-dom';
import { useState,useEffect } from 'react';
import ApiKey from '../../../assets/apiKey';


const VideoPlayBack = ()=> {

    const { videoId } = useParams();

    const videoUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${ApiKey}&part=snippet,statistics`;
    
    const [stats , setStats] = useState([]); 
    useEffect(()=> {
        fetch(videoUrl)
        .then((response) => response.json())
        .then((videoStats) => setStats(videoStats.items))
    },[videoUrl]);

    // const playerWidth = stats.snippet?.thumbnails?.default?.width;
    // const playerHeight = stats.snippet?.thumbnails?.default?.height;
    // console.log('received dimensions'+playerHeight,playerWidth);
    

    return (

            stats.map((stat)=>{
                // const playerWidth = stat.snippet.thumbnails.standard.width+40;
                // const playerHeight = stat.snippet.thumbnails.standard.height;
                const playerWidth = 700;
                const playerHeight = 400;
                //const tags = stat.snippet.tags;
                
                return (
                    <div className="VideoPlayBack">
                        <div className="primaryContainer">
                            <PrimaryVideoPlayPage videoId={videoId} width={playerWidth} height={playerHeight}/>
                        </div>
                        <div className="secondaryContainer">
                            <Secondary/>
                        </div>
                    </div>
                )
            })      
        
    )
}

export default VideoPlayBack;