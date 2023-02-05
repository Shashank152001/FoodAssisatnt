import {Link} from 'react-router-dom'
function About() {
    return (
        <>
            <div className="container-fluid bg-light">
                <div className="row text-center mt-3">
                <h2 className="text-secondary"><u>About us</u></h2>
                    <div className="col-md-6">
                    <img src="/images/food1.jpg" className='img-fluid mx-auto d-block w-80 h-80' alt="" />
                    </div>
                
                    <div className="col-md-6">
                        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptate aliquam dicta numquam eligendi illo doloremque ad ab. Voluptatibus dignissimos in inventore distinctio ullam animi eius accusantium repudiandae, eligendi dolorem laudantium minus, consectetur aliquam, cupiditate voluptatum et vel eveniet. Fugiat?</h4> <br />
                        <Link to='/aboutus'><button className="btn btn-primary mt-2">Read More</button></Link>
                    </div>
                    </div>
            </div>
        </>
    );
}

export default About;