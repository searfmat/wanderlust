import { useState, useEffect } from "react";

const useDirections = () => {
    const [rad, setRad] = useState();
    return {rad, setRad};
}

export default useDirections;