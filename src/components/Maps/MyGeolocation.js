import useGeolocation from "react-hook-geolocation";

const MyGeolocation = () => {
  const geolocation = useGeolocation()

  console.log(geolocation)

  return(<div><p></p></div>)
};

export default MyGeolocation