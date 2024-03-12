import * as THREE from 'three'

import Experience from '../Experience.js'

export default class Building {

    constructor() {
        this.experience = new Experience()
        this.scene = this.experience.scene
        this.resources = this.experience.resources
        this.time = this.experience.time
        this.debug = this.experience.debug

        //Setup
        this.resource = this.resources.items.building
        this.setModel()
    }

    setModel() {
        this.model = this.resource.scene
        this.scene.add(this.model)
    }
        
    

}