import { Hero, SearchBar, CustomFilter } from '@/components'


export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero></Hero>
      {/* add cars catalog section  */}
       <div className='mt-12 padding-x padding-y max-width'
       id="discover">
          <div className='home__text-container'>
            <h1 className='text-4xl font-extrabold'>
              Car Catalogue
            </h1>
            <p> Explore the cars you might like</p>
          </div>
          {/** add the filter section   */}
          <div className="home__filters">
            {/* add the search bar component */}
            <SearchBar />
            <div className='home__filter-container'>
              {/* add two custom filter component  */}
              <CustomFilter  title="fuel"/>
              <CustomFilter  title="year"/>
            </div>
          </div>
       </div>
    </main>
  )
}
