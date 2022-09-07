import React, { useEffect } from 'react';
import Locations from './components/Locations/Locations';
import SelectedLocation from './components/SelectedLocation/SelectedLocation';
import Advertisements from './components/Advertisements/Advertisements';
import './App.css';
import { useDispatch } from 'react-redux';
import { getDirectoryData } from './features/DirectorySlice';
import { AppDispatch } from './store';

function App() {

  const dispatch = useDispatch<AppDispatch>();

  useEffect( () => {
    dispatch(getDirectoryData())
  }, [dispatch])


  return (
    <div className="row app-container">
      <div className="col-lg-4 location-container">
        <Locations/>
      </div>
      <div className="col-lg-4">
        <SelectedLocation/>
      </div>
      <div className="col-lg-4">
        <Advertisements/>
      </div>
    </div>
  );
}

export default App;
