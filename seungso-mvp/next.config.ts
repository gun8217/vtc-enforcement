import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  // 1. 빌드 결과물 설정
  output: isProd ? "export" : undefined,

  // 2. 경로 설정: 개발 환경(isProd=false)일 때는 아예 값이 없거나 "/"이어야 합니다.
  basePath: isProd ? "/vtc-enforcement" : "",

  // 3. 자산 경로: 개발 환경에서 assetPrefix가 있으면 HMR 소켓 연결 주소가 틀어질 수 있습니다.
  assetPrefix: isProd ? "/vtc-enforcement/" : undefined,

  // 4. (추가 권장) Sass 컴파일 옵션
  sassOptions: {
    // SCSS 수정 시 감지를 더 정확하게 하기 위해 설정을 명시할 수 있습니다.
    includePaths: ["./styles"],
  },
};

export default nextConfig;
