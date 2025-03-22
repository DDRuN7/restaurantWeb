import HeadComponent from "../component/HeadComponent";
import FooterComponent from "../component/FooterComponent";
import NoticeTableComponent from "../component/NoticeTableComponent";
import NoticeStyle from "../css/Notice.module.css";
function Notice() {
    const headBarSelect = "notice";
    return (
        <>
            <HeadComponent headBarSelect={headBarSelect} />
            <NoticeTableComponent NoticeStyle={NoticeStyle}/>
            <FooterComponent />
        </>
    )
}

export default Notice