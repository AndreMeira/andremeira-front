import ScrollToTop from '@/components/Base/ScrollTop'
import Footer from '@/components/Footer/Footer'
import Container from '@/components/Layout/Container'
import Navigation from '@/components/Navigation/Navigation'
import SplashScreen from '@/components/SplashScreen/SplashScreen'

import './App.scss'
import Router from './Router'

export default function App() {
  return (
    <div className='app-container'>
      <div className='nav-container'>
        <Container>
          <Navigation></Navigation>
        </Container>
      </div>
      <ScrollToTop></ScrollToTop>
      <Router></Router>
      <div className='footer-container'>
          <Container>
            <Footer></Footer>
          </Container>
      </div>
      <SplashScreen></SplashScreen>
    </div>
  )
}
