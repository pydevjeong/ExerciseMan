import axios from "axios";


const KakaoSearch = axios.create({
  baseURL: 'https://dapi.kakao.com',
  headers: {
    Authorization: `KakaoAK ${process.env.REACT_APP_KAKAO_SEARCH}`,
  },
});

export const webSearch=(params)=>{
  return KakaoSearch.get('/v2/search/web',{ params })
}

export const videoSearch=(params)=>{
  return KakaoSearch.get('/v2/search/vclip',{params})
}

export const imageSearch=(params)=>{
  return KakaoSearch.get('/v2/search/image',{params})
}

export const blogSearch=(params)=>{
  return KakaoSearch.get('/v2/search/image',{params})
}

