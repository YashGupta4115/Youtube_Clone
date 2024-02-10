import { Component } from "react";
import { Link } from "react-router-dom";
import ApiKey from "../../assets/apiKey";


import './homeFeed.styles.css';
import FormatPublisedAtYt from "../../components/videoPublisedAt.jsx";
import Duration from "../../components/formatDuration";
import Views from "../../components/formatViews";
import ChannelStats from "../../components/channelStats.Icon";

const apiKey = ApiKey;

class MainFeed extends Component{
    constructor() { 
        super();
        this.state = {
          feeds: [],
          searchField : ''
        };
      }
      
      componentDidMount() {
        fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=25&key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => this.setState(() => {
          return {feeds : data.items}
          
        }))
      }
      render() { 
        return (
          <div className="video" id ='main-feed'>
            <div className="feed-wrapper" id='main-feed'>
              {this.state.feeds.map((feed) => {
                const id = feed.id;
                const videotitle = feed.snippet.title;
                const videoThumbnail = feed.snippet.thumbnails.medium.url;
                const duration = feed.contentDetails.duration;
                const channelName = feed.snippet.channelTitle;
                const channelId = feed.snippet.channelId;
                const viewCount = feed.statistics.viewCount;
                const videopublishedAt = feed.snippet.publishedAt;

                return (
                  
                    <div className="video-box" key={feed.id}>
                      <Link to={`/video/${feed.id}`}>
                        <div className="video-thumbnail">
                          <img alt={`thumnail ${id}`} className="imag" src={videoThumbnail} />
                          <div className="video-time"><Duration duration={duration}/></div>
                        </div>
                      </Link>

                        <div className="video-description">
                          <div className="author-icon">
                            <a href={`https://www.youtube.com/channel/${channelId}`} rel="noreferrer" target="_blank"><ChannelStats channelId={channelId}/></a>
                          </div>
                          <div>
                            <Link to={`/video/${feed.id}`}>
                              <div className="video_title" >{videotitle}</div>
                            </Link>
                            <a href={`https://www.youtube.com/channel/${channelId}`} rel="noreferrer" className="link" target="_blank"><p className="channel-name">{channelName}</p></a>
                            {<p className="channel-stats"><Views views={viewCount}/> &#8226; <FormatPublisedAtYt givenPublisedAt = {videopublishedAt}/></p> }
                        </div>
                      </div>
                    </div>     
                );
              })}
            </div>
          </div>
        );
      }
}
      

export default MainFeed;