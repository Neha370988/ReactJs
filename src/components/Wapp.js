import React, { useEffect, useState } from "react";
import "./css/style.css";


const Wapp = () => {

    const [city,setCity] = useState(null);
    const [search,setSearch] = useState(null);

    useEffect( () =>{
        const fetchApi = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=b1fb91a0f456e84a7667c0a94073fc9e`
            const response = await fetch(url);
            //console.log(response);
            const resJson = await response.json();
            //console.log(resJson);
            setCity(resJson.main);
        }
         fetchApi();
    },[search] )

    return(
        <>

            <div className = "rectangle">
                <div className = "inputData">
                       <input 
                        type = "search"
                        value = {search}
                        className = "inputField"
                        onChange = { (event) => {setSearch(event.target.value) } }  />
             
                </div>

    {search ? (
        <>     
            
    {!city ? (
        <p className ="errorMsg" > Opps!No Data Found </p>
    )   : (
        <div>
        <div className = "info">
            <h2 className = "location" >
            <i className="fas fa-street-view"> </i>{search}
            </h2>
            <h1 className="temp">
            {city.temp}°Cel
            </h1>
            <h3 className="tempmin_max">Min : {city.temp_min}°Cel | {city.temp_max}°Cel </h3>

        </div>
        <div className='wave'>
									<div className='wave-one'></div>
								</div>
							</div>
						)}{" "}
					</>
				) : (
					<p className='errorMsg'> Type City to check Weather </p>
				)}
			</div>
		</>
	);
};
        
export default Wapp;