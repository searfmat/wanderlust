import Location from './Location'
import Directions from './Directions'
import Button from '@mui/material/Button';
import useCurrentLocation from './useCurrentLocation';
import useDirections from './useDirections';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useState, useRef } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: teal[500]
    },
    secondary: {
      main: teal[400]
    },
  },
});

const geolocationOptions = {
  enableHighAccuracy: true,
  timeout: 1000 * 60 * 1,
  maximumAge: 1000 * 3600 * 24,
};


function MakeForm() {
  
  const [rad, setRad] = useState();
  const [result, setResult] = useState(false);
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  const [disabled, setDisabled] = useState(false);
  const radius = useRef(0);
  const directions = useDirections(result, currentLocation, rad);

  return (
    <Box
      component="form"
      sx={{
        mx: 'auto',
        px: 25,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
      }}
      noValidate
      autoComplete="off"
    >

      <Box sx={{ mb: 4 }}>
        <Location location={currentLocation} error={currentError} />
      </Box>
      <Box sx={{ mb: 4 }}>
        <TextField sx={{ width: '25%' }} id="outlined-number" label="Radius (mi)" type="number" InputLabelProps={{ shrink: true, }} inputRef={radius} />
      </Box>
      <Box sx={{ m: 2 }}>
        <Button variant="contained" size="medium" onClick={() => {setRad(radius.current.value); setResult(!result); setDisabled(true);}} disabled={disabled}>
          Generate
        </Button>
      </Box>
      <Box sx={{   display: "flex",
  justifyContent: "center",
  alignItems: "center"}}>
        <Directions directions={directions} />
      </Box>
    </Box>
  );
}

function Title() {
  return (
    <Box
      sx={{
        mx: 'auto',
        p: 1,
        m: 1,
        borderRadius: 1,
        textAlign: 'center',
      }}
    >
      <Typography variant="h2" component="div" gutterBottom>
        Wanderlust
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        Generate directions to a rondom location, explore and see what you can find.
      </Typography>
    </Box>
  );
}

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Title />
        <MakeForm />
      </ThemeProvider>
    </div>
  );
}

export default App;
