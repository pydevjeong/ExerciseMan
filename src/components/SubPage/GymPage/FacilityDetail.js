import { Container } from "@mui/system";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import styles from "./FacilityDetail.module.css";
import Iframe from "react-iframe";
import bookmark from "../../../img/bookmark.PNG";
import shareIcon from "../../../img/shareIcon.PNG";
import freegymImg from "../../../img/freegymImg.jpg";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Modal } from "@mui/material";
import BookingPopup from "../BookingPopup";

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
  /*팝업페이지 테스트해봤는데 잘 안됨*/
  const openPopupTest = (url1) => {
    var url = url1;
    var title = "popup";
    var status =
      "toolbar=no,scrollbars=no,resizable=no,status=no,menubar=no,width=500, height=700, top=0,left=0";

    window.open(url, title, status);
  };
  /*모달창 테스트*/
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const closeModal = () => setOpen(false);
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "500px",
    height: "700px",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
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
                <button onClick={handleOpen}>예약하기</button>
                {/*모달창 실험중*/}
                <Modal
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="modal-modal-title"
                  aria-describedby="modal-modal-description"
                >
                  <Box sx={style}>
                    <BookingPopup />
                    <Button className="modalClosebtn" onClick={closeModal}>
                      닫기
                    </Button>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
          {/* 시설정보 */}
          <div className={styles.explainCon}>
            <div className={styles.detailIExplain}>
              <h3>시설정보</h3>
              {/* 이부분은 검색 api, 카카오 지도 api를 통해서 헬스장 정보를 불러와야함 */}
              <div className={styles.videoAndText}>
                <p>
                  고객님이 운동하는 곳은 오기 편해야 하는 곳입니다. 카페 같은
                  분위기 & 부족함 없는 머신 셋팅 운동하는날입니다!
                </p>
                <Iframe
                  url="https://youtube.com/embed/uz6TUGCXe7c"
                  width="100%"
                  height="400px"
                  id=""
                  className=""
                  display="block"
                  position="relative"
                />
              </div>

              <div className={styles.facilityEx}>
                <p>
                  '대한민국 휘트니스의 최고를 말하다.' NO.1휘트니스
                  스포짐휘트니스 입니다🎉 2006년을 시작으로 16년간 꾸준히
                  고객님들의 사랑을 받아 왔습니다. 누적회원 90만 명을 돌파
                  하였으며, 현재도 10만 명의 회원님들이 여러 지점에서 이용해
                  주고 계십니다. '스포짐 종로에 들어오다.' 종로에
                  스포짐휘트니스가 입점했습니다✨ 대한민국 피트니스의 최고급
                  퀄리티를 경험 하실 수 있습니다. ✅ 종목 헬스 / P.T / G.X /
                  요가 / 필라테스 줌바 / 스트레칭 / 타바타
                </p>
              </div>

              <div className={styles.operationTime}>
                <p>
                  운영시간 [평 일] 06:00 ~ 23:00 [토요일] 10:00 ~ 20:00 [휴관일]
                  공휴일
                </p>
              </div>

              <div className={styles.fewService}>
                <p>
                  부가서비스 유료 🔐 락커 (월 이용료: 10,000원 / 12개월 결제 시
                  월 5,000원) 무료 👕 운동복 / 수건 / 양말 / 🚿 샴푸 / 바디워시
                  🅿️ 주차 2시간 가능
                </p>
              </div>

              <div className={styles.mapCon}>{/* 지도 */}</div>
            </div>
            <div className={styles.reviewCon}>
              <h3>후기</h3>
              <div className={styles.starReview}>
                <h2>Total: 5.0</h2>
                <h3>⭐⭐⭐⭐⭐</h3>
                <p>⭐⭐⭐⭐⭐ 5.0</p>
                <p>⭐⭐⭐⭐⭐ 5.0</p>
                <p>⭐⭐⭐⭐⭐ 5.0</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default FacilityDetail;
