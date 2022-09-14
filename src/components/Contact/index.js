import React from 'react'
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"
import marker from '../../imgs/marker.svg';
import mapStyles from "./mapStyles";
import ContactForm  from '../ContactForm';




function Contact() {

   function Home() {
    const {isLoaded} = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    })
  if (!isLoaded) return <div>is Loading...</div>;
    return <Map />
  }

  function Map() {
    const Center = {lat: 43.6, lng: -79.7};

    return(
      <GoogleMap options={{ styles: mapStyles, disableDefaultUI: true, }} zoom={9} center={Center} mapContainerClassName="map-container">
      <Marker icon={{url: marker, scaledSize: new window.google.maps.Size(50,50),}} title='Matthew Bachraty' position={{lat: 43.6, lng: -79.7}}  />
      </GoogleMap>
    )
  }


  return (
    <div id='contact' className='containerFour'>
       <h1 className='header_titles'>Contact</h1>
       <div className='contact_body'>
        <div className='contact_left'>
            <p>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
            <ContactForm />
            
        </div>
        <div className='contact_right'>
        <Home />
        </div> 
       </div>
    </div>  
    // onSubmit={this.handleSubmit.bind(this)} method="POST"

  )
}

export default Contact