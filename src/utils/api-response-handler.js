const handleResponse = (response) => {
  const { status, message } = response;
  if (status === 200) {
    // Success
    return { type: "success", message: message || "Submitted successfully!" };
  } else if (status === 400) {
    return { type: "error", message: message || "Bad Request" };
  } else if (status === 401) {
    // Unauthorized
    // Redirect to the login page
    window.location.href = "/login";
  } else if (status >= 500 && status < 600) {
    // Server Error
    return {
      type: "error",
      message: message || "Something went wrong. Please try again."
    };
  }
};

export { handleResponse };
