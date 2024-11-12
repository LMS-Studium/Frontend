import axios from "axios";

export async function createCourse(courseData, token) {
  try {
    console.log("Sending course data:", courseData); // Debug log

    const response = await axios.post(
      "https://lms-studium.up.railway.app/courses",
      courseData,
      {
        headers: {
          Authorization: `Bearer ${token}`, // Ensure the token is valid
          "Content-Type": "application/json",
        },
      }
    );

    console.log("API Response:", response.data); // Debug log for data only
    return response.data; // Return the data field for easier handling
  } catch (error) {
    console.error("API Error Details:", {
      message: error.message,
      response: error.response?.data,
      status: error.response?.status,
    });
    throw error;
  }
}
