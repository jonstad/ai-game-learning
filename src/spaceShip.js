// src/spaceShip.js

class SpaceShip {
    constructor(type, resources) {
        this.type = type; // 'Command Ship' or 'Landing Vessel'
        this.resources = resources; // Resources available for establishing a base
    }

    orbit() {
        if (this.type === 'Command Ship') {
            console.log('The Command Ship is orbiting the sun.');
        } else {
            console.log('Landing Vessel is preparing for descent.');
        }
    }

    sendToPlanet(planet) {
        if (this.type === 'Landing Vessel') {
            console.log(`Launching Landing Vessel to ${planet} with resources: ${this.resources.join(', ')}.`);
        } else {
            console.log('Only Landing Vessels can be sent to planets.');
        }
    }
}

module.exports = SpaceShip;
