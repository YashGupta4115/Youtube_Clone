import { useState, useEffect } from "react";
import ApiKey from "../assets/apiKey";
import './searchPage.styles.css';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ChannelStats from "./channelStats.Icon";
import VideoStatViews from "./videoStats.Views";
import VideoStatUpdlaod from "./videoStats.Upload";

const SearchResult = () => {
    const { searchField } = useParams();
    const [results, setResults] = useState([]);

    const resultsUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchField}&key=${ApiKey}`;

    useEffect(() => {
        fetch(resultsUrl)
            .then(response => response.json())
            .then(result => setResults(result.items))
            .catch(error => console.error(error));
    }, [resultsUrl]);


    return (
       
        <div className="searchPageContainer_searchPage">
            {results.map((result) => {
                const channelId = result.snippet.channelId;
                const videoId = result.id.videoId;
                const title = result.snippet.title;
                const channelName = result.snippet.channelTitle;
                const videoThumbnail = result.snippet.thumbnails.medium.url;
                const videoDescription = result.snippet.description;
                const responseType = result.id.kind;
                const responseKind = responseType.split('#');
                if(responseKind[1] === 'video'){
                    return (
                        <div className="searchResultContainer_searchPage">
                            <Link to={`/video/${videoId}`}>
                                <div className="imag-container_searchPage">
                                    <img className="result-thumbnail_searchPage"alt = "result-thumbnail" src={videoThumbnail}/>
                                 </div>
                            </Link>
                                <div className="desc-container_searchPage">
                                
                            <Link to={`/video/${videoId}`}>
                                <div className="video_title_searchPage">{title}</div>
                                </Link>
                                <div className="upload_details_searchPage">
                                    <div className="views_searchPage"><VideoStatViews videoId={videoId}/></div>
                                    <div className="dot_searchPage">&#x2022;</div>
                                    <div className="time_searchPage"><VideoStatUpdlaod videoId={videoId}/></div>
                                </div>
                                <div className="channel_desc_searchPage">
                                    <div className="channel-imag_searchPage">
                                    <ChannelStats channelId= {channelId}/>
                                    </div>
                                    <div className="channel_name_searchPage">{channelName}</div>
                                </div>
                                <div className="video-desc_searchPage">{videoDescription}</div>
                                {/* <div className="video-status_searchPage">new</div> */}
                                
                            </div>
                            
                        </div>
                    );
                }
                else{
                    return ''
                }             
            })}
        </div>
    );
}

export default SearchResult;
