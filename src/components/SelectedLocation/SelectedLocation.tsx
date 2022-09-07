import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store';
import './SelectedLocation.css'

function SelectedLocation() {
  const selectedLocation = useSelector((state: RootState) => state.directory.selectedLocation)
  const isNoLocationSelected = selectedLocation.name === "" ? true : false

  const renderSelectedLocation = () => {
    return (
      <div className="selected_location">
        <div className="selected_location__banner_container">
          <img src={selectedLocation.banner_img} alt={`${selectedLocation.name} banner image`} className="img-fluid"/>
        </div>

        <div className="d-flex flex-wrap align-items-center text-center selected_location__logo-container">
          <div className="col-lg-6">
            <img src={selectedLocation.logo_img} alt={`${selectedLocation.name} logo`} className="img-fluid"/>
          </div>
          <div className="col-lg-6">
            <b>{selectedLocation.name}</b>
          </div>
        </div>

        <p className="selected_location__description">
          {selectedLocation.description}
        </p>

        <p className="selected_location__address">
          Address: {selectedLocation.address1} {selectedLocation.city} {selectedLocation.state} {selectedLocation.zip}
        </p>

        <p className="selected_location__hours">
          Hours: {selectedLocation.hours}
        </p>
      </div>
    )
  }

  const renderNoSelectedLocation = () => {
    return (
      <>
      <h2>
        No Location Selected
      </h2>
      <p>
        Please click on one of the buttons on the left to see more details about that location.
      </p>
      </>
    )
  }

  return (
    <>
    { isNoLocationSelected === true ? renderNoSelectedLocation() : renderSelectedLocation() } 
    </>
  )
}

export default SelectedLocation
