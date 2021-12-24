import Typography from '@mui/material/Typography';

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

export default Location;