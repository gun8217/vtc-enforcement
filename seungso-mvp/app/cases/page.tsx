import { createSupabaseServerClient } from "@/lib/supabase/server";

export default async function CasesPage() {
  const supabase = await createSupabaseServerClient();

  const { data: cases } = await supabase
    .from("cases")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div>
      <h1>내 사건 목록</h1>
      <pre>{JSON.stringify(cases, null, 2)}</pre>
    </div>
  );
}
