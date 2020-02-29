import React from 'react';
import Photo from './Photo'
import Title from './Title';
import Wrapper from './Wrapper'
import profile from './profile.jpg'

function App() {
  return (
    <div>
      <Wrapper />
      <Photo nadia={profile} />
      <Title/>
    </div>
  );
}

export default App;
