import { Box, Container } from "@mui/system";
import React,{useState} from "react";
import Notice from "../SubPage/Notice";
import Header from '../Layout/Header/Header'
import CommunityStyle from "./CommunityStyle";

const WholeCommunity = () => {
  const [notice,setNotice]=useState({
    number:'1',
    content:'임시내용입니다',
    writer:"작성자",
    writingDate:'2022-11-02',
    hits:'11'
  })
  const [meetUp,setMeetUp]=useState({
    number:'2',
    content:'모임내용입니다',
    writer:"모임작성자",
    writingDate:'2022-11-02',
    hits:'1'
  })
  const [QandA,setQandA]=useState({
    number:'3',
    content:'QAndA입니다',
    writer:"큐앤에이",
    writingDate:'2022-11-02',
    hits:'121'
  })
  const [userBoard,setUserBoard]=useState({
    number:'4',
    content:'게시판입니다',
    writer:"스타벅스",
    writingDate:'2022-11-02',
    hits:'45'
  })
  return (
    <Container>
      <Header/>
      <Box>
      <h1>공지사항</h1>
      <CommunityStyle notice={notice}/>
      </Box>
      <Box>
      <h1>모임</h1>
      <CommunityStyle/>
      </Box>
      <Box>
      <h1>Q & A</h1>
      <CommunityStyle />
      </Box>
      <Box>
      <h1>이용자 게시판</h1>
      <CommunityStyle />
      </Box>
    </Container>
  );
};

export default WholeCommunity;
