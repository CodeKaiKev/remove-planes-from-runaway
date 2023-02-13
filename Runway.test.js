const Runway = require('./Runway');

describe('Runway', () => {
    const run1 = new Runway("Heathrow");
    test('checking planes', () => {
        
        expect(run1.name).toBe("Heathrow");
        
    })
    test('checking MAX PLANES ', () => {
    
        expect(Runway.MAX_PLANES_ALLOWED_ON_ALL_RUNWAYS).toBe(100);
    })
    test('can add planes', () => {
        run1.add("Jet #0");
        expect(Runway.planes).toContain("Jet #0");
    })
    test('max planes', () => {
        for(let i = 1; i < 101; i++) {
            run1.add(`Jet #${i}`);
        }
        expect(() => {run1.add("ErrorPlane")}).toThrow("runways at full capacity!");
        // console.log(Runway.planes);
    })
    test('remove planes', () => {
        expect(Runway.planes).toContain("Jet #0");
        run1.remove("Jet #0");
        console.log(Runway.planes);
        expect(Runway.planes.includes("Jet #0")).toBe(false);
        
    })

    test('no planes', () => {
        expect(() => {run1.remove("jajd")}).toThrow("no plane!");
    });
})