async function load({ locals }) {
  if (!locals || !locals.user) {
    console.log("User is not authenticated");
    return { isAuthenticated: false };
  }
  return {
    isAuthenticated: true,
    user: locals.user
  };
}
export {
  load
};
