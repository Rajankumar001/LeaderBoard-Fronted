import React from 'react';
import './Navbar.css';
function Navbarpage() {
  return (
    <>
   <nav className="navbar navbar-expand-lg "collapseOnSelect expand="lg" bg='light' variant='light' >
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span>Angel-Thon 5.0</span>LeaderBoard</a>
    <div className="collapse navbar-collapse" id="navbarNav" style={{height:"120px"}}>
    </div>
  </div>
</nav>
</>
  );
}

export default Navbarpage;
