import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WeatherCard from "./components/WeatherCard";

function App() {
  const APIKEY = "6945e0b8df8b93ce17c959f72f485869";
  const units = "metric";
  const cityInitial = "Japan";
  const [cityList, setCityList] = useState([cityInitial]);
  const [weathers, setWeathers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      for (const city of cityList) {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?q=" +
            city +
            "&units=" +
            units +
            "&appid=" +
            APIKEY
        );
        let data = await response.json();
        setWeathers([...weathers, data]);
      }
    };
    fetchData();
  }, [cityList]);
  return (
    <>
      <Navbar />
      <Hero cityList={cityList} setCityList={setCityList} />
      <div className="m-5">
        <div className="flex flex-wrap justify-center align-center items-center">
          <ul className="flex flex-wrap justify-center align-center items-center gap-2">
            {weathers.map((item, index) => (
              <li key={index}>
                <WeatherCard item={item} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
