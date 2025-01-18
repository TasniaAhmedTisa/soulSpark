import { FaGoogle } from "react-icons/fa";
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from 'sweetalert2'
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";



function login() {
    const {googleSignIn, signIn} = useAuth()
    const navigate = useNavigate()
    const axiosPublic = useAxiosPublic()
    const location = useLocation()

    const from = location.state?.from?.pathname || "/";

     // Handle Google Sign-In with Popup
     const handleGoogleSignIn = () =>{
      googleSignIn()
      .then(result =>{
          console.log(result.user);
          const userInfo = {
              email: result.user?.email,
              name: result.user?.displayName
          }
          axiosPublic.post('/users', userInfo)
          .then(res =>{
              console.log(res.data);
              navigate(from, { replace: true });
          })
      })
    }
    const handleLogin = event =>{
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        console.log(email,password)
        signIn(email, password)
        .then(result => {
            const user = result.user
            console.log(user)
            Swal.fire({
              title: 'User Login Successful.',
              showClass: {
                  popup: 'animate__animated animate__fadeInDown'
              },
              hideClass: {
                  popup: 'animate__animated animate__fadeOutUp'
              }
          });
          navigate(from, { replace: true });
        })


}


        

  return (
    <div className='w-11/12 mx-auto'>
        <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" className="img-fluid md:mt-16 lg:mt-16" alt="Sample image" />
  </MDBCol>

  <MDBCol col='4' md='6'>

    <div className="d-flex flex-row align-items-center justify-content-center">

      <p className="mb-5 text-3xl font-bold">Login</p>


    </div>

    <form onSubmit={handleLogin}><MDBInput wrapperClass='mb-4' label='Email address' id='formControlLg' type='email' size="lg" name="email"/>
    <MDBInput wrapperClass='mb-4' label='Password' id='formControlLg' type='password' size="lg" name="password"/>

    <div className="d-flex justify-content-between mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <MDBBtn className="mb-0 px-5 w-100" size='lg'>Login</MDBBtn>
      <div className="divider d-flex align-items-center my-4">
      <p className="text-center fw-bold mx-3 mb-0">Or</p>
    </div>
    <MDBBtn onClick={handleGoogleSignIn} className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
          <MDBIcon fab icon="google" className="mx-2"/>
          Sign in with google
        </MDBBtn>
      <p className="small fw-bold mt-2 pt-1 mb-2">Don't have an account? <Link to={'/register'} className="link-danger">Register</Link></p>
    </div></form>

  </MDBCol>
  

</MDBRow>




</MDBContainer>
    </div>
  );
}

export default login;