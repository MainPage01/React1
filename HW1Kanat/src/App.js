import './App.css';








function Header() {
  return (
    <div>
      <h2> It is the header of this project </h2>
      <Navigation />
    </div>

  )
}
function Navigation() {
  return (
    <ul>
      <h2>
        NAVIGAITON
      </h2>
      <li>
        Contacts
      </li>
      <li>
        Address
      </li>
      <li>

      </li>
    </ul>
  )
}

function AboutUS() {
  return (
    <h1 className='black'>
      <div className='border'>
        <h1>About US
          _______
        </h1>
      we bring new solutions to everyoone
      we can solve any problem

      </div>
      <p className='black'>
      </p>
    </h1>

  )
}


function Footer() {
  return (
    <div>
      <h1> It is the footer of this project</h1>
    </div>
  )
}
function App() {
  return (
    <div className="container">
      <Header />
      <AboutUS />

      it was made in us lorem lorem loremfihewuifhueiwahcdsufh hjwaefiluewrhqoi rhl shadkjhwe uilh uih
      <Footer />
    </div>
  )
}

export default App;
