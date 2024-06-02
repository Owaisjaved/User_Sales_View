import { useState, useEffect } from "react";
import devices from "../data/devices.json";

const useFetchDevices = () => {
  const [deviceList, setDeviceList] = useState([]);

  useEffect(() => {
    // Simulate fetching data from a server
    setDeviceList(devices.devices);
  }, []);

  return deviceList;
};

export default useFetchDevices;
