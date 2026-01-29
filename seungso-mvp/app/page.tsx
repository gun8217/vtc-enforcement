"use client";

import Button from "@/components/common/Button";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import styles from "./page.module.scss";
config.autoAddCss = false;

export default function HomePage() {
  const { pageMain, cardList, item1, item2, item3, txtBox } = styles;
  return (
    <main className={pageMain}>
      <strong>
        소액 채권자의 <span>합리적 선택</span>을 돕는 <span>나침반</span>
      </strong>
      <ul className={cardList}>
        <li className={item1}>
          <b>판결문 데이터화</b>
          <ul>
            <li>종이 판결문 등록</li>
            <li>소멸시효·집행 가능성 자동 분석</li>
          </ul>
        </li>
        <li className={item2}>
          <b>유사 사례 찾기</b>
          <ul>
            <li>등록된 채권 데이터 비교</li>
            <li>다른 채권자의 회수 절차 확인</li>
          </ul>
        </li>
        <li className={item3}>
          <b>채권 지도 만들기</b>
          <ul>
            <li>정보 공유로 은닉 자산 탐색</li>
            <li>데이터로 회수 확률 강화</li>
          </ul>
        </li>
      </ul>

      <div className={txtBox}>
        <p>승소 판결문! 실질적인 가치로 바꾸는 플랫폼</p>
        <Button
          label="내 자산 가치 알아보기"
          onClick={() => alert("시작 버튼 클릭!")}
        />
      </div>
      <footer>본 사이트 이미지는 AI로 생성되었습니다.</footer>
    </main>
  );
}
