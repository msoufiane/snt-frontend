import {
  ControlSideBarMenu,
  ControlSideBarItem,
  Version,
  CopyRight,
  Footer,
  NavbarLogo,
  NavbarMenu,
  NavbarToggle,
  ControlSideBarButton,
  Settings,
  Notifications,
  Messages,
  SideBarMenu,
  MenuItem,
  MenuTree,
  AppWrapper,
  HeaderWrapper,
  SideBarWrapper,
  ControlSideBarWrapper,
  ContentWrapper,
  ProfileContainer
} from "./index";

it("all exports are working", () => {
  expect(ControlSideBarMenu).toBeDefined();
  expect(ControlSideBarItem).toBeDefined();
  expect(Version).toBeDefined();
  expect(CopyRight).toBeDefined();
  expect(Footer).toBeDefined();
  expect(NavbarLogo).toBeDefined();
  expect(NavbarMenu).toBeDefined();
  expect(NavbarToggle).toBeDefined();
  expect(ControlSideBarButton).toBeDefined();
  expect(Settings).toBeDefined();
  expect(Notifications).toBeDefined();
  expect(Messages).toBeDefined();
  expect(SideBarMenu).toBeDefined();
  expect(MenuItem).toBeDefined();
  expect(MenuTree).toBeDefined();
  expect(AppWrapper).toBeDefined();
  expect(HeaderWrapper).toBeDefined();
  expect(SideBarWrapper).toBeDefined();
  expect(ControlSideBarWrapper).toBeDefined();
  expect(ContentWrapper).toBeDefined();
  expect(ProfileContainer).toBeDefined();
});
