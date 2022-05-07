import React from 'react';
import Navigation from "../components/Navigation";

const MainTemplate = ({children}) => {
  return (
      <div className='App-page-wrapper'>
        <Navigation />
        <div className='default-page'>
            {children}
        </div>
      </div>
  );
}

export default MainTemplate;
