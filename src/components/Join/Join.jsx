import React, { useRef } from 'react'
import './Join.css'
import emailjs from '@emailjs/browser'

function Join() {
    const form = useRef()

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_zvl8uud', 'template_gem4nzg', form.current,
        '_wemJYbbbXUeMcyqJ',
      )
      .then(
        () => {
          alert('SUCCESS!');
        },
        (error) => {
          alert('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="join" id='join-us'>
        <div className="left-j">
            <hr />
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span>YOUR BODY</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">

            <form ref={form} action="" className="email-container" onSubmit={sendEmail}>
                <input type="email" name='user_email' placeholder='Enter your Email Address' />
                <button className='btn btn-join'>Join Now</button>
            </form>
        </div>
    </div>
  )
}

export default Join