import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubmitApplicationScene from './scenes/SubmitApplicationScene';
import URLUtil from './services/URLUtil';

function App() {
  const utils = new URLUtil();
  const params = utils.getParameters(window.location.search);
  console.log("params: ", params);

  return (
    (params.taskName === 'SubmitApplication')?
    (
      <SubmitApplicationScene taskId={params.taskId} backUrl={params.callbackUrl}/>
    ):(
      <div/>
    )
  );
}

export default App;
