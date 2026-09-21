const API_URL = "https://z5p4nwgg79.execute-api.us-east-1.amazonaws.com/default/visitor-counter";

async function updateVisitorCount() {
  const counterElement = document.getElementById("visitor-count");

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error(`API returned status ${response.status}`);
    }

    const data = await response.json();
    counterElement.textContent = `Visitor count: ${data.count}`;
  } catch (error) {
    console.error("Failed to fetch visitor count:", error);
    counterElement.textContent = "Visitor count: unavailable";
  }
}

updateVisitorCount();
