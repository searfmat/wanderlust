import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { teal } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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


function MakeForm() {
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
    <TextField sx={{width: 700, mr: 2}} id="outlined-basic" label="Start Location" variant="outlined" />
    <TextField sx={{width: 200}} id="outlined-number" label="Radius (mi)" type="number" InputLabelProps={{ shrink: true,}}/>

    <Box sx={{m: 2}}>
      <Button variant="contained" size="medium">
        Generate
      </Button>
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
