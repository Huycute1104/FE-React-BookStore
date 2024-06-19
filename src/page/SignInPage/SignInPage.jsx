import React, { useState } from 'react';
import frontImg from '../../assets/images/frontImg.jpg';
import backImg from '../../assets/images/backImg.jpg';

const SignInPage = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#dedee8', padding: '30px' }}>
      <div className="container" style={{ position: 'relative', maxWidth: '850px', width: '100%', background: '#fff', padding: '40px 30px', boxShadow: '0 5px 10px rgba(0,0,0,0.2)', perspective: '2700px' }}>
        <input type="checkbox" id="flip" style={{ display: 'none' }} onChange={handleFlip} checked={isFlipped} />
        <div className="cover" style={{ position: 'absolute', top: 0, left: '50%', height: '100%', width: '50%', zIndex: 98, transition: 'all 1s ease', transformOrigin: 'left', transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(-180deg)' : 'rotateY(0)' }}>
          <div className="front" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%' }}>
            <img src={frontImg} alt="" style={{ position: 'absolute', height: '100%', width: '100%', objectFit: 'cover', zIndex: 10 }} />
            <div className="text" style={{ position: 'absolute', zIndex: 130, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span className="text-1" style={{ fontSize: '26px', fontWeight: 600, color: '#fff', textAlign: 'center' }}>Every new friend is a <br /> new adventure</span>
              <span className="text-2" style={{ fontSize: '15px', fontWeight: 500, color: '#fff', textAlign: 'center' }}>Let's get connected</span>
            </div>
          </div>
          <div className="back" style={{ position: 'absolute', top: 0, left: 0, height: '100%', width: '100%', transform: 'rotateY(180deg)', backfaceVisibility: 'hidden' }}>
            <img className="backImg" src={backImg} alt="" style={{ position: 'absolute', height: '100%', width: '100%', objectFit: 'cover', zIndex: 10 }} />
            <div className="text" style={{ position: 'absolute', zIndex: 130, height: '100%', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
              <span className="text-1" style={{ fontSize: '26px', fontWeight: 600, color: '#fff', textAlign: 'center' }}>Complete miles of journey <br /> with one step</span>
              <span className="text-2" style={{ fontSize: '15px', fontWeight: 500, color: '#fff', textAlign: 'center' }}>Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms" style={{ height: '100%', width: '100%', background: '#fff' }}>
          <div className="form-content" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div className="login-form" style={{ width: 'calc(50% - 25px)' }}>
              <div className="title" style={{ position: 'relative', fontSize: '24px', fontWeight: 500, color: '#333' }}>
                Login
                <div style={{ content: '', position: 'absolute', left: 0, bottom: 0, height: '3px', width: '25px', background: '#7d2ae8' }}></div>
              </div>
              <form action="#">
                <div className="input-boxes" style={{ marginTop: '30px' }}>
                  <div className="input-box" style={{ display: 'flex', alignItems: 'center', height: '50px', width: '100%', margin: '10px 0', position: 'relative' }}>
                    <i className="fas fa-envelope" style={{ position: 'absolute', color: '#7d2ae8', fontSize: '17px' }}></i>
                    <input type="text" placeholder="Enter your email" required style={{ height: '100%', width: '100%', outline: 'none', border: 'none', padding: '0 30px', fontSize: '16px', fontWeight: 500, borderBottom: '2px solid rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }} />
                  </div>
                  <div className="input-box" style={{ display: 'flex', alignItems: 'center', height: '50px', width: '100%', margin: '10px 0', position: 'relative' }}>
                    <i className="fas fa-lock" style={{ position: 'absolute', color: '#7d2ae8', fontSize: '17px' }}></i>
                    <input type="password" placeholder="Enter your password" required style={{ height: '100%', width: '100%', outline: 'none', border: 'none', padding: '0 30px', fontSize: '16px', fontWeight: 500, borderBottom: '2px solid rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }} />
                  </div>
                  <div className="text" style={{ fontSize: '14px', fontWeight: 500, color: '#333' }}><a href="#" style={{ textDecoration: 'none' }}>Forgot password?</a></div>
                  <div className="button input-box" style={{ marginTop: '40px' }}>
                    <input type="submit" value="Submit" style={{ color: '#fff', background: '#7d2ae8', borderRadius: '6px', padding: '10px 0', width: '100%', cursor: 'pointer', transition: 'all 0.4s ease' }} />
                  </div>
                  <div className="text sign-up-text" style={{ textAlign: 'center', marginTop: '25px' }}>Don't have an account? <label htmlFor="flip" style={{ color: '#5b13b9', cursor: 'pointer' }}>Signup now</label></div>
                </div>
              </form>
            </div>
            <div className="signup-form" style={{ width: 'calc(50% - 25px)' }}>
              <div className="title" style={{ position: 'relative', fontSize: '24px', fontWeight: 500, color: '#333' }}>
                Signup
                <div style={{ content: '', position: 'absolute', left: 0, bottom: 0, height: '3px', width: '20px', background: '#7d2ae8' }}></div>
              </div>
              <form action="#">
                <div className="input-boxes" style={{ marginTop: '30px' }}>
                  <div className="input-box" style={{ display: 'flex', alignItems: 'center', height: '50px', width: '100%', margin: '10px 0', position: 'relative' }}>
                    <i className="fas fa-user" style={{ position: 'absolute', color: '#7d2ae8', fontSize: '17px' }}></i>
                    <input type="text" placeholder="Enter your name" required style={{ height: '100%', width: '100%', outline: 'none', border: 'none', padding: '0 30px', fontSize: '16px', fontWeight: 500, borderBottom: '2px solid rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }} />
                  </div>
                  <div className="input-box" style={{ display: 'flex', alignItems: 'center', height: '50px', width: '100%', margin: '10px 0', position: 'relative' }}>
                    <i className="fas fa-envelope" style={{ position: 'absolute', color: '#7d2ae8', fontSize: '17px' }}></i>
                    <input type="text" placeholder="Enter your email" required style={{ height: '100%', width: '100%', outline: 'none', border: 'none', padding: '0 30px', fontSize: '16px', fontWeight: 500, borderBottom: '2px solid rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }} />
                  </div>
                  <div className="input-box" style={{ display: 'flex', alignItems: 'center', height: '50px', width: '100%', margin: '10px 0', position: 'relative' }}>
                    <i className="fas fa-lock" style={{ position: 'absolute', color: '#7d2ae8', fontSize: '17px' }}></i>
                    <input type="password" placeholder="Enter your password" required style={{ height: '100%', width: '100%', outline: 'none', border: 'none', padding: '0 30px', fontSize: '16px', fontWeight: 500, borderBottom: '2px solid rgba(0,0,0,0.2)', transition: 'all 0.3s ease' }} />
                  </div>
                  <div className="button input-box" style={{ marginTop: '40px' }}>
                    <input type="submit" value="Submit" style={{ color: '#fff', background: '#7d2ae8', borderRadius: '6px', padding: '10px 0', width: '100%', cursor: 'pointer', transition: 'all 0.4s ease' }} />
                  </div>
                  <div className="text sign-up-text" style={{ textAlign: 'center', marginTop: '25px' }}>Already have an account? <label htmlFor="flip" style={{ color: '#5b13b9', cursor: 'pointer' }}>Login now</label></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInPage;
