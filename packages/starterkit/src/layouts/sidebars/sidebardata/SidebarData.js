import * as Icon from "react-feather";

const SidebarData = [
  { caption: "Home" },
  {
    title: "Starter page",
    href: "/",
    id: 1,
    icon: <Icon.Home />,
    collapisble: false,
  },

  {
    title: "DD Menu",
    href: "/",
    id: 7,
    collapisble: true,
    icon: <Icon.Disc />,
    children: [
      {
        title: "Simple dd 1",
        href: "/#",
        icon: <Icon.Disc />,
      },
      {
        title: "Simple dd 2",
        href: "/#",
        icon: <Icon.Disc />,
      },
      {
        title: "Simple dd 3",
        href: "/#",
        icon: <Icon.Disc />,
      },
    ],
  },
];

export default SidebarData;
