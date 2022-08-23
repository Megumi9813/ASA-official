import React from 'react'
import Landing from '../components/Landing'
import SystemChart from '../components/SystemChart'
import Services from '../components/Services'
import Team from '../components/Team'
import Review from '../components/Review'
import Nav from '../components/Nav'

function Home({teachers}) {
  return (
    <>
      <Nav />
      <Landing />
      <Team teachers={teachers}/>
      <SystemChart />
      <Services />
      <Review />
    </>
  )
}

export default Home