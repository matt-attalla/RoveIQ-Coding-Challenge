import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Advertisements.css';

function Advertisements() {

  const advertisements = useSelector((state: RootState) => state.directory.advertisements)
  const loadingStatus = useSelector((state: RootState) => state.directory.status)

  const renderLoadingAdvertisements = () => {
    return (
      <h2>
        Advertisements Loading...
      </h2>
    )
  }

  const renderVideo = (advertisementUrl :string) => {
      return (
        <div className="video-container"> 
          <video controls> 
            <source src={advertisementUrl} type="video/mp4"/> 
          </video> 
        </div>
      ) 
  }

  const renderImage = (advertisementUrl :string) => {
    return (
      <img className="d-block w-100 img-fluid directory-image" src={advertisementUrl} alt="Advertisment"/>
    )
  }

  const renderAdvertisements = () => {
    return (
      <Carousel controls={false}>
        { advertisements.map( (advertisementUrl, i) => (
  
          <Carousel.Item interval={10000} key={i}>
              
              {
                advertisementUrl.includes('.mp4') ?  renderVideo(advertisementUrl) : renderImage(advertisementUrl)
               
              }
  
          </Carousel.Item>
         ))}
      </Carousel>
    )
  }

  return (
    <>
      {loadingStatus !== "Pending" ? renderAdvertisements() : renderLoadingAdvertisements()}
    </>
  )
}

export default Advertisements