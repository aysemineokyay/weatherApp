const WeatherCard = ({ item }) => {
  const imgUrl =
    "https://openweathermap.org/img/wn/" + item.weather[0].icon + ".png";
  return (
    <div className="flex flex-col rounded-lg w-80 h-72 box-border items-center content-center justify-center rounded bg-[url('/src/assets/mountain.jpg')] bg-cover bg-center text-white">
      <div>
        <span>{new Date(item.dt * 1000).toDateString()}</span>
      </div>
      <div className="flex gap-2">
        <span className="font-bold">{item.name}</span>
        <span className="bg-yellow-500 w-7 h-5 rounded-lg font-bold text-center text-xs">
          {item.sys.country}
        </span>
      </div>
      {item.weather.map((x, index) => (
        <div className="flex flex-col items-center content-center" key={index}>
          <img src={imgUrl} />
          <span className="capitalize mb-2">{x.description}</span>
        </div>
      ))}
      <div className="p-2 bg-white/25 rounded-md flex gap-4 mt-5">
        <span className="flex flex-col items-center">
          Current Temp.<span className="font-bold">{item.main.temp} C</span>
        </span>
        <span className="flex flex-col items-center">
          Feels Like <span className="font-bold">{item.main.feels_like} C</span>
        </span>
        <span className="flex flex-col items-center">
          Humidity<span className="font-bold">{item.main.humidity} %</span>
        </span>{" "}
      </div>
    </div>
  );
};

export default WeatherCard;
