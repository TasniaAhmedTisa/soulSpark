import { FaGoogle } from "react-icons/fa";
import {MDBContainer, MDBCol, MDBRow, MDBBtn, MDBIcon, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";


const  Register = () => {

    const {register, handleSubmit, formState: {errors}} = useForm()
    const {createUser} = useContext(AuthContext)
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
        .then(result =>{
          const loggedUser = result.user
          console.log(loggedUser)
        })
      }

  return (
    <div className='w-11/12 mx-auto'>
        <MDBContainer fluid className="p-3 my-5 h-custom">

<MDBRow>


  <MDBCol col='4' md='6'>

    <div className="d-flex flex-row align-items-center justify-content-center">

      <p className="mb-5 text-3xl font-bold">Register Now</p>


    </div>
    <form onSubmit={handleSubmit(onSubmit)}>
    <MDBCol col='6'>
              <MDBInput wrapperClass='mb-4' placeholder='User name' id='formControlLg' label= {errors.name && <span className="text-red-600">This field is required</span>}
 type='text' name="name" {...register("name",{ required: true })}/>
            </MDBCol>

    <MDBInput wrapperClass='mb-4' label= {errors.email && <span className="text-red-600">Email is required</span>} placeholder='Email address' id='formControlLg' type='email' size="lg" name="email" {...register("email", { required: true })}/>
    <MDBInput wrapperClass='mb-4' placeholder='Password' id='formControlLg' type='password' size="lg" name="password" {...register("password", { required: true,minLength:6, maxLength: 20 })}/>
    {errors.password?.type === 'required' && <span className="text-red-600">Password is required</span>}

    {errors.password?.type === 'minLength' && <span className="text-red-600">Password must be 6 characters</span>}


    <div className="d-flex justify-content-between mb-4 mt-8">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

    <div className='text-center text-md-start mt-4 pt-2'>
      <div>
        <input type="submit" value="Sign Up" className="btn btn-primary mb-0 px-5 w-100" size='lg' />

      </div>
      <div className="divider d-flex align-items-center my-4">
      <p className="text-center fw-bold mx-3 mb-0">Or</p>
    </div>
    <MDBBtn className="mb-2 w-100" size="lg" style={{backgroundColor: '#dd4b39'}}>
          <MDBIcon fab icon="google" className="mx-2"/>
          Sign in with google
        </MDBBtn>
      <p className="small fw-bold mt-2 pt-1 mb-2">Already have an account? <Link to={'/login'} className="link-danger">Login</Link></p>
    </div>
    </form>

  </MDBCol>

  <MDBCol col='10' md='6'>
    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp" class="img-fluid md:mt-16 lg:mt-20" alt="Sample image" />
  </MDBCol>
  

</MDBRow>




</MDBContainer>
    </div>
  );
}

export default Register;