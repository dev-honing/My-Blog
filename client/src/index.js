// index.js

import React from 'react'; // 리액트 모듈 import
import ReactDOM from 'react-dom'; // 리액트DOM 모듈 import
import App from './App'; // App.js에 작성한 App 컴포넌트 import

ReactDOM.render( // 리액트 애플리케이션을 DOM에 렌더링
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('body') 
);
