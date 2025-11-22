const BASE_URL = "https://l3k7g5-8081.csb.app";

async function fetchModel(url) {
  try {
    const response = await fetch(BASE_URL + url);

    if (!response.ok) {
      throw new Error("Backend error: " + response.statusText);
    }

    return await response.json();
  } catch (err) {
    console.error("fetchModel error:", err);
    throw err;
  }
}

export default fetchModel;
