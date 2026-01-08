"use client";

import { supabase } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function CasesPage() {
  const [email, setEmail] = useState<string | null>(null);

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => {
      setEmail(data.user?.email ?? null);
    });
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>Cases</h1>
      <p>로그인 사용자: {email}</p>
    </div>
  );
}
