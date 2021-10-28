import React from 'react';
import { getExhibitions } from '../../services/exhibitionService';

const MainPage = () => {

  return (
    <div>
      this is main page
      <button onClick={getExhibitions}>ds</button>
    </div>
      
  )
}

export default MainPage;