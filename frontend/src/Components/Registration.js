import { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
function Registration() {
    // Set all the useStates 
    const navigate=useNavigate()
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')


    function hanleSubmit(e) {
        e.preventDefault()
        console.log(email,username, password)
        const regdata = { email,username, password };
        fetch('/api', {
            method:'POST',
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(regdata)
        }).then((res) => {
                return res.json()
            }).then((data) => {
                // console.log(data);
                if (data.username) {
                    navigate('/login')
                    toast.success('Account Successfully Created!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                    setMessage("User created Successfully!")
                } else if (data.message) {
                    toast.error('User already exist!', {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                    setMessage("User already exist")
                } else {
                    toast.error('Something went wrong!', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                        });
                    setMessage("Something went wrong!")
                }
            })
    }
    return (
        <>
            <section id="reg">
                <div className="container bg-light mt-3">
                    <div className="row ">
                        <div className="col-md-8"><img className='img-fluid' src='/images/login.webp' style={{ width: '600px', height: '450px', marginLeft: '30px' }} alt='logo' /></div>
                        <div className="col-md-4 pe-5">
                            <div className="text-center text-primary"><h2>Register Here!</h2></div>
                            <div className="text-center text-dark"><h5>{message}</h5></div>

                            <form method='post' onSubmit={(e)=>{ hanleSubmit(e)}}>
                            <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email"
                                        value={email}
                                        onChange={(e)=>{ setEmail(e.target.value)}}
                                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your data with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Username</label>
                                    <input type="text"
                                        value={username}
                                        onChange={(e)=>{setUsername(e.target.value)}}
                                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    <div id="emailHelp" className="form-text">We'll never share your data with anyone else.</div>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input type="password"
                                        value={password}
                                        onChange={(e)=>{setPassword(e.target.value)}}
                                        className="form-control" id="exampleInputPassword1" />
                                </div>
                                <button type="submit" className="btn btn-primary form-control">Register</button>
                                <div className="mt-3">
                                    <Link to="/login">Already have an account! Login here!</Link>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}

export default Registration;