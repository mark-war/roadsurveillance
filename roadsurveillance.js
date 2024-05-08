class RoadSurveillance {
    constructor() {
        // camera object
        this.cameras = {};

        // sensor object
        this.sensors = {};

        // add camera function
        this.addCamera = function (location, cameraId) {
            // adding new camera and location
            this.cameras[cameraId] = location;
            console.log(`Camera ${cameraId} added at ${location}`);
        };

        // add sensor function
        this.addSensor = function (sensorType, location, sensorId) {
            // adding a sensor (type and location)
            this.sensors[sensorId] = { type: sensorType, location: location };
            console.log(`Sensor ${sensorId} added at ${location} - Type: ${sensorType}`);
        };

        // monitor traffic function
        this.monitorTraffic = () => {
            // to monitor the traffic with 5 seconds interval
            setInterval(() => {
                console.log("Monitoring traffic...");
                for (const [cameraId, location] of Object.entries(this.cameras)) {
                    // capturing live feed from cameras
                    console.log(`Capturing live feed from Camera ${cameraId} at ${location}`);
                }

                for (const [sensorId, sensorData] of Object.entries(this.sensors)) {
                    // collecting data from sensors
                    const { type, location } = sensorData;
                    console.log(`Collecting data from ${type} sensor ${sensorId} at ${location}`);
                }

                // processing data and generating alerts
                this.processData();
            }, 5000);
        };

        // process data function
        this.processData = () => {
            // processing data and generating alerts based on traffic conditions
            for (const [cameraId, location] of Object.entries(this.cameras)) {
                // analyzing camera feeds for traffic incidents simulation
                if (Math.random() < 0.05) { // generate random traffic incident (5% chance)
                    console.log(`Traffic incident detected on Camera ${cameraId}!`);
                }
            }

            for (const [sensorId, sensorData] of Object.entries(this.sensors)) {
                // analyzing sensor data for traffic conditions simulation
                if (sensorData.type === "Traffic Flow") {
                    // analyzing traffic flow data
                    const flowRate = Math.floor(Math.random() * (50 - 10 + 1) + 10); // traffic flow rate random between 10 and 50
                    console.log(`Traffic flow rate at sensor ${sensorId}: ${flowRate} vehicles/hour`);
                } else if (sensorData.type === "Weather") {
                    // analyzing weather data
                    const weatherConditions = ["Sunny", "Rainy", "Cloudy", "Foggy"]; 
                    // randomly select from the weather conditions
                    const weather = weatherConditions[Math.floor(Math.random() * weatherConditions.length)];
                    console.log(`Weather condition at sensor ${sensorId}: ${weather}`);
                }
            }
        };
    }
}


