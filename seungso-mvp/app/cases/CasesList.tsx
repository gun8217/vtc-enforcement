"use client";

import { supabase } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

type Case = {
  id: number;
  title: string;
  amount: number;
  status: string;
  created_at: string;
};

export default function CasesList() {
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCases = async () => {
      const { data, error } = await supabase
        .from("cases")
        .select("*")
        .order("created_at", { ascending: false });

      if (error) {
        console.error(error);
      } else {
        setCases(data ?? []);
      }

      setLoading(false);
    };

    fetchCases();
  }, []);

  if (loading) return <p>불러오는 중...</p>;
  if (cases.length === 0) return <p>사건이 없습니다.</p>;

  return (
    <ul className="cases-list">
      {cases.map((item) => (
        <li key={item.id} className="case-card">
          <h3>{item.title}</h3>

          <div className="meta">
            <span>{item.amount.toLocaleString()}원</span>
            <span className={`status ${item.status}`}>{item.status}</span>
          </div>
        </li>
      ))}
    </ul>
  );
}
