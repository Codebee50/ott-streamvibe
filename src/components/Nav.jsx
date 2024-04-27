import { longLogo } from "../assets/icons"
import { hamburger } from "../assets/icons"
// import { navLinks } from "../constants"
// laptop-165px mobile-116
import { bell, searchicon } from "../assets/icons"

const Nav = (props) => {
  return (
    <header className="w-full flex flex-row items-center justify-between padding-x pt-4">
        <img src={longLogo} alt="Streamvibe logo" className="max-laptop:w-[165px] max-mobile:w-[116px]" />

        <nav className="bg-black06 pl-2 pr-6 py-4 rounded-[0.9rem] border-[3px] border-black10 max-tablet:hidden">
            <ul className="flex flex-row items-center gap-3 ">
                {
                    props.navLinks.map((navLink)=>(
                        <li key={navLink.label}><a href={navLink.link} className={`font-manrope text-gray75 text-[0.9rem] p-3 rounded-[0.5rem] ${props.page===navLink.label && 'bg-black10'}`}>{navLink.label}</a></li>
                    ))
                }
            </ul>
        </nav>

        <div className="flex flex-row items-center gap-6 max-tablet:hidden">
            <img src={searchicon} alt="" width={30}  className="cursor-pointer"/>
            <img src={bell} alt=""  width={30} className="cursor-pointer"/>
        </div>

        <div className="tablet:hidden" onClick={props.onOpenNav}>
            <img src={hamburger} alt="" />
        </div>
    </header>
  )
}

export default Nav