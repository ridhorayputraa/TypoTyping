import React from 'react';

import {faker} from '@faker-js/faker';

const words = faker.random.words(10);

// words adalah type words yang berbentuk string 
const GenerateWords = ({words}:{words:string}) =>{
  return (
  <div className="text-4xl text-slate-500 text-center">
     {words}     
    </div>
  )
}

function App() {
  return (
<GenerateWords words={words}/>
  );
}

export default App;
