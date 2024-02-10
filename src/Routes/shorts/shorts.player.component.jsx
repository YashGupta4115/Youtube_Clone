import React from 'react'
import ReactPlayer from 'react-player/youtube'

import './shorts.styles.css';

const ShortsPlayer = ({videoId})=>{
    return(
        <div className='shorts-player-container'>
            <ReactPlayer 
                url={`https://www.youtube.com/watch?v=${videoId}'`}
                width='320px' 
                height='100dvh' 
                playing={true}
                controls ={false} 
                className='shorts-player'
            />
        </div>
    )
}
export default ShortsPlayer