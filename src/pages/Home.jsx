import React from 'react'
import '../styles/home.scss'
import HomeTopContainer from '../components/HomeTopContainer'
import HomeCardContainer from '../components/HomeCardContainer'
import HomeWhyVisit from '../components/HomeWhyVisit'
import HomWhatIsTheBest from '../components/HomWhatIsTheBest'
import HomeTicketExplaination from '../components/HomeTicketExplaination'
import HomeHighlights from '../components/HomeHighlights'
import HomeBuffetOption from '../components/HomeBuffetOption'
import HomeVisitPlan from '../components/HomeVisitPlan'
import HomeVisitorTips from '../components/HomeVisitorTips'
import HomeFaq from '../components/HomeFaq'

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