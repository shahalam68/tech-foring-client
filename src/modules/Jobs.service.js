export const getAllJobs = async () => {
    const accessToken = localStorage.getItem("siteToken");
  
    if (!accessToken) {
      throw new Error("No access token found");
    }
  
    const response = await fetch("http://localhost:5000/jobs", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  
    return response.json();
  };
  