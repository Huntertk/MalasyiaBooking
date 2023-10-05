import React from 'react'
import '../styles/home.scss'
import {
    HomeTopContainer,
    HomeCardContainer,
    HomeWhyVisit,
    HomWhatIsTheBest,
    HomeTicketExplaination,
    HomeHighlights,
    HomeBuffetOption,
    HomeVisitPlan,
    HomeVisitorTips,
    HomeFaq
} from '../components/index'

const Home = () => {
  return (

     <section className='homeMainContainer'>
      <HomeTopContainer />
      <HomeCardContainer />
      <HomeWhyVisit />
      <HomWhatIsTheBest />
      <HomeTicketExplaination />
      <HomeHighlights />
      <HomeBuffetOption />
      <HomeVisitPlan />
      <HomeVisitorTips />
      <HomeFaq />
     </section>
  )
}

export default Home