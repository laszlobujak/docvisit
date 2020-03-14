//pages
import Homepage from './pages/homepage/homepage';
import LogIn from './pages/log-in/log-in';
import SignUp from './pages/sign-up/sign-up';
import Doctors from "./pages/doctors/doctors";
import Calendar from "./pages/calendar/calendar";
import PersonalSite from "./pages/personal-site/personal-site";

export const routes = [
  {
    path: "/",
    page: Homepage
  },
  {
    path: "/signup",
    page: SignUp
  },
  {
    path: "/login",
    page: LogIn
  },
  {
    path: "/doctors",
    page: Doctors
  },
  {
    path: "/calendar",
    page: Calendar
  },
  {
    path: "/account",
    page: PersonalSite
  },
];
