import { NextResponse, NextRequest } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";
export async function PUT(req: NextRequest) {
  try {
    // Get the projectId from the request query params
    const updatedData = await req.json(); // Get the updated project data from the request body
    const pointId = updatedData.id;

    if (!pointId) {
      return NextResponse.json({ error: "Project ID is required" });
    }

    // Update the project in the "projects" table
    const { data, error } = await supabase
      .from("vertices")
      .update(updatedData)
      .eq("id", pointId);

    if (error) throw error;

    return NextResponse.json({
      message: "Project updated successfully!",
      project: data,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
