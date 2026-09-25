// import { fetchPhotos } from "./api/mediaApi";
import { SearchBar } from "./components/SearchBar";
import Tabs from "./components/Tabs";
import ResultGrid from "./components/ResultGrid";
function App() {
  return (
    
      <div className=" h-screen w-full text-white bg-green-950 ">
        <SearchBar/>
        <Tabs/>
        <ResultGrid/>
      </div>
    
  );
}

export default App;
