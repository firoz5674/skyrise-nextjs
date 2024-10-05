
import React from 'react'
import PageTopSection from '../../page-top-section'
import ContactDetails from './ContactDetails'
import ContactPageForm from './ContactPageForm'

const ContactMain = () => {
  return (
    <>
      <PageTopSection title="Contact Skyrise Construction & Interiors" subTitle="Want to hire us to get your dream home/office, contact us any time!" />
      <ContactDetails />
      <ContactPageForm />
    </>
  )
}

export default ContactMain