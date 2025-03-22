function NoticeTableComponent({NoticeStyle}) {
    return (
        <div className={NoticeStyle.tb}>
            <table border="1">
                <tr>
                    <th>日期</th>
                    <th>お知らせ</th>
                </tr>
                <tr>
                    <td className={NoticeStyle.day}>2024/5/24</td>
                    <td className={NoticeStyle.textD}>「Bistro GROW」が有名な飲食店ガイドで２つ星を獲得！地元の食材を活かした創造的な料理が高く評価されました。</td>
                </tr>
                <tr>
                    <td className={NoticeStyle.day}>2024/3/28</td>
                    <td className={NoticeStyle.textD}>東京の中心部に位置する「Bistro GROW」が、多国籍料理を提供する新店舗をオープン！現代的なインテリアと伝統的な料理が融合。</td>
                </tr>
                <tr>
                    <td className={NoticeStyle.day}>2024/2/15</td>
                    <td className={NoticeStyle.textD}>「Bistro GROW」が持続可能な食材を使用した料理で、地域のエコ賞を受賞。地球に優しい飲食店として注目される。</td>
                </tr>
                <tr>
                    <td className={NoticeStyle.day}>2024/1/10</td>
                    <td className={NoticeStyle.textD}>「Bistro GROW」で提供される無添加料理が、健康志向の消費者から大絶賛。自然派レストランとしての地位を確立。</td>
                </tr>
                <tr>
                    <td className={NoticeStyle.day}>2023/11/20</td>
                    <td className={NoticeStyle.textD}>「Bistro GROW」のシェフが国際料理コンテストで最優秀賞を受賞。その革新的な料理手法が国際的に認められる。</td>
                </tr>
                <tr>
                    <td className={NoticeStyle.day}>2023/10/05</td>
                    <td className={NoticeStyle.textD}>「Bistro GROW」、アルコールフリーのペアリングメニューを開始。お酒を飲まない人々に向けた美食の提案が話題に。</td>
                </tr>
                <tr>
                    <td className={NoticeStyle.day}>2023/8/30</td>
                    <td className={NoticeStyle.textD}>「Bistro GROW」が参加する食のフェスティバルで、最も人気のあるブースに選ばれる。そのユニークな料理が来場者から絶賛された。</td>
                </tr>
                <tr>
                    <td className={NoticeStyle.day}>2023/7/15</td>
                    <td className={NoticeStyle.textD}>高級飲食店「Bistro GROW」が、新たなチームメンバーを迎え、さらにメニューの拡充を図る。地域の食材を生かした新しい料理が登場。</td>
                </tr>
                <tr>
                    <td className={NoticeStyle.day}>2023/6/04</td>
                    <td className={NoticeStyle.textD}>「Bistro GROW」が地域の伝統料理を再解釈したメニューで、旅行雑誌に特集される。伝統と革新が融合した料理が評価された。</td>
                </tr>
                <tr>
                    <td className={NoticeStyle.day}>2023/4/29</td>
                    <td className={NoticeStyle.textD}>「Bistro GROW」が社会的責任を果たすため、食品廃棄を削減するキャンペーンを開始。持続可能なレストラン運営を推進する。</td>
                </tr>
            </table>
        </div>
    )
}

export default NoticeTableComponent