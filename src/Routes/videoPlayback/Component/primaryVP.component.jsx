import { useState,useEffect, useRef } from 'react';
import './primaryVP.styles.css'
import Likes from '../../../components/formatLikes';
import ChannelStats from '../../../components/channelStats.Icon';
import ChannelStatsSubs from '../../../components/channelStats.subsribers';
import likeIcon from '../../../assets/thumbs-up-black-icon.svg';
import dislikeIcon from '../../../assets/thumbs-down-balck-icon.svg';
//import ChannelStats from '../../../components/channelStats';
import shareIcon from '../../../assets/forward-arrow-icon.svg';
import Views from '../../../components/formatViews';
import FormatPublisedAtYt from '../../../components/videoPublisedAt';
import ApiKey from '../../../assets/apiKey'

const PrimaryVideoPlayPage = ({ videoId, width, height }) => {
  const width1 = width;
  const height1 = height;
  
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize the YouTube player when the API is ready
    if (window.YT && window.YT.Player) {
      try {
        if (playerRef.current) {
          playerRef.current.loadVideoById(videoId);
        } else {
          playerRef.current = new window.YT.Player('yt-player', {
            videoId: videoId,
            playerVars: {
              autoplay: 1,
              modestbranding: 1,
              rel: 1,
              showinfo: 0,
            },
          });
        }
      } catch (error) {
        console.error('YouTube player initialization error:', error);
        // Display a custom error message to the user
        // (e.g., "An error occurred while trying to play the video.")
      }
    }
  }, [videoId]);
  
  const videoUrl = `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${ApiKey}&part=snippet,statistics`;
  
  const [stats , setStats] = useState([]); 
  useEffect(()=> {
    fetch(videoUrl)
    .then((response) => response.json())
    .then((videoStats) => setStats(videoStats.items))
  },[videoUrl]);

  return(
      <div className='video-box' style={{ width: `${width1}px`}} >
        <div className='playerBox' id="yt-player" style={{ width: `${width1}px`, height: `${height1}px` }}/>       
        {
            stats.map((stat) => {
              const channelId = stat.snippet.channelId;
              const title = stat.snippet.title;
              const channelName = stat.snippet.channelTitle;
              const description = stat.snippet.description;
              const likes = stat.statistics.likeCount;
              const viewCount = stat.statistics.viewCount;
              const videopublishedAt = stat.snippet.publishedAt;

              return (
                
                <div key= {videoId} className='primary-container'>
                      <div className='video-infos'>
                        <div className='top-container-video-infos'>
                <div className='video-title'style={{ width: `${width}px`}}>{title}</div>
                </div>
                <div className='middle-container-video-infos'>
                  <div className='right-section-mid-container'>
                  <div className='channel-desc'>
                  <a href={`https://www.youtube.com/channel/${channelId}`} rel="noreferrer" target="_blank">
                    <div className='channel-icon-landing'>  
                    <ChannelStats channelId= {channelId}/>                  
                    </div>
                  </a>
                  <div className='channel_properties'>
                    <div className='channel-name-videoPage'>
                      {channelName}
                    </div>
                    <div className='channel-subs'>
                      <ChannelStatsSubs channelId={channelId}/> subscribers
                    </div>
                  </div>
                  </div>
                    <div className='Subscribe'><button className='subs-button'>Subscribe</button></div>
                  </div>
                  <div className='left-section-mid-container'>
                    <div className='like-dislike'>
                      <div className='likes'>
                          <button className='like-button'>
                          <img className="like-dislike-icon" alt='like-icon' src={likeIcon}/>&nbsp;
                          <Likes likes={likes}/>
                          </button>
                       
                      </div>
                      <div className='dislike'>
                        
                          <button className='dislike-button'>
                          <img className="like-dislike-icon" alt='dislike-icon' src={dislikeIcon}/>
                          </button>
                        
                      </div>
                    </div>
                    <div className='share'>
                      <button className='share-button'>
                        <img className='shareIcon'src={shareIcon} alt='share-icon'/>&nbsp;
                        Share
                      </button>
                    </div>
                    <div className='more'>
                      <button className='more-button'>
                        ...
                      </button>
                    </div>
                  </div>
                </div>
                <div className='bottom-container-video-infos'>
                  <div className='top-desc'>
                    <div><Views views={viewCount}/></div> &nbsp;&nbsp;
                    <div><FormatPublisedAtYt givenPublisedAt={videopublishedAt}/></div>
                  </div>
                  <div className='video-description'>{description}</div>  
                </div>
                </div>
                </div> 
              )
            })
          }
  </div>
                
              
  )   
  }

  export default PrimaryVideoPlayPage;