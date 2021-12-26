import { useState, useEffect } from "react";
import axios from 'axios';

const KEY = '';
const MAP_KEY = '';

const useDirections = (res, loc, rad) => {

    const [directions, setDirections] = useState([]);
    const [coords, setCords] = useState("");
    const [xid, setXid] = useState("");

    useEffect(() => {

        if (loc != null && rad > 0) {
            let lon;
            let lat;
            let to;
            let temp = [];
            let potential = [];
            let xids = [];
            let radius = rad * 1609;
            let from = loc.latitude + "," + loc.longitude;
            let wp1 = "waypoint.1";
            let wp2 = "waypoint.2";

            axios.get('http://api.opentripmap.com/0.1/en/places/radius', {
                params: {
                    radius: radius,
                    lon: loc.longitude,
                    lat: loc.latitude,
                    apikey: MAP_KEY
                }
            })
                .then(function (response) {
                    console.log(response);
                    for (let item of response.data.features) {
                        potential.push(item.geometry.coordinates);
                        xids.push(item.properties.xid);
                    }
                    let rand = Math.floor(Math.random() * potential.length);
                    lon = potential[rand][0]
                    lat = potential[rand][1]
                    to = lat + ", " + lon;
                    setXid(xids[rand]);
                    setCords(to);
                    axios.get('http://dev.virtualearth.net/REST/v1/Routes', {
                        params: {
                            [wp1]: from,
                            [wp2]: to,
                            key: KEY
                        }
                    })
                        .then(function (response) {
                            console.log(response);
                            for (let item of response.data.resourceSets[0].resources[0].routeLegs[0].itineraryItems) {
                                temp.push("(" + item.travelDistance + " mi) " + item.instruction.text);
                            } setDirections(temp);
                        })
                })

        }
        //eslint-disable-next-line
    }, [res])
    return { directions, coords, xid };
}

export default useDirections;