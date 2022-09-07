import React from 'react'
import { Button } from 'react-bootstrap'
import { updateSelectedLocation } from '../../../features/DirectorySlice'
import { useDispatch } from 'react-redux'

function Location({location} :any) {
  
  const dispatch = useDispatch();

  return (
    <Button onClick={() => {dispatch(updateSelectedLocation(location))}} className="d-block" variant="outline-dark" size="lg">{location.name}</Button>
  )
}

export default Location