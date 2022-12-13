import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { getCookieToken, removeCookieToken } from '../../../storage/Cookie';



function Logout(){
    // store에 저장된 Access Token 정보를 받아 온다
    const {accessToken}  = useSelector(state => state)

    const navigate = useNavigate();
    
    // Cookie에 저장된 Refresh Token 정보를 받아 온다
    const refreshToken = getCookieToken();
    async function logout() {
        removeCookieToken();
        alert("로그 아웃 되었습니다.")
        return navigate('/');
    }
    // 해당 컴포넌트가 요청된 후 한 번만 실행되면 되기 때문에 useEffect 훅을 사용
    useEffect( () => {
        logout();
    }, [])

    return (
        <>
            <Link to="/" />
        </>
    );
}

export default Logout