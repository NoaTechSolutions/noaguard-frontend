import { customTheme } from "@/theme";
import {
  Sidebar,
  SidebarItem,
  SidebarItemGroup,
  SidebarLogo,
} from "flowbite-react";
import { HiUser, HiArrowSmRight } from "react-icons/hi";
 // ✅

export default function SidebarComponent() {
  return (
    <Sidebar theme={customTheme.sidebar} aria-label="Sidebar navigation">
      <SidebarLogo
        href="#"
        img="https://flowbite.com/docs/images/logo.svg"
        imgAlt="NoaGuard logo"
      >
        NoaGuard
      </SidebarLogo>

      <SidebarItemGroup>
        <SidebarItem href="/dashboard/users" icon={HiUser}>
          Users
        </SidebarItem>
        <SidebarItem href="/logout" icon={HiArrowSmRight}>
          Logout
        </SidebarItem>
      </SidebarItemGroup>
    </Sidebar>
  );
}
