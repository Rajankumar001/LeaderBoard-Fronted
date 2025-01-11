import React from 'react';
import './Navbar.css';
function Navbarpage() {
  return (
    <>
   <nav className="navbar navbar-expand-lg "collapseOnSelect expand="lg" bg='light' variant='light' >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span>Angel-Thon 5.0</span>LeaderBoard</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
      </button> */}
    <div className="collapse navbar-collapse" id="navbarNav" style={{height:"120px"}}>
      {/* <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Signin</a>
        </li>
      </ul> */}
    </div>
  </div>
</nav>
</>
  );
}

export default Navbarpage;
