// Get token from localStorage
export const getToken = () => {
    return localStorage.getItem("token");
};

// Check if user is logged in
export const isAuthenticated = () => {
    return !!localStorage.getItem("token");
};

// Save token after login
export const setToken = (token) => {
    localStorage.setItem("token", token);
};

// Remove token (logout)
export const logout = () => {
    localStorage.removeItem("token");
};