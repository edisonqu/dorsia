import './App.css';
import Hero from './Components/Hero/Hero'
import Hero2 from "./Components/Hero/Hero2";
import Carousel from "./Components/Carousel/Carousel";
import Team from "./Components/Carousel/Carousel";
import Food from "./Components/Food/Food";
import {Video} from "./Components/Video/Video";

function App() {
  return (
    <div className='overflow-hidden bg-black'>
      {/*<Hero/>*/}
        <Hero2/>
        <Team/>
        <Food/>
        <Video/>
    </div>
  );
}

export default App;
