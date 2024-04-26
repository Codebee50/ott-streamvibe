import ScreenCard from "../components/ScreenCard"
import SectionHeader from "../components/SectionHeader"
import { screensList } from "../constants"

const ScreensShowcase = () => {
  return (
    <section className="w-full bg-page-black padding-x pb-10">
      <SectionHeader largeText={'We Provide you streaming experience across various devices.'} smallText={'With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment.'} />
      <div className="mt-9 w-full  grid grid-cols-1 mobilelg:grid-cols-2 tablet:grid-cols-3 gap-10">
          {
            screensList.map((screen)=>(
              <ScreenCard key={screen.label} {...screen}/>
            ))
          }
      </div>
    </section>
  )
}

export default ScreensShowcase