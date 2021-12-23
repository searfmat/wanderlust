import React from "react";
import PropTypes from "prop-types";
import Typography from '@mui/material/Typography';

//Component 
const Location = ({ location, error }) => {
  return (
    <div>
      {location ? (
        <Typography variant="body1" gutterBottom>
          Obtained coordinates: {location.latitude}, {location.longitude}
        </Typography>

      ) : (
        <Typography variant="body1" gutterBottom>
          Please allow location access.
        </Typography>
      )}
      {error && <p className="errorMessage">Location Error: {error}</p>}
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.object,
  error: PropTypes.string,
};

export default Location;