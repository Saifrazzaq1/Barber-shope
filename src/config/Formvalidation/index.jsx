export const validateFirstName = firstName => {
  if (!firstName) {
    return 'Name is required';
  }
  return null;
};

export const validatePhone = phone => {
  if (!phone) {
    return 'Phone is required';
  }
  return null;
};
export const validateOTP = otp => {
  if (!otp) {
    return 'OTP is required';
  }
  if (otp.length !== 6) {
    return 'OTP must be 6 digits';
  }

  return null;
};
export const validateEmail = email => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    return 'Email is required';
  } else if (!emailRegex.test(email)) {
    return 'Please enter a valid email address.';
  }
  return null;
};

export const validatePassword = password => {
  if (!password) {
    return 'Password is required';
  } else if (password.length < 8) {
    return 'Your Password must be at least 8 characters';
  }
  return null;
};
export const validatePass = password => {
  if (!password) {
    return 'Password is required';
  } else if (password.length < 8) {
    return 'Please enter a valid password';
  }
  return null;
};

export const validateRepassword = (repassword, password) => {
  if (!repassword) {
    return 'Re-type Password is required';
  } else if (repassword.length < 8) {
    return 'Your Password must be at least 8 characters';
  } else if (repassword !== password) {
    return 'Passwords do not match';
  }
  return null;
};

export const validateDOB = dob => {
  if (!dob) {
    return 'Date of birth is required';
  }
  // Regular expression to validate the format DD-MM-YYYY
  const dobRegex = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;
  if (!dobRegex.test(dob)) {
    return 'Invalid date of birth format. Please use DD-MM-YYYY';
  }
  return null;
};
export const validateAddress = address => {
  if (!address) {
    return 'Address is required';
  }
  return null;
};
export const validateCity = city => {
  if (!city) {
    return 'City is required';
  }
  return null;
};
