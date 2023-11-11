import { HomeOutlined } from "@mui/icons-material";
// import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
// import HandshakeOutlinedIcon from "@mui/icons-material/HandshakeOutlined";
// import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
// import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";

export const ASidebarListItems  = [
  {
    key: 1,
    type: "listItem",
    icon: <HomeOutlined />,
    text: "Anasayfa",
    link: "homepage",
  },
  // {
  //   key: 2,
  //   type: "listItem",
  //   icon: <HandshakeOutlinedIcon />,
  //   text: "Üyelik İşlemleri",
  //   link: "membershipactions",
  // },
//   {
//     key: 3,
//     type: "listItem",
//     icon: <GroupsOutlinedIcon />,
//     text: "Birim İşlemleri",
//     link: "unitactions",
//   },
//   {},
//   {
//     key: 4,
//     type: "listItem",
//     icon: <CalendarMonthOutlinedIcon />,
//     text: "Takvim",
//     link: "calendar",
//   },
//   {},
//   {
//     key: 5,
//     type: "listItem",
//     icon: <LayersOutlinedIcon />,
//     text: "İçerik İşlemleri",
//     link: "contentactions",
//   },
  {
    key: 6,
    type: "listItem",
    icon: <PostAddOutlinedIcon />,
    text: "İçerik Oluşturma",
    link: "createcontent",
  },
];