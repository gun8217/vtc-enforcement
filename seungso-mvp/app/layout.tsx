import "@/app/globals.scss";

import Link from "next/link";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body>
        <header>
          <nav>
            <Link href="/">홈</Link>
            <Link href="/service">서비스</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
