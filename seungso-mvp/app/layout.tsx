import "@/app/globals.scss";
import FontAwesomeConfig from "@/components/layout/FontAwesomeConfig";
import Header from "@/components/layout/Header";
import ThemeWrapper from "@/components/layout/ThemeWrapper";
import { getMenuItems } from "@/lib/menu";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const menu = getMenuItems();

  return (
    <html lang="ko">
      <head>
        <FontAwesomeConfig />
      </head>
      <body>
        <ThemeWrapper>
          <Header menu={menu} />
          {children}
        </ThemeWrapper>
      </body>
    </html>
  );
}
