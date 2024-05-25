import React, { useState } from 'react';
import { Pannellum } from 'pannellum-react';
import dataScene from '../helpers/dataScene';
import '../styles/scena.css';
export default function Scene() {
    const [scene, setScene] = useState(dataScene['insideOne']);

    const hotSpots = (Element, i)=>{
        if(Element.cssClass === 'hotSpotElement') return (<Pannellum.Hotspot
            key={i}
            type={Element.type}
            pitch={Element.pitch}
            yaw={Element.yaw}
            cssClass={Element.cssClass}
            handleClick = {()=>alert('Click')}
        />);
        else if(Element.cssClass === 'moveScene') return(
            <Pannellum.Hotspot
            key={i}
            type={Element.type}
            pitch={Element.pitch}
            yaw={Element.yaw}
            cssClass={Element.cssClass}
            handleClick = {()=>setScene(dataScene[Element.scene])}
        />
        )
        
    }
    
    return (
        <>
            <div className="scene-selector" style={{ position: 'absolute', top: '10px', left: '10px', zIndex: 1000 }}>
                {Object.keys(dataScene).map(key => (
                    <button key={key} className="scene-button" onClick={() => setScene(dataScene[key])}>
                        {dataScene[key].title}
                    </button>
                ))}
            </div>
            <Pannellum
                width={'100%'}
                height={'100vh'}
                title={scene.title}
                image={scene.image}
                pitch={scene.pitch}
                yaw={scene.yaw}
                hfov={200}
                autoLoad
                showControls={false}
                showFullscreenCtrl={false}
                showZoomCtrl={false}
                orientationOnByDefault={true}
                hotspotDebug={true}
            >
                {Object.values(scene.hotSpots).map((Element, i) => 
                    hotSpots(Element, i)
                )}
            </Pannellum>

        </>
    );
}
