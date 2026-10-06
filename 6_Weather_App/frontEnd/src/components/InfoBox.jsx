//InfoBox display one weather result as a card
//Props:
// Weather-> the tidy object returned by fetch weather

function InfoBox({weather}){
    //Build the icon image address from the icon code
    const iconUrl=`https://openweathermap.org/img/wn/${weather.icon}@2x.png`;

    //Derived Value: pick a color theme from the data instread of storing it in state
    // Rain-like conditions come first, then cold temperatures, otherwise "Warm"
    let theme="warm";
    if(["Rain", "Drizzle", "Thunderstorm"].includes(weather.condition)){
        theme="rainy";
    } else if(weather.temp<15){
        theme="cold";
    }

    return(
        //We combine two class name: "info-box" plus the them("warm", "cold", or "rainy")
        <article className={`info-box ${theme}`}>
            <h2>
                {weather.city}, {weather.country}
            </h2>

            <div className="summary">
                <img src={iconUrl} alt="" width="100" height="100"/>
                <div>
                    <p className="temp">{Math.round(weather.temp)}°C</p>
                    <p className="description">{weather.description}</p>
                </div>
            </div>

            <dl className="details">
                <div>
                    <dt>Feels like</dt>
                    <dd>{Math.round(weather.feelsLike)}°C</dd>
                </div>
                <div>
                    <dt>Humidity</dt>
                    <dd>{weather.humidity}%</dd>
                </div>
                <div>
                    <dt>Wind</dt>
                    <dd>{weather.windSpeed} m/s</dd>
                </div>
            </dl>
        </article>
    );
}

export default InfoBox;