// Number Validation
const isNumber = (value) => {
  return !isNaN(value) && isFinite(value);
};

// Email Validation
const isEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export { isNumber, isEmail };
