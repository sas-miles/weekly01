import * as THREE from "three";
import EventEmitter from "./Utils/EventEmitter";
import Experience from "./Experience";
import { CameraRig, FreeMovementControls, CameraHelper, Damper} from "three-story-controls";

export default class Controls extends EventEmitter {
  constructor() {
    super();
    this.experience = new Experience();
    this.time = this.experience.time;
    this.scene = this.experience.scene;
    this.canvas = this.experience.canvas;
    this.camera = this.experience.camera.instance;

   this.setStoryControls();
  }

  setStoryControls() {
    this.rig = new CameraRig(this.camera, this.scene);
    this.controls = new FreeMovementControls(this.rig, {
      domElement: this.canvas,
      pointerScaleFactor: 14,
    });
    this.controls.enable();
    this.cameraHelper = new CameraHelper(this.rig, this.scene, this.canvas);  
  }


  update() {
    this.controls.update(this.time.current);
    this.cameraHelper.update(this.time.current)
  }
}