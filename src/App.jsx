import Navbar   from './components/Navbar'
import Hero     from './components/Hero'
import Products from './components/Products'
import About    from './components/About'
import Reviews  from './components/Reviews'
import Contact  from './components/Contact'
import Footer   from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Products />
        <About />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
