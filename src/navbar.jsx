function Navbar(){
  return(
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <a className="navbar-brand" href="#">Donate</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                About us
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#mission">Our Mission</a></li>
                <li><a className="dropdown-item" href="#service">Service</a></li>
                <li><a className="dropdown-item" href="#team">Team</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#donate">Donate Now</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact">Contact</a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">FAQ</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
export default Navbar