class Planet {
    constructor(name, terrain, resources, scanStatus, landingCapabilities) {
        this.name = name; // Name of the planet
        this.terrain = terrain; // Type of terrain (e.g., rocky, gaseous)
        this.resources = resources; // Resource deposits available
        this.scanStatus = scanStatus; // Status of scans performed
        this.landingCapabilities = landingCapabilities; // True if landing is possible, false otherwise
    }

    // Method to update scan status
    updateScanStatus(status) {
        this.scanStatus = status;
    }

    // Method to check resource availability
    hasResources() {
        return this.resources > 0;
    }

    // Method to check if landing is possible
    canLand() {
        return this.landingCapabilities;
    }
}

// Example of creating a planet instance:
// const mars = new Planet('Mars', 'rocky', 100, 'scanned', true);