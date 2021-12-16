export default function Display(props){
    const {data}=props;
    if(data.cod!=404)
    return(
        <div className="weather-data">
            <div className="location">
                <p className="text text-centere">Result for {data.name} ({data.sys.country})</p>
            </div>
            <div className="">
            <div className="row">
                    <div className="col-sm-6 mr-auto">
                        <small>Sunrise</small>
                        <p>{new Date(data.sys.sunrise*1000).toLocaleTimeString()}</p>
                    </div>
                    <div className="col-sm-6 mr-auto">
                        <small>Sunset</small>
                        <p>{new Date(data.sys.sunset*1000).toLocaleTimeString()}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mr-auto">
                        <small>Temperature</small>
                        <p>{Math.floor(data.main.temp-273.15)}<sup>o</sup>C</p>
                    </div>
                    <div className="col-sm-6 mr-auto">
                        <small>Humidity</small>
                        <p>{data.main.humidity}%</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 mr-auto">
                        <small>Pressure</small>
                        <p>{Math.floor(data.main.pressure)}hPa</p>
                    </div>
                    <div className="col-sm-6 mr-auto">
                        <small>Wind Speed</small>
                        <p>{Math.floor(data.wind.speed*18/5)}km/h</p>
                    </div>
                </div>
            </div>
        </div>
    );
    else{
        return(null);
    }
}