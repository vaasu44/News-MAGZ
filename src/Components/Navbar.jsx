

const Navbar = ({setCategory}) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark fs-5">News<span className="text-decoration-line-through">MAGZ</span></span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 pointer fs-6 ">
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("technology")}  href="#" data-bs-toggle="tooltip" data-bs-title="Technology" >Technology</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("business")}>Business</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("health")}>Health</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("sports")}>Sports</div>
            </li>
            <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("science")}>Science</div>
        </li>
        <li className="nav-item">
          <div className="nav-link" onClick={()=>setCategory("entertainment")}>Entertainment</div>
        </li>              
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success " type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

export default Navbar