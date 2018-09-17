import {
  AuthenticatedRoute,
  loginReducer,
  LoginScreen,
  LoginForm
} from "./index";

it("all exports are working", () => {
  expect(AuthenticatedRoute).toBeDefined();
  expect(loginReducer).toBeDefined();
  expect(LoginScreen).toBeDefined();
  expect(LoginForm).toBeDefined();
});
