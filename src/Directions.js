import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TurnRightIcon from '@mui/icons-material/TurnRight';
import TurnLeftIcon from '@mui/icons-material/TurnLeft';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Typography from '@mui/material/Typography';

const Directions = ({directions}) => {

  const listSteps = directions.map((step, index) => 
  <ListItem key={index}>
  <ListItemIcon>
    {directions[index].includes("right") ? (
      <TurnRightIcon />
    ) : directions[index].includes("left") ? (
      <TurnLeftIcon />
    ) : directions[index].includes("Arrive") ?(
      <LocationOnIcon />
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
        </>
      ) : (
        <>{null}</>
      )}
    </div>
  );
};

export default Directions;