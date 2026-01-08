import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section id="hero">
        <div>
          <span>MVP • 실험 프레임워크</span>
          <h1>소액 채권자의 합리적 선택을 돕는 서비스</h1>
          <p>
            판결 이후 집행 단계의 비효율을 줄이고, 권리 실현 가능성을 높이는
            디지털 집행 지원 플랫폼
            <span>
              법률 판단을 대체하지 않고, 채권자의 집행 의사결정을 돕는 지표와
              전문가 연결을 제공
            </span>
          </p>
          <div>
            {/* 외부 사이트는 <a> 태그 유지 */}
            <a
              href="https://github.com/gun8217/MVP/tree/main/SocialVenture"
              target="_blank"
              rel="noreferrer"
            >
              저장소
            </a>

            {/* 내부 해시 링크(Anchor) 및 페이지 이동은 Link 사용 */}
            <Link href="#overview">개요</Link>
            <Link href="#mvp">MVP 범위</Link>
            <Link href="#impact">사회적 가치</Link>
            <Link href="#market">시장성</Link>
            <Link href="#roadmap">로드맵</Link>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview">
        <div>
          <h2>개요</h2>
          <p>
            본 프로젝트는 공공 정책을 <b>환경</b>으로, 사회적 행위자를
            <b> 학습 에이전트</b>로 모델링합니다. 다양한 정책 매개변수 하에서
            행위자들이 어떻게 적응하고, 회피하고, 대체하는지 시뮬레이션함으로써,
            이 프레임워크는 2차 및 3차 효과에 대한 탐색적 분석을 가능하게
            합니다.
          </p>
        </div>
      </section>

      {/* MVP Range */}
      <section id="mvp">
        <div>
          <h2>MVP 범위</h2>
          <ul>
            <li>추상적인 매개변수를 사용하는 간소화된 정책 환경</li>
            <li>단일 또는 제한된 에이전트 유형</li>
            <li>적응 및 회피 전략 학습</li>
            <li>다양한 정책 시나리오에 걸친 비교 실험</li>
          </ul>
          <p>
            범위 외 항목: 실제 상황 예측, 개인 데이터 처리 및 자동화된 정책 권고
          </p>
        </div>
      </section>

      {/* Social Impact */}
      <section id="impact">
        <div>
          <h2>사회적 가치</h2>
          <ul>
            <li>정책 실패로 인한 사회적 혼란 예방</li>
            <li>범죄 악용 가능성 사전 차단</li>
            <li>시민 안전 및 사회적 신뢰 강화</li>
          </ul>
        </div>
      </section>

      {/* Marketability */}
      <section id="market">
        <div>
          <h2>시장성</h2>
          <p>본 프로젝트의 주요 수요처:</p>
          <ul>
            <li>국회 입법조사처: 법안 검토 보조</li>
            <li>지자체 정책연구원: 지역 정책 시뮬레이션</li>
            <li>시민단체·학계: 정책 대안 연구</li>
            <li>국제기구(OECD, UN): 글로벌 정책 검증 도구</li>
          </ul>
        </div>
      </section>

      {/* Roadmap */}
      <section id="roadmap">
        <div>
          <h2>로드맵</h2>
          <ol>
            <li>
              <b>MVP (2025)</b>: 범용 시뮬레이션 구조 검증
            </li>
            <li>
              <b>Pilot (2026)</b>: 지자체·학계 협력 프로젝트 진행
            </li>
            <li>
              <b>SaaS Launch (2027)</b>: 정책 연구기관 대상 서비스 출시
            </li>
            <li>
              <b>Global Expansion (2028 이후)</b>: 국제기구 협력 및 글로벌 확장
            </li>
          </ol>
        </div>
      </section>

      <footer>
        <div>
          <p>
            면책 조항: 이 페이지는 MVP 단계의 실험적 프레임워크를 소개합니다.
            이는 실제 운영 시스템, 예측 엔진 또는 정책 결정 도구가 아닙니다.
          </p>
        </div>
      </footer>
    </main>
  );
}
