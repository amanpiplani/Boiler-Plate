import React from "react";
import Image from "next/image";
import { Button, Nav } from "reactstrap";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import SimpleBar from "simplebar-react";
import SidebarData from "../sidebardata/SidebarData";
import NavItemContainer from "./NavItemContainer";
import NavSubMenu from "./NavSubMenu";
import user1 from '../../../assets/images/users/user4.jpg';

const Sidebar = () => {
  const location = useRouter();
  const currentURL = location.pathname.split("/").slice(0, -1).join("/");

  //const [collapsed, setCollapsed] = useState(null);
  // const toggle = (index) => {
  //   setCollapsed(collapsed === index ? null : index);
  // };

  const activeBg = useSelector((state) => state.customizer.sidebarBg);
  const isFixed = useSelector((state) => state.customizer.isSidebarFixed);
  const dispatch = useDispatch();

  return (
    <div
      className={`sidebarBox shadow bg-${activeBg} ${
        isFixed ? "fixedSidebar" : ""
      }`}
    >
      <SimpleBar style={{ height: "100%" }}>
      <div className="py-3 px-4 d-flex align-items-center border-bottom-sidebar">
          <Image src={user1} alt="user" width="30" height="30" className="rounded-circle" />
          <div className="ms-3 opacity-75 text-truncate user-name">John Deo</div>
        </div>
        {/********Sidebar Content*******/}
        <div className="p-3 pt-1 mt-2">
          <Nav vertical className={activeBg === "white" ? "" : "lightText"}>
            {SidebarData.map((navi) => {
              if (navi.caption) {
                return (
                  <div className="navCaption text-uppercase mt-4" key={navi.caption}>
                    {navi.caption}
                  </div>
                );
              }
              if (navi.children) {
                return (
                  <NavSubMenu
                    key={navi.id}
                    icon={navi.icon}
                    title={navi.title}
                    items={navi.children}
                    suffix={navi.suffix}
                    suffixColor={navi.suffixColor}
                    // toggle={() => toggle(navi.id)}
                    // collapsed={collapsed === navi.id}
                    isUrl={currentURL === navi.href}
                  />
                );
              }
              return (
                <NavItemContainer
                  key={navi.id}
                  //toggle={() => toggle(navi.id)}
                  className={
                    location.pathname === navi.href ? "activeLink" : ""
                  }
                  to={navi.href}
                  title={navi.title}
                  suffix={navi.suffix}
                  suffixColor={navi.suffixColor}
                  icon={navi.icon}
                />
              );
            })}
          </Nav>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Sidebar;
