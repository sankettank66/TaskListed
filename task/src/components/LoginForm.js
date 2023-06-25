import React from 'react';
import SVG from './SVG';
import SVG2 from './SVG2';
const LoginForm = () => {
    

    return (
        <div className="flex right-side">
            <div className='second-container'>
                <div className="nese">
                    <div className="sign">Sign in</div>
                    <span className="Second-para">Sign in to your account</span>
                </div>
                <div className="btns">
                    <button className="btn1">
                        <div className="googleLogo"><SVG /></div>
                        Sign in with Google
                    </button>
                    <button className="btn2">
                        <div className="appleLogo"><SVG2 /></div>
                        Sign in with Apple
                    </button>
                </div>
                <div id="card">
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" autoComplete='email' placeholder='johndoe@gmail.com' />
                                <label htmlFor="exampleInputEmail1">Password</label>
                                <input type="password" className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" autoComplete='password' placeholder='Enter Your Password' />
                                <div id="link">
                                    <a href="./" className='link'>Forgot password?</a>
                                </div>
                            </div>
                            <button type="submit" value='Submit' className="btn">Submit</button>
                        </form>
                    </div>
                </div>
                <div className='LastDiv text-center'>
                    Don’t have an account? <a className='link' href='/'>Register here</a>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
