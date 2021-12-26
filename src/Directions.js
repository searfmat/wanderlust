import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Directions = ({ directions, coords, xid }) => {

  const handleClick = () => {
    window.open(" http://www.google.com/maps/place/" + coords);
  };

  const listSteps = directions.map((step, index) =>
    <ListItem key={index}>
      <ListItemIcon>
        {directions[index].includes("Arrive" || "arrive") ? (
          <LocationOnIcon />
        ) : directions[index].includes("left") ? (
          <TurnLeftIcon />
        ) : directions[index].includes("right") ? (
          <TurnRightIcon />
        ) : (
          <></>
        )}
      </ListItemIcon>
      <ListItemText
        primary={step}
      />
    </ListItem>,
  );
  return (
    <div>
      {directions.length > 0 ? (
        <>
          <Typography variant="h5" component="div" gutterBottom>
            Directions
          </Typography>
          <List>
            {listSteps}
          </List>
          <Button variant="contained" size="medium" onClick={() => {handleClick();}} >
          Spoil
          </Button>
        </>
      ) : (
        <>{null}</>
      )}
    </div>
  );
};

export default Directions;