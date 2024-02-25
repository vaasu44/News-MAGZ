
import setCategory from "./Navbar"
const Footer = () => {
  return (
    <footer className="bg-dark text-center text-lg-start text-white mt-5">
      <div className="row">
        <div className="container-fluid flex flex-wrap col-3">
          <div className="text-info fs-5 px-3 font-weight-bold">Follow Us on Social</div>
            <ul className="py-3 list-unstyled px-4 py-2">
              <li><i className='bx bxl-facebook-circle text-primary'></i> Facebook</li>
              <li><i className='bx bxl-instagram text-primary' ></i> Instagram</li>
              <li><i className='bx bxl-twitter text-primary' ></i> Twitter</li>
              <li><i className='bx bxl-linkedin-square text-primary' ></i> LinkedIn</li>
            </ul>
        </div>
        <div className="container-fluid flex flex-wrap col-3 font-weight-bold">
          <div className="text-info fs-5 px-3">Contents</div>
          <ul className="py-3 list-unstyled px-4 py-2 ">
            <li>Technology</li>
            <li>Business</li>
            <li>Health</li>
            <li>Sports</li>
            <li>Science</li>
            <li>Entertainment</li>
          </ul>
        </div>
        <div className="container-fluid flex flex-wrap col-4 font-weight-bold">
          <div className="text-info fs-5 px-3">About Us</div>
          <p className="py-4 px-2">Founded in 1998 in Noida, ABP Network has established itself as a vanguard in multi-lingual news delivery. The company’s forte lies in its comprehensive coverage, spanning news, entertainment, and digital services. As a top-tier news channel, ABP consistently resonates with Indian viewers, ensuring they stay informed and engaged in an ever-changing world.</p>
        </div>
      </div>
        
      
  </footer>


  )
}

export default Footer;
