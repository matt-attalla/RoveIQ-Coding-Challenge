import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../../store';
import Location from './Location/Location';

function Locations() {
  const locations = useSelector((state: RootState) => state.directory.locations)
  const loadingStatus = useSelector((state: RootState) => state.directory.status)

  const renderLoadingLocations = () => {
    return (
      <h2>
        Locations Loading...
      </h2>
    )
  }

  const renderLocations = () => {
    return (
      <>
        <h2>
          Locations
        </h2>
        {
          locations.map( (location, key) => <Location location={location} key={key}/>)
        } 
      </>
    )
  }

  return (
    <>
      {loadingStatus !== "Pending" ? renderLocations() : renderLoadingLocations()}
    </>
  )
}

export default Locations