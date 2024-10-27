import axios from "axios";

export const loginInstructor = async ({ email, password }) => {
  try {
    const response = await axios.post(
      "https://lms-studium.up.railway.app/instructor-auth/login",
      { email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(
      "Error login instructor".error.response?.data?.message || error.message
    );
    throw new Error(
      error.response?.data?.message || "Failed to login instructor"
    );
  }
};
