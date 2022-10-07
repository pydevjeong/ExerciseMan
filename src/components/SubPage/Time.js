import { useState } from "react";
import "./Time.css";

const Time = () => {
  const [time, setTime] = useState("");
  const [retime, setRetime] = useState("1:00");
  const [count, setCount] = useState(1);
  const [up, setUp] = useState("v50_200");

  const clickRe = () => {
    setTime("");
    setUp("v50_200");
  };

  const clickRetime1 = () => {
    setTime("v50_70");
    setUp("v50_201");
    setRetime("1:00");
  };

  const clickRetime2 = () => {
    setTime("v50_70");
    setUp("v50_201");
    setRetime("2:00");
  };

  const clickRetime3 = () => {
    setTime("v50_70");
    setUp("v50_201");
    setRetime("3:00");
  };

  const clickRetime4 = () => {
    setTime("v50_70");
    setUp("v50_201");
    setRetime("4:00");
  };

  const clickRetime5 = () => {
    setTime("v50_70");
    setUp("v50_201");
    setRetime("5:00");
  };

  const clickRetime6 = () => {
    setTime("v50_70");
    setUp("v50_201");
    setRetime("6:00");
  };

  const clickRetime7 = () => {
    setTime("v50_70");
    setUp("v50_201");
    setRetime("7:00");
  };

  const clickRetime8 = () => {
    setTime("v50_70");
    setUp("v50_201");
    setRetime("8:00");
  };

  const countUp = () => {
    if (count !== 10) {
      setCount(count + 1);
    }
  };

  const countDown = () => {
    if (count !== 1) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <div className="v50_115" onClick={clickRe}>
        오후 {retime}
      </div>

      <div className={time}>
        <span className="v50_80">오후</span>
        <div className="v50_81" onClick={clickRetime1}>
          1:00
        </div>
        <div className="v50_87" onClick={clickRetime2}>
          2:00
        </div>
        <div className="v50_88" onClick={clickRetime3}>
          3:00
        </div>
        <div className="v50_89" onClick={clickRetime4}>
          4:00
        </div>
        <div className="v50_90" onClick={clickRetime5}>
          5:00
        </div>
        <div className="v50_91" onClick={clickRetime6}>
          6:00
        </div>
        <div className="v50_92" onClick={clickRetime7}>
          7:00
        </div>
        <div className="v50_93" onClick={clickRetime8}>
          8:00
        </div>
        <div className="v50_99"></div>
      </div>

      <div className={up}>
        <span className="v50_118">{count}명</span>
        <div className="v50_121" onClick={countDown}></div>
        <div className="v50_123">{count}</div>
        <div className="v50_122" onClick={countUp}></div>

        <div className="v50_140"></div>
        <div className="v50_149">예약하기</div>
        <div className="v50_153">취소</div>
      </div>
    </div>
  );
};

export default Time;
