import { Container } from "@mui/system";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import styles from "./FacilityDetail.module.css";
import Iframe from "react-iframe";
import ModalPage from "../../../Modal/ModalPage";
import bookmark from "../../../img/bookmark.PNG";
import shareIcon from "../../../img/shareIcon.PNG";
import freegymImg from "../../../img/freegymImg.jpg";

const FacilityDetail = () => {
  // const params=useNavigate()
  const info = useLocation();
  // console.log(info.state);
  const decode = decodeURI(info?.search);
  // console.log(decode);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const goCommunity = () => {
    navigate("/community");
  };
  const openPopup = () => {
    navigate("/booking_popup", { state: info.state });
    setIsOpen(true);
  };
  return (
    <>
      <Header />
      <Container>
        <div className={styles.main_container}>
          <div>
            <div className={styles.title_con}>
              <h1>{info.state.name}</h1>
              <div className={styles.fewIcons}>
                <img src={bookmark} alt="" srcset="" />
              </div>
            </div>
          </div>
          <div className={styles.imgAndOthers}>
            <div className={styles.imgContainer}>
              <img src={freegymImg} alt="" />
            </div>
            <div className={styles.info_con}>
              <div className={styles.text_con}>
                <h2>{info.state.location}</h2>
                <h3>{info.state.tel}</h3>
                <h3>⭐⭐⭐⭐⭐ 5.0</h3>
              </div>
              <div className={styles.share_con}>
                <label htmlFor="">공유하기</label>
                <img
                  className={styles.shareIcons}
                  src={shareIcon}
                  alt=""
                  srcset=""
                />
              </div>
              <div className={styles.majorBtns}>
                <button onClick={goCommunity}>커뮤니티</button>
                <button onClick={openPopup}>예약하기</button>
              </div>
            </div>
          </div>
          {/* 시설정보 */}
          <div className={styles.explainCon}>
            <div className={styles.detailIExplain}>
            <h3>시설정보</h3>
            </div>
            <div className={styles.reviewCon}>
            <h3>후기</h3>
            </div>
            <span>
              임시데이터 카카오 검색 API를 통해서 헬스장 설명 작성할 예정
            </span>
            <Iframe
              url="https://youtube.com/embed/uz6TUGCXe7c"
              width="500px"
              height="400px"
              id=""
              className=""
              display="block"
              position="relative"
            />
          </div>
        </div>
      </Container>
    </>
  );
};

export default FacilityDetail;
