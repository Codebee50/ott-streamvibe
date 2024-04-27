
import { Drawer } from "antd";
import { IoMdClose } from "react-icons/io";

const NavDrawer = (props) => {

  return (
    <Drawer
      onClose={props.onClose}
      open={props.open}
      title="OTT Streamvibe"
      style={{ backgroundColor: "#0F0F0F" }}
      headerStyle={{ display: "none" }}
    >
      <div className="w-full flex flex-row justify-end">
        <div
          onClick={props.onClose}
          className="w-max bg-black10 text-white cursor-pointer p-3 flex shrink-0 rounded-md border-[3px] border-strokeBlack"
        >
          <IoMdClose size={"1.5em"} />
        </div>
      </div>

      <ul className="flex flex-col gap-10 h-full mt-10 ">
        {props.navLinks.map((navLink) => (
          <li key={navLink.label}>
            <a
              href={navLink.link}
              className={`focus:text-red45 font-manrope text-gray75 text-[0.9rem] p-3 rounded-[0.5rem]`}
            >
              {navLink.label}
            </a>
          </li>
        ))}
      </ul>
    </Drawer>
  );
};

export default NavDrawer;
