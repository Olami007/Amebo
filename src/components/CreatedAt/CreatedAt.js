// Get createdAt in words
export const CreatedAt = (createdAt) => {
  const now = new Date();
  const createdDate = new Date(createdAt);

  const timeDifferenceInMilliseconds = now - createdDate;
  const timeDifferenceInSeconds = Math.floor(
    timeDifferenceInMilliseconds / 1000
  );

  if (timeDifferenceInSeconds >= 31536000) {
    const years = Math.floor(timeDifferenceInSeconds / 31536000);
    return `${years} year${years !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInSeconds >= 2592000) {
    const months = Math.floor(timeDifferenceInSeconds / 2592000);
    return `${months} month${months !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInSeconds >= 86400) {
    const days = Math.floor(timeDifferenceInSeconds / 86400);
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInSeconds >= 3600) {
    const hours = Math.floor(timeDifferenceInSeconds / 3600);
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (timeDifferenceInSeconds >= 60) {
    const minutes = Math.floor(timeDifferenceInSeconds / 60);
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else {
    return "just now";
  }
};
