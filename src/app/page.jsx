import BuyCarCard        from '@/components/BuyCarCard/BuyCarCard'
import FeaturedComponent from '@/components/FeaturedComponent/FeaturedComponent'
import FeaturedNewsCard  from '@/components/FeaturedNewsCard/FeaturedNewsCard'
import FilterComponent   from '@/components/FilterComponent/FilterComponent'
import FooterComponent   from '@/components/FooterComponent/FooterComponent'
import HeroComponent     from '@/components/HeroComponent/HeroComponent'
import NewsComponent     from '@/components/NewsComponent/NewsComponent'
import ServicesComponent from '@/components/ServicesComponent/ServicesComponent'
import React             from 'react'

const page = () => {
  return (
    <div className='bg-white min-h-screen w-full'>
      {/* Reserved space for Navbar - adjust height based on your navbar */}
      <div className='h-16 md:h-20' />
      
      <HeroComponent />
      <FilterComponent />
      <ServicesComponent />
      {/* <RentCarCard /> */}
      {/* <BuyCarCard /> */}
      {/* <FeaturedNewsCard/> */}
      <FeaturedComponent />
      <NewsComponent />
      <FooterComponent/>
    </div>
  )
}

export default page
