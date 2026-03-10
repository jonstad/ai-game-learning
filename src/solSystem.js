const planets = [
    {
        name: 'Mercury',
        distanceFromSun: 57.91, // in million kilometers
        radius: 2439.7, // in kilometers
        temperature: 430, // in Celsius
        atmosphereComposition: 'Oxygen, Sodium, Hydrogen, Helium, Potassium',
        availableResources: ['helium-3', 'silicates']
    },
    {
        name: 'Venus',
        distanceFromSun: 108.2,
        radius: 6051.8,
        temperature: 462,
        atmosphereComposition: 'Carbon Dioxide, Nitrogen',
        availableResources: ['sulfuric acid', 'phosphorus']
    },
    {
        name: 'Earth',
        distanceFromSun: 149.6,
        radius: 6371,
        temperature: 15,
        atmosphereComposition: 'Nitrogen, Oxygen, Argon, Carbon Dioxide',
        availableResources: ['water', 'minerals', 'biological matter']
    },
    {
        name: 'Mars',
        distanceFromSun: 227.9,
        radius: 3389.5,
        temperature: -63,
        atmosphereComposition: 'Carbon Dioxide, Nitrogen, Argon',
        availableResources: ['water ice', 'iron oxide']
    },
    {
        name: 'Jupiter',
        distanceFromSun: 778.5,
        radius: 69911,
        temperature: -145,
        atmosphereComposition: 'Hydrogen, Helium, Methane',
        availableResources: ['hydrogen', 'helium']
    },
    {
        name: 'Saturn',
        distanceFromSun: 1427,
        radius: 58232,
        temperature: -178,
        atmosphereComposition: 'Hydrogen, Helium',
        availableResources: ['hydrogen', 'helium']
    },
    {
        name: 'Uranus',
        distanceFromSun: 2871,
        radius: 25362,
        temperature: -195,
        atmosphereComposition: 'Hydrogen, Helium, Methane',
        availableResources: ['water', 'ammonia']
    },
    {
        name: 'Neptune',
        distanceFromSun: 4497,
        radius: 24622,
        temperature: -201,
        atmosphereComposition: 'Hydrogen, Helium, Methane',
        availableResources: ['water', 'ammonia']
    }
];

module.exports = planets;