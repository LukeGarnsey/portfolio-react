import { Link, useLocation } from 'react-router-dom';
export default function NavBar(){
  const currentPage = useLocation().pathname;
  console.log(currentPage);
  return (
    <nav className="navbar navbar-expand navbar-light bg-app-yellow">
      <div className="container">
        <a className="navbar-brand" href="#">Luke Garnsey</a>
        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        {/* <div className="collapse navbar-collapse container" id="navbarNavAltMarkup"> */}
          <div className="navbar-nav">
            <Link className="nav-item nav-link" to="/">
              <span className= {CheckCurrentPage("/")}>About</span></Link>
            <Link className="nav-item nav-link" to="/Portfolio">
            <span className={CheckCurrentPage("/Portfolio")}>Portfolio</span></Link>
            <Link className="nav-item nav-link" to="/Resume">
            <span className={CheckCurrentPage("/Resume")}>Resume</span></Link>
            <Link className="nav-item nav-link" to="/Contact">
            <span className={CheckCurrentPage("/Contact")}>Contact</span></Link>
          </div>
        {/* </div> */}
      </div>
    </nav>
  );
}

function CheckCurrentPage(myURL){
  return useLocation().pathname === myURL?"bg-app-blue text-app-black p-2":"text-app-blue p-2";
}