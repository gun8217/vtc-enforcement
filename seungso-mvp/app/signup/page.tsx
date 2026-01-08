"use client";

import { supabase } from "@/lib/supabase/client";
import { useState } from "react";

export default function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const signUp = async () => {
    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("회원가입 성공! 이메일을 확인하세요.");
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h1>회원가입</h1>

      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />

      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <button onClick={signUp}>회원가입</button>

      <p>{message}</p>
    </div>
  );
}
