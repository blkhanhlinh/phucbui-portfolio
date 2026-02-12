import React from 'react'
import Expertise from '@/containers/about/expertise'
import Information from '@/containers/about/information'
import Introduction from '@/containers/about/introduction'
import Quote from '@/containers/about/quote'

function AboutPage() {
  return (
    <>
      <Introduction />
      <Quote />
      <Expertise />
      <Information />
    </>
  )
}

export default AboutPage
