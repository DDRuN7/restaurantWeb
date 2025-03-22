import HeadComponent from '../component/HeadComponent'
import HomeContentComponent from '../component/HomeContentComponent'
import FooterComponent from '../component/FooterComponent'
function Home() {
  const headBarSelect = "123";
  return (
    <>
    <HeadComponent headBarSelect={headBarSelect}/>
    <HomeContentComponent/>
    <FooterComponent/>
    </>
  )
}

export default Home
