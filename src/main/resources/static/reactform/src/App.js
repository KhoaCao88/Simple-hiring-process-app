import React from 'react';
import logo from './logo.svg';
import './App.css';
import SubmitApplicationScene from './scenes/SubmitApplicationScene';
import URLUtil from './services/URLUtil';
import GMReviewApplication from './scenes/GMReviewApplication';
import FindCandidate from './scenes/FindCandidate';

function App() {
  const utils = new URLUtil();
  const params = utils.getParameters(window.location.search);
  console.log("params: ", params);

  switch(params.taskName){
    case 'SubmitApplication':
        return (
          <SubmitApplicationScene taskId={params.taskId} backUrl={params.callbackUrl}/>
        );
    case 'ReviewApplication':
        return (
          <GMReviewApplication taskId={params.taskId} backUrl={params.callbackUrl}/>
        );
    case 'FindCandidate':
        return (
          <FindCandidate taskId={params.taskId} backUrl={params.callbackUrl}/>
        )
    default:
      return(
        <div></div>
      );
  }
}

export default App;
