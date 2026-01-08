"use client";

import { supabase } from "@/lib/supabase/client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type CaseDetail = {
  id: number;
  title: string;
  status: string;
  claim_amount: number;
  judgment_amount: number;
  execution_score: number;
  summary: string;
};

export default function CaseDetailPage() {
  const { id } = useParams();
  const [data, setData] = useState<CaseDetail | null>(null);

  useEffect(() => {
    const fetchCase = async () => {
      const { data, error } = await supabase
        .from("cases")
        .select("*")
        .eq("id", id)
        .single();

      if (!error) setData(data);
    };

    fetchCase();
  }, [id]);

  if (!data) return <p>불러오는 중...</p>;

  return (
    <article className="case-detail">
      <h1>{data.title}</h1>

      <span className={`status ${data.status}`}>{data.status}</span>

      <section className="amounts">
        <div>
          <label>청구 금액</label>
          <strong>{data.claim_amount.toLocaleString()}원</strong>
        </div>
        <div>
          <label>판결 금액</label>
          <strong>{data.judgment_amount.toLocaleString()}원</strong>
        </div>
      </section>

      <section className="score">
        <h2>집행 가능성</h2>
        <progress value={data.execution_score} max={100} />
        <strong>{data.execution_score}%</strong>
      </section>

      <section className="summary">
        <h2>분석 요약</h2>
        <p>{data.summary}</p>
      </section>

      <section className="cta">
        <button>집행 시뮬레이션</button>
        <button className="primary">의뢰하기</button>
      </section>
    </article>
  );
}
