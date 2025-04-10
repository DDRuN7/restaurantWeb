import logo1 from '../images/icon/logo1.png'
import { Link } from 'react-router-dom'
function MenuHeadComponent() {
    return (
        <header>
            <div className="headerL">
                <div className="logo">
                    <Link to = "/"><img src={logo1} alt=""/></Link>
                </div>
            </div>
            <ul className="headerM">
                <li>
                    <a href="/menu" className='current'>メニュー</a>
                </li>
                <li><a href="./introduction.html">店の紹介文</a></li>
                <li><a href="./Introduction chef.html">料理長の紹介</a></li>
                <li><a href="./notice.html">お知らせ</a></li>
            </ul>
        </header>
    )
}

export default MenuHeadComponent