import { Layout, Menu } from "antd";
import { adminPaths } from "../../routes/admin.routes";
import { SidebarLinks } from "../../utils/sidebarLinkGenerator";
import { facultyPaths } from "../../routes/faculty.routes";
import { studentPaths } from "../../routes/student.routes";
import { useAppSelector } from "../../redux/hooks";
import { selectCurrentUser } from "../../redux/features/auth/authSlice";

const userRole = {
  ADMIN: "superAdmin",
  FACULTY: "faculty",
  STUDENT: "student",
};

const { Sider } = Layout;
const SideBarLayout = () => {
  const user =useAppSelector(selectCurrentUser)
  let adminSidebarItems;
  switch (user!.role) {
    case userRole.ADMIN:
      adminSidebarItems = SidebarLinks(adminPaths, userRole.ADMIN);
      break;
    case userRole.FACULTY:
      adminSidebarItems = SidebarLinks(facultyPaths, userRole.FACULTY);
      break;
    case userRole.STUDENT:
      adminSidebarItems = SidebarLinks(studentPaths, userRole.STUDENT);
      break;

    default:
      break;
  }
  return (
    <Sider breakpoint="lg" collapsedWidth="0">
      <div
        style={{
          color: "white",
          textAlign: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "4rem",
        }}
      >
        <h1>Ph Uni</h1>
      </div>
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={["4"]}
        items={adminSidebarItems}
      />
    </Sider>
  );
};

export default SideBarLayout;
