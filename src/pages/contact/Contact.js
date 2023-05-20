import React, { useEffect, useState, useRef } from 'react'
import ThankYou from '../../components/thank-you/ThankYou'
import { useGlobalContext } from '../../hooks/context'
import emailjs from '@emailjs/browser';
import './Contact.css'


function Contact() {

  const [user, setUser] = useState({
    email: '',
    name: '',
    message: ''
  })
  const [isFormSubmitted, setIsFormSubmited] = useState(false)
  const nameInput = useRef(null)
  const emailInput = useRef(null)
  const messageInput = useRef(null)
  const form = useRef();
  const { renderComp, handleRenderComp } = useGlobalContext()

  useEffect(() => {
    handleRenderComp()
  }, [handleRenderComp])

  const sendEmail = (e) => {
    emailjs.sendForm('service_dzcqyzb', 'template_w0e151o', form.current, 'DpCplzOGb7H1ISpsa')
      .then((result) => {
          console.log('Success', result.text);
      }, (error) => {
          console.log('Error', error.text);
      });
  };


  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (user.name && user.email && user.message) {
      setIsFormSubmited(true)
      sendEmail()
      const getFormBack = setTimeout(() => {
        setIsFormSubmited(false)
      }, 5000);
      return () => {
        setUser({name: '', email: '', message: ''})
        clearTimeout(getFormBack)
      }
    } else {
      if (user.name === '') {
        nameInput.current.className = 'form-input input-error'
      }
      if (user.email === '') {
        emailInput.current.className = 'form-input input-error'
      }
      if (user.message === '') {
        messageInput.current.className = 'form-input input-error'
      }
    }
    
  }

  return (
    <main className={`contact-main ${renderComp && 'contact-main-active'}`}>
      <h1 className='contact-intro-title'>Contact</h1>
      {
        !isFormSubmitted ?
          <form action="" onSubmit={handleFormSubmit} ref={form}>

            <input className='form-input'
              ref={nameInput}
              type="text" name="name" placeholder='Name'
              onChange={(e) => setUser({name: e.target.value})} value={user.name} />

            <input className='form-input'
              ref={emailInput}
              type="text" name="email" placeholder='Email'
              onChange={(e) => setUser({email: e.target.value})} value={user.email} />

            <textarea className='form-input' name='message'
              ref={messageInput}
              placeholder='Your message' cols='50' rows='5' onChange={(e) => setUser({message: e.target.value})} value={user.message}>
            </textarea>
           
              <button type='submit' className='contact-form-btn'>
                SEND
              </button>
            
          </form>
          :
          <ThankYou isFormSubmitted={isFormSubmitted}/>
      }

    </main>
  )
}

export default Contact
