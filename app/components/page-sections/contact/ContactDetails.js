
import Link from 'next/link'
import React from 'react'
import EnvelopeIcon from '../../svg-icons/envelope-icon'
import PhoneIcon from '../../svg-icons/phone-icon'
import LocationIcon from '../../svg-icons/location-icon'

const ContactDetails = () => {
  return (
    <section className="py-0 lg:pt-[90px] lg:pb-[150px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-[9rem]">Our Contact Details</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <div className="bg-button-gradient px-8 pb-12 pt-24 relative rounded-lg text-center mb-20 lg:mb-16 xl:mb-0">
            <div className="w-[115px] h-[115px] rounded-full bg-white flex justify-center items-center shadow-main-shadow absolute left-[35%] top-[-22%] z-10">
              <LocationIcon size={44} color="#5E36F2" />
            </div>
            <h4 className="mb-4 text-white">Our Location</h4>
            <p className="text-[18px] text-white">C 373 Ground Floor DDA Flats jasola vihar Sarita Vihar , New Delhi 110025</p>
          </div>
          <div className="bg-button-gradient px-8 pb-12 pt-24 relative rounded-lg text-center mb-20 lg:mb-16 xl:mb-0">
            <div className="w-[115px] h-[115px] rounded-full bg-white flex justify-center items-center shadow-main-shadow absolute left-[35%] top-[-22%] z-10">
              <EnvelopeIcon size={44} color="#5E36F2" />
            </div>
            <h4 className="mb-4 text-white">Contact by Email</h4>
            <Link className="text-[18px] text-white" href="mailto:skyrise30@gmail.com" target="_blank">skyrise30@gmail.com</Link>
          </div>
          <div className="bg-button-gradient px-8 pb-12 pt-24 relative rounded-lg text-center mb-20 lg:mb-16 xl:mb-0">
            <div className="w-[115px] h-[115px] rounded-full bg-white flex justify-center items-center shadow-main-shadow absolute left-[35%] top-[-22%] z-10">
              <PhoneIcon size={44} color="#5E36F2" />
            </div>
            <h4 className="mb-4 text-white">Contact by Phone</h4>
            <Link className="text-[18px] text-white mb-2 inline-block" href="tel:919312148849" target="_blank">+91-9312-1488-49</Link>
            <Link className="text-[18px] text-white block" href="tel:917291994355" target="_blank">+91-7291-9943-55</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactDetails