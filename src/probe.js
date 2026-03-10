class Probe {
    constructor(name) {
        this.name = name;
        this.atmosphere = null;
        this.temperature = null;
        this.waterPresence = null;
        this.metalDeposits = null;
    }

    scanPlanet(planet) {
        // Simulating the scanning process with random data
        this.atmosphere = this.scanAtmosphere(planet);
        this.temperature = this.scanTemperature(planet);
        this.waterPresence = this.scanWaterPresence(planet);
        this.metalDeposits = this.scanMetalDeposits(planet);
        return {
            atmosphere: this.atmosphere,
            temperature: this.temperature,
            waterPresence: this.waterPresence,
            metalDeposits: this.metalDeposits
        };
    }

    scanAtmosphere(planet) {
        // Simulated atmosphere data based on the planet's characteristics
        return `Atmosphere data for ${planet}`;
    }

    scanTemperature(planet) {
        // Simulated temperature data based on the planet's characteristics
        return Math.random() * 100; // Random temperature
    }

    scanWaterPresence(planet) {
        // Simulated water presence detection
        return Math.random() > 0.5 ? 'Water detected' : 'No water detected';
    }

    scanMetalDeposits(planet) {
        // Simulated metal deposit detection
        return Math.random() > 0.5 ? 'Metal deposits present' : 'No metal deposits';
    }
}

module.exports = Probe;