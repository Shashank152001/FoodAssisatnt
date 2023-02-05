import { Link, useNavigate } from 'react-router-dom'
import { LoginContext } from '../LoginContext'
import { useContext } from 'react'
// import UserHeader from './UserHeader'

function Header() {
    const { userLoginName, setuserLoginName, userLoginStatus, setuserLoginStatus } = useContext(LoginContext)
    
    const navigate = useNavigate()
    function handleLogout() {
        setuserLoginName(localStorage.removeItem('userLoginName'))
        setuserLoginStatus(localStorage.removeItem('userLoginStatus'))
        
        
        console.log('hello')
        navigate('/')
    }
    return (
        
        
        <section id='header'>
            <div className="container-fluid bg-light">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="container-fluid">
                                <Link className="navbar-brand fs-3 fw-bold" to="/">Nutrition Assistant</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                                        {userLoginStatus?
                                            <>
                                            <li className="nav-item">
                                                    <Link className="nav-link" aria-current="page" to="/aboutus">AboutUs</Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link" to="/services">Services</Link>
                                            </li>
                                                <li className="nav-item">
                                                    <Link className="nav-link" aria-current="page" to="/userdashboard">Welcome {userLoginName}</Link>
                                                </li>
                                                {/* <li className="nav-item">
                                                    <Link className="nav-link" to="/login">Login</Link>
                                                </li> */}
                                                <li className="nav-item">
                                                    <button onClick={handleLogout} className='btn btn-danger text-light nav-link float-end'>Logout</button>
                                                </li>
                                            </>
                                            :
                                            <>
                                            <li className="nav-item">
                                                    <Link className="nav-link" aria-current="page" to="/aboutus">AboutUs</Link>
                                                </li>
                                                <li className="nav-item">
                                                <Link className="nav-link" to="/services">Services</Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link className="nav-link" to="/reg">SignUp</Link>
                                            </li>
                                            </>
                                        }
                                    </ul>
                                    
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </section>
       
       
       
       
    );
}

export default Header;