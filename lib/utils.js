export const getErrorMessage = (error) => {
    if (error instanceof Error) {
      return error.message;
    } else if (error && typeof error === "object" && "message" in error) {
      return String(error.message);
    } else if (error && typeof error === "string") {
      return error;
    } else {
      return "An unknown error occurred.";
    }
  };