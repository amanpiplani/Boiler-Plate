import * as Icon from "react-feather";

const SidebarData = [
  { caption: "Home" },
  {
    title: "Starter Page",
    href: "/dashboards",
    id: 1,
    icon: <Icon.Home />,
    collapisble: false,
  },
  {
    title: "DD Menu",
    href: "/dashboards",
    id: 1,
    icon: <Icon.Disc />,
    collapisble: false,
    children: [
      {
        title: "Simple DD 1",
        href: "/",
        icon: <Icon.Disc />,
        id: 1.1,
        collapisble: false,
      },
      {
        title: "Simple DD 2",
        href: "/",
        icon: <Icon.Disc />,
        id: 1.2,
        collapisble: false,
      },
      {
        title: "Simple DD 3",
        href: "/",
        icon: <Icon.Disc />,
        id: 1.3,
        collapisble: false,
      },
    ],
  },
];

export default SidebarData;
