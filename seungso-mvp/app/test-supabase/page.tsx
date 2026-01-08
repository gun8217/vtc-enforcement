"use client";

import { supabase } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export default function TestSupabasePage() {
  const [status, setStatus] = useState("loading...");

  useEffect(() => {
    const run = async () => {
      const { data, error } = await supabase.from("cases").select("*").limit(1);

      if (error) {
        setStatus(`❌ ${error.message}`);
      } else {
        setStatus(`✅ connected (rows: ${data.length})`);
      }
    };

    run();
  }, []);

  return <div>{status}</div>;
}
