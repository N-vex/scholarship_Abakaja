import { supabase } from "@/components/ui/client";


export async function approveApplication(applicationId) {
  const { error } = await supabase
    .from("applications")
    .update({
      status: "approved",
      admin_notes: "Meets all criteria",
      updated_at: new Date().toISOString(),
    })
    .eq("id", applicationId);

  if (error) {
    console.error("Approve error:", error);
    throw error;
  }

  return true;
}


export async function rejectApplication(applicationId, reason) {
  const { error } = await supabase
    .from("applications")
    .update({
      status: "rejected",
      admin_notes: reason,
      updated_at: new Date().toISOString(),
    })
    .eq("id", applicationId);

  if (error) {
    console.error("Reject error:", error);
    throw error;
  }

  return true;
}

// import { supabase } from "@/components/ui/client";

// export async function approveApplication(applicationId) {
//   const { error } = await supabase
//     .from("applications")
//     .update({
//       status: "approved",
//       admin_notes: "Meets all criteria",
//       updated_at: new Date().toISOString(),
//     })
//     .eq("id", applicationId);

//   if (error) throw error;
// }

// export async function rejectApplication(applicationId, reason) {
//   const { error } = await supabase
//     .from("applications")
//     .update({
//       status: "rejected",
//       admin_notes: reason,
//       updated_at: new Date().toISOString(),
//     })
//     .eq("id", applicationId);

//   if (error) throw error;
// }