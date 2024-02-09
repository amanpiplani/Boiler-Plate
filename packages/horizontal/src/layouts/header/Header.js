import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SimpleBar from "simplebar-react";
import {
  Navbar,
  Nav,
  Input,
  NavbarBrand,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import MessageDD from "./MessageDD";
import NotificationDD from "./NotificationDD";
import user1 from "../../assets/images/users/user4.jpg";
import MegaDD from "./MegaDD";
import Logo from "../logo/Logo";
import {
  ToggleMiniSidebar,
  ToggleMobileSidebar,
} from "../../../store/customizer/CustomizerSlice";

import LogoDark from "../../assets/images/logos/dark-logo-icon.svg";
import ProfileDD from "./ProfileDD";
import { MessageSquare, Grid, Menu, Mail } from "react-feather";
import Image from "next/image";

const Header = () => {
  const isDarkMode = useSelector((state) => state.customizer.isDark);
  const topbarColor = useSelector((state) => state.customizer.topbarBg);
  const dispatch = useDispatch();
  return (
    <Navbar
      color={topbarColor}
      dark={!isDarkMode}
      light={isDarkMode}
      expand="lg"
      className="topbar"
    >
      {/********Logo*******/}
      <div className="d-none d-lg-flex align-items-center logo-space">
        <Logo />
        <Button
          close
          size="sm"
          className="ms-auto d-sm-block d-lg-none"
          onClick={() => dispatch(ToggleMobileSidebar())}
        />
      </div>
      {/******************************/}
      {/**********Toggle Buttons**********/}
      {/******************************/}
      <div className="d-flex align-items-center">
        <Button
          color={topbarColor}
          className="d-none d-lg-block mx-1  hov-dd border-0"
          onClick={() => dispatch(ToggleMiniSidebar())}
        >
          <Menu size={18} />
        </Button>
        <NavbarBrand href="/" className="d-sm-block d-lg-none">
          <Image src={LogoDark} alt="logo" />
        </NavbarBrand>
        <Button
          color={topbarColor}
          className="d-sm-block d-lg-none  hov-dd border-0 mx-1"
          onClick={() => dispatch(ToggleMobileSidebar())}
        >
          <Menu size={18} />
        </Button>
      </div>

      {/******************************/}
      {/**********Left Nav Bar**********/}
      {/******************************/}

      <Nav className="me-auto d-flex flex-row align-items-center" navbar>
        {/******************************/}
        {/**********Message DD**********/}
        {/******************************/}
        <UncontrolledDropdown className="mx-1 hov-dd">
          <DropdownToggle
            color={topbarColor}
            className="bg-transparent border-0"
          >
            <MessageSquare size={18} />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <div className="bg-primary p-3 text-white rounded-top">
              Notifications
            </div>
            <SimpleBar style={{ maxHeight: "350px" }}>
              <NotificationDD />
            </SimpleBar>
            <DropdownItem divider />
            <div className="p-2 px-3">
              <Button color="primary" size="sm" block>
                Check All
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
        {/******************************/}
        {/**********Notification DD**********/}
        {/******************************/}
        <UncontrolledDropdown className="mx-1 hov-dd">
          <DropdownToggle
            color={topbarColor}
            className="bg-transparent border-0"
          >
            <Mail size={18} />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <div className="bg-danger p-3 text-white rounded-top">Messages</div>
            <SimpleBar style={{ maxHeight: "350px" }}>
              <MessageDD />
            </SimpleBar>
            <DropdownItem divider />
            <div className="p-2 px-3">
              <Button color="danger" size="sm" block>
                Check All
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>

        {/******************************/}
        {/**********Mega DD**********/}
        {/******************************/}
        <UncontrolledDropdown className="mega-dropdown mx-1 hov-dd">
          <DropdownToggle
            className="bg-transparent border-0"
            color={topbarColor}
          >
            <Grid size={18} />
          </DropdownToggle>
          <DropdownMenu>
            <MegaDD />
          </DropdownMenu>
        </UncontrolledDropdown>
      </Nav>

      <div className="d-flex">
        {/******************************/}
        {/**********Profile DD**********/}
        {/******************************/}
        <Input
          type="search"
          placeholder="Search"
          className="rounded-pill d-md-block d-none mx-1 my-1"
        ></Input>
        <UncontrolledDropdown className=" hov-dd">
          <DropdownToggle color="transparent" style={{ lineHeight: "0px" }}>
            <Image
              src={user1}
              alt="profile"
              className="rounded-circle"
              width="40"
              height="40"
            />
          </DropdownToggle>
          <DropdownMenu className="ddWidth">
            <ProfileDD />
            <div className="p-2 px-3">
              <Button color="danger" size="sm">
                Logout
              </Button>
            </div>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    </Navbar>
  );
};

export default Header;
