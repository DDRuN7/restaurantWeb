function MenuBarComponent({ menuStyle, menuSwitch ,id}) {
    return (
        <>
            <div className={menuStyle.menuList}>
                <div className={menuStyle.listM}>
                    <h2 className={menuStyle.listTitle}>
                        <strong>メニュー</strong>
                    </h2>
                    <ul>
                        <li><a onClick={() => menuSwitch(1)} style={{ cursor: 'pointer' }} className={id===1 ? menuStyle.select : menuStyle.unSelect}>前菜</a></li>
                        <li><a onClick={() => menuSwitch(2)} style={{ cursor: 'pointer' }} className={id===2 ? menuStyle.select : menuStyle.unSelect}>メインディッシュ</a></li>
                        <li><a onClick={() => menuSwitch(3)} style={{ cursor: 'pointer' }} className={id===3 ? menuStyle.select : menuStyle.unSelect}>サイドディッシュ</a></li>
                        <li><a onClick={() => menuSwitch(4)} style={{ cursor: 'pointer' }} className={id===4 ? menuStyle.select : menuStyle.unSelect}>デザート</a></li>
                        <li><a onClick={() => menuSwitch(5)} style={{ cursor: 'pointer' }} className={id===5 ? menuStyle.select : menuStyle.unSelect}>飲み物</a></li>
                        <li><a onClick={() => menuSwitch(6)} style={{ cursor: 'pointer' }} className={id===6 ? menuStyle.select : menuStyle.unSelect}>すべての商品</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default MenuBarComponent