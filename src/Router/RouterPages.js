import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// Route안쪽에 Route를 넣는 이유는 페이지에 접근 권한이 생겼을때만 Routing을 할수 있게 하려구
const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPages;