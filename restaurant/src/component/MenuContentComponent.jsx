import React from "react";
import bistro_grow2 from '../images/restaurant/bistro_grow2.jpg';

function MenuContentComponent({menuStyle}) {
    return (
        <>
            <div className={menuStyle.middle}>
                <img src={bistro_grow2} alt=""/>
            </div>
        </>


    );
}
export default MenuContentComponent;