import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import bootstrap from "../node_modules/bootstrap/dist/css/bootstrap.css"
import Gallery from './components/Gallery';
import Search from './components/nav/Search';
import Categories from './components/nav/categories/Categories';


const apiKey = "aac3a558f263825d41dd2f7800e4c4b6"
function App() {
  const [data, setData] = useState([])
  const [search, setSearch] = useState("nature")

  const baseURL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}s&per_page=24&format=json&nojsoncallback=1`

  useEffect(() => {
    axios.get(baseURL).then((Response) => {
      setData(Response.data.photos.photo);
    });
  }, [search])

  const getSearch = (sData) => {
    setSearch(sData)
    // console.log(search)
  };
  const getCategory=(cData)=>{
    setSearch(cData);
  }
  return (
    <div className="row d-flex justify-content-end">
      <h1 className='bg-success text-light pb-2'>Gallery</h1>
      <nav className='navbar navbar-expand-lg navbar-light bg-light col-4'>
        <div className="container-fluid ">
            <Search getSearch={getSearch} />
            <Categories getCategory={getCategory}/>
        </div>
      </nav>
      <Gallery data={data} />
    </div>
  );
}

export default App;


