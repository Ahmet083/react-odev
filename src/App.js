
import axios from "../node_modules/axios";
import  {useEffect,  useState }  from "react";
import './App.css';
import City from "./city/city";

function App() {
  const key = "20a7d082d6fc55b5aa12a240bba9b484";
  const [search, setSearch] = useState("");
  const [city, setCity] = useState();

  useEffect(() => {
    async function getApi()  {
     try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`
        );
      console.log(response);
      setcity(response.data);
    } catch (error) {
      console.error(error);
    }
    }
    getApi();
  }, [search])
  return (
    <div className="App">
     <div>
      <input onchange={(e) => setSearch(e.target.value)} type="text"
      placeholder="Placeholder" className=" my-5 px-3 w-[250px] py-3 placeholder-blueGray-300 text-blueGray-600   bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring "/>
      <City city={city} />
     </div>
    </div>
  );
}

export default App;
