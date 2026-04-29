declare global {
  interface Window {
    supabase: any;
  }
}

// 1. THE CONNECTION (Put this at the top of your file)
export const supabaseUrl = "https://irkglfbrmiuydjmzgjuv.supabase.co";
export const supabaseKey = "sb_publishable_QUI7elFmVBaHTmw-kAgtVw_7aJKpxq0";
export const paupemage = window.supabase?.createClient(supabaseUrl, supabaseKey);

// 2. THE FUNCTION TO ADD A LOG (Example for your drivers)
export async function addLogEntry(
  shipmentId: string | number,
  updateText: string,
  location: string
) {
  if (!paupemage) {
    const errorMessage = "Supabase client is not initialized. Make sure the CDN script is loaded.";
    console.error("Error:", errorMessage);
    alert("Error: " + errorMessage);
    return;
  }

  const { data, error } = await paupemage
    .from("logs")
    .insert([
      {
        shipment_id: shipmentId,
        status_update: updateText,
        location: location,
      },
    ]);

  if (error) {
    console.error("Error:", error.message);
    alert("Error: " + error.message);
  } else {
    console.log("Tracking updated!");
  }
}
