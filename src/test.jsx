import { useEffect, useRef } from 'react';

const YouTubeVideo = ({ videoId }) => {
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize the YouTube player when the API is ready
    if (window.YT && window.YT.Player) {
      try {
        playerRef.current = new window.YT.Player('yt-player', {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            modestbranding: 1,
            rel: 0,
            showinfo: 0,
          },
        });
      } catch (error) {
        console.error('YouTube player initialization error:', error);
        // Display a custom error message to the user
        // (e.g., "An error occurred while trying to play the video.")
      }
    }
  }, [videoId]);

  return <div id="yt-player"></div>;
};

export default YouTubeVideo;


// const App = () => {
//     return (
//       <div>
//         <h1>YouTube Video Player</h1>
//         <YouTubeVideo videoId="qU2d9kZMIr4" />
//       </div>
//     );
//   };
