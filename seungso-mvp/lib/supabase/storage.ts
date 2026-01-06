import { supabase } from "./client";

export const uploadJudgmentPDF = async (file: File, caseId: string) => {
  const { data, error } = await supabase.storage
    .from("judgments")
    .upload(`${caseId}.pdf`, file, {
      upsert: true,
    });

  if (error) throw error;
  return data.path;
};
