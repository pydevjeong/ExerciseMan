import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from '../components/Auth/Login/Login';
import MapPage from '../components/Maps/MapPage';
import Register from '../components/Register/Register'
// Route안쪽에 Route를 넣는 이유는 페이지에 접근 권한이 생겼을때만 Routing을 할수 있게 하려구
/* <Route element={<PulicLayout />}>
  <Route path="/" element={<LoginPage />} />
</Route>
<Route element={<AuthLayout />}>
  <Route path="/auth" element={<AuthPage />} />
  <Route path="/auth2" element={<AuthPage2 />} />
</Route> */
const RouterPages = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/map' element={<MapPage/>}/> */}
      </Routes>
    </BrowserRouter>
  );
};

export default RouterPages;