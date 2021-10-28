import MainPage from "../pages/dashboards/MainPage";
import LoginPage from "../pages/auth/LoginPage";
import ExhibitionListPage from "../pages/exhibitions/ExhibitionListPage";
import ExhibitionDetailPage from "../pages/exhibitions/ExhibitionDetailPage";
import AgentListPage from "../pages/users/AgentListPage";

import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import AppsIcon from '@material-ui/icons/Apps';


const authRoute = {
  path: "/auth",
  name: "auth",
  children : [
    {
      path: "/login",
      name: "로그인 페이지",
      component: LoginPage,
    }
  ],
} 

const dashboardRoute = {
  path: "/",
  name: "dashboard",
  header: "",
  component: MainPage

}

const exhibitionRoute = {
  path: "/exhibitions",
  name: "행사 관리",
  icon: <AppsIcon/>,
  component: ExhibitionListPage,
  children: [
    {
      path: "",
      name: "행사 목록",
      component: ExhibitionDetailPage,
    },
    {
      path: "/:exIdx",
      name: "행사 상세",
      component: ExhibitionDetailPage,
    },
    {
      path: "/regist",
      name: "행사 생성",
      component: ExhibitionDetailPage,
    }
  ]
}

const userRoute = {
  path: "/users",
  name: "사용자 관리",
  icon: <SupervisorAccountIcon />,
  component: ExhibitionListPage,
  children: [
    {
      path: "/suppoters",
      name: "체류업체 목록",
      component: AgentListPage,
    },
    {
      path: "/agents",
      name: "에이전트 목록",
      component: AgentListPage,
    },
    {
      path: "/administrators",
      name: "관리자 목록",
      component: ExhibitionDetailPage,
    }
  ]
}

export const sidebarRoutes = [
  exhibitionRoute,
  userRoute
]

export const commonLayoutRoutes = [
  ...sidebarRoutes,
  dashboardRoute,
]

export const authLayoutRoutes = [
  authRoute,
]


