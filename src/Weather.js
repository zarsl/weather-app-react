import Loader from "react-loader-spinner";

export default function Weather(props) {
  //   function handleResponse(response) {
  //     alert(`The weather in ${props.city} is ${response.data.main.temp}`);
  //   }

  //   let apiKey = "4fb8f394cc5f2d439df6249cf258d6a4";
  //   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  //   axios.get(apiUrl).then(handleResponse);
  return (
    <Loader
      type="Puff"
      color="#00BFFF"
      height={100}
      width={100}
      timeout={5000} //3 secs
    />
  );
}
