class Runway {
    static MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS = 100;
    static planes = [];

    name;

    constructor(name) {
        this.name = name
    }
    
    add(plane) {

        if (Runway.planes.length>Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS) {
            throw new Error ("runways at full capacity!")
        }
        Runway.planes.push(plane)
    }

    remove(plane) {
        if(Runway.planes.includes(plane)) { 
            let i = Runway.planes.indexOf(plane);
            console.log(i);
            console.log("Popping");
            Runway.planes.splice(i, 1);
        } else{
            throw new Error ("no plane!")
        }
    }
}

module.exports = Runway;