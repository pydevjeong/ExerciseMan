import React from "react";
import styles from "./ContactUs.module.css";
import img1 from "../../img/Profile1.PNG";
import img2 from "../../img/Profile2.PNG";
import img3 from "../../img/Profile3.PNG";
import img4 from "../../img/Profile4.PNG";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>CONTACT US</div>
      <div className={styles.item}>
        <img className={styles.img} alt="" src={img4} />
        <div>
          <div className={styles.info}>Project Manager</div>
          <div className={styles.name}>남정훈</div>
          <div className={styles.email}>이메일</div>
        </div>
      </div>
      <div className={styles.item}>
        <img className={styles.img} alt="" src={img2} />
        <div>
          <div className={styles.info}>Back-end</div>
          <div className={styles.name}>김유성</div>
          <div className={styles.email}>이메일</div>
        </div>
      </div>
      <div className={styles.item}>
        <img className={styles.img} alt="" src={img3} />
        <div>
          <div className={styles.info}>Front-end</div>
          <div className={styles.name}>신성철</div>
          <div className={styles.email}>tlstjdcjf980809@gmail.com</div>
        </div>
      </div>
      <div className={styles.item}>
        <img className={styles.img} alt="" src={img1} />
        <div>
          <div className={styles.info}>Design</div>
          <div className={styles.name}>고진혁</div>
          <div className={styles.email}>이메일</div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
