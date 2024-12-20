import FacultyDashboard from "../pages/faculty/FacultyDashboard";
import OfferedCourses from "../pages/faculty/OfferedCoursed";

export const facultyPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <FacultyDashboard />,
  },

  {
    name: "Offered Courses",
    path: "offered-courses",
    element: <OfferedCourses />,
  },
];
