import React, { useEffect, useState, useRef } from 'react'
import ThankYou from './Comps/ThankYou'
import { useGlobalContext } from '../context'
import emailjs from '@emailjs/browser';
import './Contact.css'


function Contact() {


  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [isFormSubmitted, setIsFormSubmited] = useState(false)
  const nameInput = useRef(null)
  const emailInput = useRef(null)
  const messageInput = useRef(null)
  const form = useRef();
  const { renderComp, handleRenderComp } = useGlobalContext()

  useEffect(() => {
    handleRenderComp()
  }, [])

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
    console.log(email, name)
    if (name && email && message) {
      setIsFormSubmited(true)
      sendEmail()
      const getFormBack = setTimeout(() => {
        setIsFormSubmited(false)
      }, 5000);
      return () => {
        setName('')
        setEmail('')
        setMessage('')
        clearTimeout(getFormBack)
      }
    } else {
      if (name === '') {
        nameInput.current.className = 'form-input input-error'
      }
      if (email === '') {
        emailInput.current.className = 'form-input input-error'
      }
      if (message === '') {
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
              onChange={(e) => setName(e.target.value)} value={name} />

            <input className='form-input'
              ref={emailInput}
              type="text" name="email" placeholder='Email'
              onChange={(e) => setEmail(e.target.value)} value={email} />

            <textarea className='form-input' name='message'
              ref={messageInput}
              placeholder='Your message' cols='50' rows='5' onChange={(e) => setMessage(e.target.value)} value={message}>
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
