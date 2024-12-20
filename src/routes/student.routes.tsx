import StudentDashboard from "../pages/student/StudentDashboard";
import OfferedCourses from "../pages/student/OfferedCoursed"; // Assuming you have this component

export const studentPaths = [
  {
    name: "Dashboard",
    path: "dashboard",
    element: <StudentDashboard />,
  },

  {
    name: "Offered Courses",
    path: "offered-courses",
    element: <OfferedCourses />,
  },
];
