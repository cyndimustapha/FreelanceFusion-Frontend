import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ element: Component, ...rest }) => {
  return isAuthenticated() ? <Component {...rest} /> : <Navigate to="/" />;
};

ProtectedRoute.propTypes = {
  element: PropTypes.node.isRequired,
};

export default ProtectedRoute;
