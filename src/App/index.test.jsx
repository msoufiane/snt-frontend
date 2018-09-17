import {
  registerServiceWorker,
  configureStore,
  history,
  Routes,
  App
} from "./index";

it("all exports are working", () => {
  expect(registerServiceWorker).toBeDefined();
  expect(configureStore).toBeDefined();
  expect(history).toBeDefined();
  expect(Routes).toBeDefined();
  expect(App).toBeDefined();
});
