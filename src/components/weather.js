import React,{useState} from 'react';
import $ from 'jquery';
import Display from './display';
import Bg from './../bg.jpg';
export default function Weather(){
    const [weather_data,setWeatherData]=useState([]);
    const [form,setFormData]=useState({
        city:"",
    })
    const APIKEY = "5176cf32a79dd54273d1c21ec4a62d27";
    async function fetchWeatherData(e){
        e.preventDefault();
        if(form.city==""){
            $('.feedback-msg').html('Enter City Name');
            $('.feedback-msg').addClass('text-danger')
        }else{
            const data=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${form.city}&APPID=${APIKEY}`)
            .then((res)=>res.json())
            .then((data)=>data);
            setWeatherData({data:data});
            if(data.cod==404){
                $('.feedback-msg').html('Enter Valid City Name');
                $('.feedback-msg').addClass('text-danger');
            }else{
                $('.feedback-msg').html('Fetched Result Successfully')
                $('.feedback-msg').addClass('text-success');
            }
            
        }
        setTimeout(function(){
            $('.feedback-msg').html('');
            $('.feedback-msg').removeClass('text-danger');
            $('.feedback-msg').removeClass('text-success');
        },1000);
    }
    function handleChange(e){
        const name=e.target.name;
        const value=e.target.value;
        console.log(e.keyCode);
        if(name=="city")
        setFormData({...form,city:value});
    }
    return(
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                    <form>
                        <div className="text app_name">
                            <h4 className="text-center">Weather App</h4>
                        </div>
                        <div className="feedback">
                            <p className="text feedback-msg"></p>
                        </div>
                        <div className="input-group">
                            <input className="form-control" type="text" defaultValue="" name="city" id="city" placeholder="Enter City" onChange={(e)=>handleChange(e)}/>
                            <button className="btn btn-primary" id="searchBtn" onClick={(e)=>fetchWeatherData(e)} style={{borderTopLeftRadius:0,borderBottomLeftRadius:0}}><span className="fa fa-search"></span></button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-4"></div>
            </div>
            <div className="row">
                <div className="col-sm-4"></div>
                <div className="col-sm-4">
                {weather_data.data!=undefined&&weather_data.data.cod!=404?(<Display data={weather_data.data}/>):<p className="text text-center result">Your searh result will appear here!</p>}
                </div>
            
            </div>
            
           
        </div>
    )
}