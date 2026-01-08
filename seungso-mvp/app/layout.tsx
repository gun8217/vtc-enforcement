import "@/app/globals.scss";
import Header from "@/components/Header"; // Header 컴포넌트 임포트

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <Header /> {/* 클라이언트 상태를 관리하는 헤더 적용 */}
        {children}
      </body>
    </html>
  );
}
