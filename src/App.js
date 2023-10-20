import Navigation from "./Routes/navigation/navigation.component";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Routes/sidebar/sidebar.component";
import MainFeed from "./Routes/home-feed/homeFeed.component";
import VideoPlayBack from "./Routes/videoPlayback/Component/videoPlayback.component";
import SearchResult from "./components/searchPage";
import Shorts from "./Routes/shorts/shorts.component";
import SignIn from "./components/SignIn.component";



const Subscriptions = () => {
  return <div>This is Subscriptions section</div>;
};

const Library = () => {
  return <div>This is Library section</div>;
};

const App = () => {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path='/' element={<Sidebar />}>
            <Route path="/" element={<MainFeed />} />
            <Route path="/subscriptions" element={<Subscriptions />} />
            <Route path="/library" element={<Library />} />
            <Route path="/shorts" element={<Shorts />} />
          </Route>
          <Route path="/video/:videoId" element={<VideoPlayBack />} />
        </Route>
        <Route path='/user-sign-in' element={<SignIn/>}></Route>
        <Route path = "/search/:searchField" element={<SearchResult/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
