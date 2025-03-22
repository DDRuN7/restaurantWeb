function MenuDessertComponent({ menuStyle, menuAll, id }) {
    return (
        <div className={menuStyle.menu}>
            {menuAll.filter((item) => item.id === id).map((item) => {
                return (
                    <div className={menuStyle.menuBoard} key={item.alt}>
                        <a href="">
                            <div className={menuStyle.menuBox}>
                                <img src={item.src} alt={item.alt} /><br />
                                <p>{item.name}<br />{item.price}</p>
                            </div>
                        </a>
                    </div>
                )
            })}
        </div>
    )
}

export default MenuDessertComponent