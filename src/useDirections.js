import { useState, useEffect } from "react";
import axios from 'axios';
const KEY = '';
const useDirections = (res, loc, rad) => {
    const [directions, setDirections] = useState([]);
    useEffect(() => {
        if(loc != null && rad > 0) {
            let temp = [];
            let from = loc.latitude + "," + loc.longitude;
            let to = "";
            let wp1 = "waypoint.1";
            let wp2 = "waypoint.2";

            axios.get('http://dev.virtualearth.net/REST/v1/Routes', {
                params: {
                    [wp1]: from,
                    [wp2]: to,
                    key: KEY
                }
            })
            .then(function (response) {
                for(let item of response.data.resourceSets[0].resources[0].routeLegs[0].itineraryItems) {
                    temp.push(item.instruction.text);
                } setDirections(temp);
            })
        }
       //eslint-disable-next-line
    },[res])
    return directions;
}

export default useDirections;