import axios from "axios";

export const instructorSignup = async ({ name, email, password }) => {
  try {
    const response = await axios.post(
      "https://lms-studium.up.railway.app/instructor-auth/register",
      { name, email, password },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.log(
      "Error registering instructor",
      error.response?.data?.message || error.message
    );
    throw new Error(error.response?.data?.message || "Failed to register user");
  }
};
