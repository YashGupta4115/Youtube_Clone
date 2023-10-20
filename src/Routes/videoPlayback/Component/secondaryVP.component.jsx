import { Link } from 'react-router-dom';
import './secondaryVP.styles.css';
import { useState , useEffect } from 'react';
import ApiKey from '../../../assets/apiKey';
import VideoStatViews from '../../../components/videoStats.Views';
import VideoStatUpdlaod from '../../../components/videoStats.Upload';

const Secondary = ()=> { 
    // const limitedSearchTerms = tags.slice(0, 5);
    // const searchTermString = limitedSearchTerms.join('+');

    const videoUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='music'&key=${ApiKey}`;

    const [stats , setStats] = useState([]); 
    useEffect(()=> {
        fetch(videoUrl)
        .then((response) => response.json())
        .then((videoStats) => setStats(videoStats.items))
    },[videoUrl]);
    


    return(
        <div>       
          {
              stats.map((stat) => {
                const videoId = stat.id.videoId;
                const videoThumbnail = stat.snippet.thumbnails.medium.url;
                const title = stat.snippet.title;
                const channelName = stat.snippet.channelTitle;
                
                return (
                    <div className="div1_secondaryVP">
                        <Link to = {`/video/${videoId}`}>
                        <div className="div-imag_secondaryVP">
                            <img alt='related-thumbnail'className="imag_secondaryVP" src={videoThumbnail}/>
                        </div>
                        <div className="div-desp_secondaryVP">
                        <p className="desp1_secondaryVP" title={title}>
                            {title}
                        </p>
                            <p className="desp2_secondaryVP">{channelName}</p>
                            <p className="desp3_secondaryVP">{<VideoStatViews videoId={videoId}/>}&#x2022; {<VideoStatUpdlaod videoId={videoId}/>}</p>
                        </div>
                        </Link>
                    </div>
                )
              })
            }
        </div>
                  
                
    )   
    }

export default Secondary;