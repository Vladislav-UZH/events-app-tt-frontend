const { useAuth } = require('hooks');
const { Navigate } = require('react-router-dom');
// If the route is restricted and the user is logged in , render a <Navigate> to redirectTo
// Otherwise render the component
const RestrictedRoute = ({ component: Component, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};
export { RestrictedRoute };
