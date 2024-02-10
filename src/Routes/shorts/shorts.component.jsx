import './shorts.styles.css'
import ApiKey from '../../assets/apiKey'
import { useEffect,useState } from 'react';
import ShortsPlayer from './shorts.player.component';


const Shorts = () =>{
    const videoUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q='shorts'&key=${ApiKey}`;
    const [stats , setStats] = useState([]); 
    useEffect(()=> {
        fetch(videoUrl)
        .then((response) => response.json())
        .then((videoStats) => setStats(videoStats.items))
    },[videoUrl]);

    const [currVideoId , setCurrVideoId] = useState(0);
    console.log(stats[currVideoId])
    useEffect(()=>{
        const handleKeypress = (event)=>{
            event.preventDefault();
            switch(event.key){
                case 'ArrowDown': setCurrVideoId(prevIndex => (prevIndex + 1) % stats.length);break;
                case 'ArrowUp': setCurrVideoId(prevIndex => prevIndex === 0 ? stats.length - 1 : prevIndex - 1);break;
                default: break;
            }
        };
        window.addEventListener('keydown',handleKeypress);

        return () => {
            window.removeEventListener('keydown', handleKeypress);
        };
    },[stats]);


    return(
        <div className='short-container'>
            {stats.length > 0 && (
                <ShortsPlayer videoId={stats[currVideoId].id.videoId} />
            )}
        </div>
    )
}

export default Shorts;
