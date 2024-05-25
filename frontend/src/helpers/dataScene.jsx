import insideOne from '../images/img2.png';
import insideLibrary from '../images/img3.png';
import insideTwo from '../images/img4.png';
import insideGoScene from '../images/img5.png';
import insideMecanica from '../images/img6.png';
import insideGamer from '../images/img7.png';

const Scene = {
    insideOne: {
        title: 'Entrada',
        image: insideOne,
        pitch: -11,
        yaw: -3,
        hotSpots: {
            plane: {
                type: 'custom',
                pitch: -8,
                yaw: 126,
                cssClass: 'hotSpotElement'
            },
            nextScene: {
                type: 'custom',
                pitch: 8,
                yaw: -6,
                cssClass: 'moveScene',
                scene:'insideTwo'
            },
            SceneLibrary: {
                type: 'custom',
                pitch: 5,
                yaw: -44,
                cssClass: 'moveScene',
                scene:'insideLibrary'
            }
        }
    },
    insideTwo:{
        title:'Patio central',
        image:insideTwo,
        pitch: 10,
        yaw:180,
        hotSpots:{
            backScene: {
                type: 'custom',
                pitch: 1,
                yaw: 77,
                cssClass: 'moveScene',
                scene:'insideOne'
            },
            SceneMecanica: {
                type: 'custom',
                pitch: 8,
                yaw: -12,
                cssClass: 'moveScene',
                scene:'insideMecanica'
            },
            SceneGamer: {
                type: 'custom',
                pitch: 5,
                yaw: 39,
                cssClass: 'moveScene',
                scene:'insideGamer'
            }
        }
    },
    insideLibrary:{
        title:'Pabellon 2',
        image:insideLibrary,
        pitch: 10,
        yaw:180,
        hotSpots:{
            backScene: {
                type: 'custom',
                pitch: 11,
                yaw: -11,
                cssClass: 'moveScene',
                scene:'insideOne'
            },
            goScene: {
                type: 'custom',
                pitch: -3,
                yaw: -56,
                cssClass: 'moveScene',
                scene:'insideGoScene'
            }
        }
    },
    insideGoScene:{
        title:'Biblioteca',
        image:insideGoScene,
        pitch: 10,
        yaw:180,
        hotSpots:{
            backScene: {
                type: 'custom',
                pitch: 0,
                yaw: -72,
                cssClass: 'moveScene',
                scene:'insideLibrary'
            }
        }
    },
    insideMecanica:{
        title:'Mecanica',
        image:insideMecanica,
        pitch: 10,
        yaw:180,
        hotSpots:{
            backScene: {
                type: 'custom',
                pitch: -14,
                yaw: 119,
                cssClass: 'moveScene',
                scene:'insideTwo'
            }
        }
    },
    insideGamer:{
        title:'Pabellon 5',
        image:insideGamer,
        pitch: 10,
        yaw:180,
        hotSpots:{
            backScene: {
                type: 'custom',
                pitch: 5,
                yaw: -85,
                cssClass: 'moveScene',
                scene:'insideTwo'
            }
        }
    },
};

export default Scene;
