const Directions = ({rad, loc}) => {
    return (
        <div>
        {loc && rad ? (
            <p> {rad} {loc.latitude}, {loc.longitude}</p>
          ) : (
            <div>{null}</div>
          )}
        </div>
    );
}

export default Directions;