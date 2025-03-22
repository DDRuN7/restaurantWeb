import React, { useState } from 'react'
import HeadComponent from '../component/HeadComponent'
import MenuContentComponent from '../component/MenuContentComponent'
import menuStyle from '../css/Menu.module.css';
import MenuBarComponent from '../component/MenuBarComponent';
import MenuAllComponent from '../component/MenuAllComponent';
import MenuFirstComponent from '../component/MenuFirstComponent';
import MenuMainComponent from '../component/MenuMainComponent';
import MenuSideComponent from '../component/MenuSideComponent';
import MenuDessertComponent from '../component/MenuDessertComponent';
import MenuDrinkComponent from '../component/MenuDrinkComponent';
import menu01 from '../images/01_food/first/menu01.jpg';
import menu02 from '../images/01_food/first/menu02.jpg';
import menu03 from '../images/01_food/first/menu03.jpg';
import menu13 from '../images/01_food/first/menu13.jpg';
import menu04 from '../images/01_food/main/menu04.jpg';
import menu05 from '../images/01_food/main/menu05.jpg';
import menu06 from '../images/01_food/main/menu06.jpg';
import menu07 from '../images/01_food/main/menu07.jpg';
import menu14 from '../images/01_food/main/menu14.jpg';
import menu08 from '../images/01_food/side/menu08.jpg';
import menu09 from '../images/01_food/side/menu09.jpg';
import menu10 from '../images/01_food/side/menu10.jpg';
import menu16 from '../images/01_food/side/menu16.jpg';
import menu17 from '../images/01_food/side/menu17.jpg';
import menu18 from '../images/01_food/side/menu18.jpg';
import menu19 from '../images/01_food/side/menu19.jpg';
import menu11 from '../images/01_food/dessert/menu11.jpg';
import menu12 from '../images/01_food/dessert/menu12.jpg';
import menu15 from '../images/01_food/dessert/menu15.jpg';
import menu20 from '../images/01_food/dessert/menu20.jpg';
import drink01 from '../images/02_drink/drink01.jpg';
import drink02 from '../images/02_drink/drink02.jpg';
import drink03 from '../images/02_drink/drink03.jpg';
import drink04 from '../images/02_drink/drink04.jpg';
import drink05 from '../images/02_drink/drink05.jpg';
import drink06 from '../images/02_drink/drink06.jpg';
import drink07 from '../images/02_drink/drink07.jpg';
import drink08 from '../images/02_drink/drink08.jpg';
import drink09 from '../images/02_drink/drink09.jpg';
import drink10 from '../images/02_drink/drink10.jpg';
import FooterComponent from '../component/FooterComponent'


function Menu() {
    const menuAll = [
        {id:1,src:menu01,alt:"menu01",name:"マッシュルームのアヒージョ",price:"７００円"},
        {id:1,src:menu02,alt:"menu02",name:"サラダ・ブノワ",price:"５００円"},
        {id:1,src:menu03,alt:"menu03",name:"テリーヌ・ド・カンパーニュ",price:"９００円"},
        {id:1,src:menu13,alt:"menu13",name:"ニョッキ",price:"９００円"},
        {id:2,src:menu04,alt:"menu04",name:"Ａ５ランプ肉のステーキ",price:"１５００円"},
        {id:2,src:menu05,alt:"menu05",name:"サーモンマリネ",price:"９００円"},
        {id:2,src:menu06,alt:"menu06",name:"鴨のコンフィ",price:"１１００円"},
        {id:2,src:menu07,alt:"menu07",name:"子羊のロースト",price:"８００円"},
        {id:2,src:menu14,alt:"menu14",name:"フリット",price:"１０００円"},
        {id:3,src:menu08,alt:"menu08",name:"シュークルート",price:"８００円"},
        {id:3,src:menu09,alt:"menu09",name:"スープ・ド・ポワソン",price:"５００円"},
        {id:3,src:menu10,alt:"menu10",name:"バヴェットステーキ",price:"２０００円"},
        {id:3,src:menu16,alt:"menu16",name:"エスカルゴ・ブルギニョン",price:"１１００円"},
        {id:3,src:menu17,alt:"menu17",name:"ブイヤベース",price:"８００円"},
        {id:3,src:menu18,alt:"menu18",name:"ポトフ",price:"１２００円"},
        {id:3,src:menu19,alt:"menu19",name:"ブフ・ブルギニョン",price:"１６００円"},
        {id:4,src:menu11,alt:"menu11",name:"スフレオムレツ",price:"７００円"},
        {id:4,src:menu12,alt:"menu12",name:"スフレオムレツ",price:"７００円"},
        {id:4,src:menu15,alt:"menu15",name:"クレームブリュレ",price:"５００円"},
        {id:4,src:menu20,alt:"menu20",name:"プティサレ",price:"９００円"},
        {id:5,src:drink01,alt:"drink01",name:"コーラ",price:"３００円"},
        {id:5,src:drink02,alt:"drink02",name:"コーラ",price:"３００円"},
        {id:5,src:drink03,alt:"drink03",name:"コーラ",price:"３００円"},
        {id:5,src:drink04,alt:"drink04",name:"コーラ",price:"３００円"},
        {id:5,src:drink05,alt:"drink05",name:"コーラ",price:"３００円"},
        {id:5,src:drink06,alt:"drink06",name:"コーラ",price:"３００円"},
        {id:5,src:drink07,alt:"drink07",name:"コーラ",price:"３００円"},
        {id:5,src:drink08,alt:"drink08",name:"コーラ",price:"３００円"},
        {id:5,src:drink09,alt:"drink09",name:"コーラ",price:"３００円"},
        {id:5,src:drink10,alt:"drink10",name:"コーラ",price:"３００円"}
    ]
    const [id, setId] = useState(6);
    const menuSwitch = (id) => { 
        setId(id)
    }
    const headBarSelect = "menu";
    return (
        <>
            <HeadComponent headBarSelect={headBarSelect}/>
            <MenuContentComponent menuStyle={menuStyle} />
            <div className={menuStyle.foot}>
                <MenuBarComponent menuStyle={menuStyle} menuSwitch={menuSwitch} id={id}/>
                {id===1?<MenuFirstComponent menuStyle={menuStyle} menuAll={menuAll} id={id}/>:
                id===2?<MenuMainComponent menuStyle={menuStyle} menuAll={menuAll} id={id}/>:
                id===3?<MenuSideComponent menuStyle={menuStyle} menuAll={menuAll} id={id}/>:
                id===4?<MenuDessertComponent menuStyle={menuStyle} menuAll={menuAll} id={id}/>:
                id===5?<MenuDrinkComponent menuStyle={menuStyle} menuAll={menuAll} id={id}/>:
                <MenuAllComponent menuStyle={menuStyle} menuAll={menuAll}/>}
            </div>
            <FooterComponent />
        </>
    )
}


export default Menu