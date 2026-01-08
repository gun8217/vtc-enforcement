"use client";

import { supabase } from "@/lib/supabase/client";
import logo from "@/public/favicon/favicon-32.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// Supabase에서 User 타입을 가져옵니다.
import { User } from "@supabase/supabase-js";

export default function Header() {
  // 초기값을 null로 설정하고 타입을 User | null로 지정합니다.
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 세션 정보 가져오기
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setUser(session?.user ?? null);
      setLoading(false);
    };

    getSession();

    // 인증 상태 변경 감지
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  // 로딩 중일 때는 레이아웃 깨짐 방지를 위해 최소한의 구조만 렌더링하거나 null을 반환할 수 있습니다.
  if (loading)
    return (
      <header>
        <nav>
          <Link href="/">
            <Image src={logo} alt="홈" />
          </Link>
        </nav>
      </header>
    );

  return (
    <header>
      <nav>
        <Link href="/">
          <Image src={logo} alt="홈" />
        </Link>

        {/* 유저가 있을 때만 서비스 메뉴 표시 */}
        {user && <Link href="/service">서비스</Link>}

        {/* 유저 상태에 따라 로그인 또는 로그아웃 버튼 표시 */}
        {user ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <Link href="/login">로그인</Link>
        )}
      </nav>
    </header>
  );
}
