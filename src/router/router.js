import { createBrowserRouter } from "react-router-dom";
//super admin
// import SAHomePage from "../pages/sAdmin/Home";
// import SALayout from "../pages/sAdmin/Layout";
// import SAMembershipActions from "../pages/sAdmin/MembershipActions";
// import SAUnitActions from "../pages/sAdmin/UnitActions";
// import SAContentActions from "../pages/sAdmin/ContentActions";
import SACreateContent from "../pages/CreateContent";
// //common
// import CLayout from "../pages/common/Layout";
// import CHomePage from "../pages/common/Home";
// import AboutUs from "../pages/common/AboutUs";
// import Units from "../pages/common/Units";
// import Represantatives from "../pages/common/Representatives";
// import Works from "../pages/common/Works";
// import Events from "../pages/common/Events";
// import ApplyKulget from "../pages/common/ApplyKulget";

// import Calendar from "../pages/Calendar";
// //visitor
// import VLayout from "../pages/visitor/Layout";
// import VHomePage from "../pages/visitor/Home";
// //team member
// import TMLayout from "../pages/teamMember/Layout";
// import TMHomePage from "../pages/teamMember/Home";
// import TMCreateContent from "../pages/teamMember/CreateContent";

import SALayout from "../pages/sAdmin/Layout";
import SAHomePage from "../pages/sAdmin/Home";

export const router = createBrowserRouter([
  {
    path: "/sadmin",
    element: <SALayout />,
    children: [
      {
        index: true,
        path: "homepage",
        element: <SAHomePage />,
      },
      //   {
      //     path: "membershipactions",
      //     element: <SAMembershipActions />,
      //   },
      //   {
      //     path: "unitactions",
      //     element: <SAUnitActions />,
      //   },
      //   {
      //     path: "calendar",
      //     element: <Calendar />,
      //   },
      //   {
      //     path: "contentactions",
      //     element: <SAContentActions />,
      //   },
        {
          path: "createcontent",
          element: <SACreateContent />,
        },
    ],
  },
]);
