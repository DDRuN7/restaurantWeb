import React from 'react'
function MenuAllComponent({ menuStyle, menuAll }) {
    return (
        <div className={menuStyle.menu}>
            {menuAll.map((item) => {
                return (

                    <div className={menuStyle.menuBoard} key={item.alt}>
                        <a href="">
                            <div className={menuStyle.menuBox}>
                                <img src={item.src} alt={item.alt}  /><br />
                                <p>{item.name}<br />{item.price}</p>
                            </div>
                        </a>
                    </div>

                )
            })}
        </div>
    )
}
export default MenuAllComponent