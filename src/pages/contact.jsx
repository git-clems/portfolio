import React, { useState, useRef } from 'react'
import Loading from '../components/loadingPage'
import { useNavigate } from 'react-router'
import { SendHorizontal } from 'lucide-react'

const Contact = () => {
  const recapRef = useRef()

  const [contact, setContact] = useState()
  const [loading, setLoading] = useState(false)
  const [send, setSend] = useState(false)
  const [objectCheck, setObjectCheck] = useState(false)
  const [errors, setErrors] = useState({})

  const handleErrors = () => {
    const newError = {}
    if (!contact.email?.trim()) newError.email = "Entrez votre courriel"
    if (!contact.fname?.trim()) newError.fname = "Entrez votre prénom"
    if (!contact.lname?.trim()) newError.lname = "Entrez votre nom de famille"
    if (!contact.message?.trim()) newError.message = "Entrez votre message"
    if (!contact.subject?.trim()) newError.message = "choisir un objet"

    setErrors(newError)
    return Object.keys(newError).length === 0
  }

  const inputHandler = (e) => {
    const { name, value } = e.target
    setContact({ ...contact, [name]: value })
  }

  const naviagate = useNavigate()

  const HandleSubmit = async (e) => {
    e.preventDefault()

    if (!handleErrors()) return

    setLoading(true)

    // await addDoc(collection(db, 'contact'), { ...contact, contactDate: Timestamp.fromDate(new Date()) })
    //   .then((res) => {
    //     setSend(true)
    //     setLoading(false)
    //   }).catch((res) => {
    //     setSend(false)
    //   })
  }

  const FormRecap = () => {
    return (
      <div className="page flex justify-center">
        <div className="w-full max-w-[700px] mt-5 mb-5">
          <div ref={recapRef} style={{ backgroundColor: 'white', borderColor: 'gray' }} className="w-full max-w-[700px] border-2 overflow-hidden rounded-md">
            <div className="p-3 flex justify-between bg-blue-200 text-black">
              <div>
                <h3>Message sent</h3>
                <p className="mt-1 opacity-90">
                  Your message has been sent successfully.
                </p>
              </div>
            </div>

            <div className="p-2">

              <div className="mt-1 space-y-3">
                <div style={{ borderColor: "rgba(0,0,0,0.3)" }} className="flex justify-between border-b pb-2 gap-3">
                  <span className="font-semibold">Name</span>
                  <span style={{ color: "rgba(0, 0, 0, 0.56)" }} >{contact.fname} {contact.lname.toUpperCase()}</span>
                </div>

                <div style={{ borderColor: "rgba(0,0,0,0.3)" }} className="flex justify-between border-b pb-2 gap-3">
                  <span className="font-semibold">Email</span>
                  <span style={{ color: "rgba(0, 0, 0, 0.56)" }}>{contact.email}</span>
                </div>

                <div style={{ borderColor: "rgba(0,0,0,0.3)" }} className="flex justify-between border-b pb-2 gap-3">
                  <span className="font-semibold">Tel</span>
                  <span style={{ color: "rgba(0, 0, 0, 0.56)" }}>{contact.tel}</span>
                </div>
              </div>

              <div className="mt-6">
                <h5 className="font-semibold mb-2">Subject</h5>
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.01)", color: 'gray' }} className="border-2 rounded-md p-2  whitespace-pre-line">
                  {contact.subject}
                </div>
              </div>

              <div className="mt-4">
                <h5 className="font-semibold mb-2">Votre message</h5>
                <div style={{ backgroundColor: "rgba(0, 0, 0, 0.01)", color: 'gray' }} className="border-2 rounded-md p-2  whitespace-pre-line">
                  {contact.message}
                </div>
              </div>

            </div>
          </div>
          <div className="mt-6 flex justify-between">

            <button
              type="button"
              onClick={() => {
                naviagate('/')
              }}
              className="btn btn-primary m-2"
            >
              Revenir à l'accueil
            </button>
          </div>
        </div>
      </div>
    )
  }

  if (send) { return <FormRecap></FormRecap> }

  if (loading) { return <Loading></Loading> }

  return (
    <div className="page flex justify-center">
      <div className="mb-5 mt-5">
        <h5 className="ml-3 mr-3">Would you like to contact me?</h5>

        <p className='ml-3 mb-3 text-[var(--text-2)]'>Fields marked with <span className="text-red-500"> * </span> are required.</p>

        <form action="" className='w-[100%] max-sm:w-85 border-2 border-blue-400 rounded-xl min-sm:p-3 max-sm:p-1 duration-200' onSubmit={HandleSubmit}>
          <div className='flex max-sm:flex-col justify-around min-sm:mb-4'>
            <div className='flex flex-column m-1'>
              <label htmlFor="fname">First name <span className='text-red-500'> * </span></label>
              <input name='fname' type="text" onChange={inputHandler} placeholder="John" className="mt-2 w-full rounded-lg border-2 border-gray-200 px-2 py-2.5 text-sm text-[var(--text-color)] placeholder:text-gray-400 shadow-sm outline-none transition duration-200 " required />
            </div>
            <div className='flex flex-column m-1'>
              <label htmlFor="lname">Last name<span className='text-red-500'> * </span></label>
              <input name='lname' type="text" onChange={inputHandler} placeholder="THOMSON" className="mt-2 w-full rounded-lg border-2 border-gray-200 px-2 py-2.5 text-sm text-[var(--text-color)] placeholder:text-gray-400 shadow-sm outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30" required />
            </div>
          </div>
          <div className='flex max-sm:flex-col justify-around min-sm:mb-4'>
            <div className='flex flex-column m-1'>
              <label htmlFor="email">Email <span className='text-red-500'> * </span></label>
              <input type="email" name='email' onChange={inputHandler} placeholder="Email" className="mt-2 w-full rounded-lg border-2 border-gray-200 px-2 py-2.5 text-sm text-[var(--text-color)] placeholder:text-gray-400 shadow-sm outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30" required />
            </div>
            <div className='flex flex-column m-1'>
              <label htmlFor="tel">Tél<span className='text-red-500'> * </span></label>
              <input type="tel" name='tel' onChange={inputHandler} placeholder="+33 (0) 6 12 34 56 78 " className="mt-2 w-full rounded-lg border-2 border-gray-200 px-2 py-2.5 text-sm text-[var(--text-color)] placeholder:text-gray-400 shadow-sm outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30" required />
            </div>
          </div>
          <div className='flex flex-col justify-around min-sm:mb-4'>
            <div className='flex flex-column m-1'>
              <label htmlFor="subject">Subject <span className='text-red-500'> * </span></label>
              <input type="text" name='subject' onChange={inputHandler} placeholder="Subject" className="mt-2 w-full rounded-lg border-2 border-gray-200 px-2 py-2.5 text-sm text-[var(--text-color)] placeholder:text-gray-400 shadow-sm outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30" required />
            </div>
            <div className='flex flex-column m-1'>
              <label htmlFor="message">Message<span className='text-red-500'> * </span></label>
              <textarea type="text" name='message' onChange={inputHandler} placeholder="Write your message..." className="mt-2 w-full rounded-lg border-2 border-gray-200 px-2 py-2.5 text-sm text-[var(--text-color)] placeholder:text-gray-400 shadow-sm outline-none transition duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30" required />
            </div>
          </div>
          <div className='flex justify-content-end'>
            <button type="submit" class="hover:bg-blue-400 h-12 p-2 rounded bg-blue-500 text-[var(--text-color)]">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact