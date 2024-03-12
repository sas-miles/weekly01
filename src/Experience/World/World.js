import Experience from '../Experience.js'
import Environment from './Environment.js'
import Fox from './Fox.js'
import Floor from './Floor.js'
import Plane from './Plane.js'
import Building from './Building.js'


export default class World {
    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources

        this.resources.on('ready', () => {
            console.log('Resources ready')

            //Setup
            this.building = new Building()
            this.environment = new Environment()
            
        }) 

        this.plane = new Plane()

    }

    update() {
        if(this.fox)
            this.fox.update()
    }   
}