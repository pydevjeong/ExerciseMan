import React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027': '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
  borderRadius:'0px'
}));

const Item2 = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#6867AC50',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
  borderRadius:'0px'
}));

const Title=styled(Paper)(({theme})=>({
  backgroundColor: theme.palette.mode === 'dark' ?  '#fff':'#6867AC50',
  ...theme.typography.body2,
  padding:theme.spacing(1),
  textAlign:'center',
  color:'black',
  display:'flex',
  justifyContent:'space-around',
  borderRadius:'0px'
}))

export default function CommunityStyle(props) {
  // 여기에서 notice,Q and A, meetUp, userBoard 정보를 db에서 받아서 각각
  // 뿌려줘야하는데 방법이??
  // Title은 일단 똑같으므로 Item쪽에서 작업해야함
  // 1. 다 따로따로 컴포넌트를 분리시켜서 한다
  // const [noticeInfo,setNoticeInfo]=useState({})
  // useEffect(()=>{
  //   setNoticeInfo(notice)
  // },[])
  // const {number,content,writer,writingDate,hits}=noticeInfo
  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={1}>
        <Title>
          <span>순번</span>
          <span>|</span>
          <span>내용</span>
          <span>|</span>
          <span>글쓴이</span>
          <span>|</span>
          <span>작성일</span>
          <span>|</span>
          <span>조회수</span>
        </Title>
        {
          
        }
        <Item>Item 1</Item>
        <Item2>Item 2</Item2>
      </Stack>
    </Box>
  );
}
