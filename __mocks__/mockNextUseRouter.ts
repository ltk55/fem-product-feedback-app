// mockNextUseRouter.js

import { useRouter } from "next/navigation";

export const mockNextUseRouter = (overrides = {}) => {
  const router = {
    // Define default mock values here
    pathname: "/",
    asPath: "/",
    query: {},
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    ...overrides, // Override with any provided values
  };

  useRouter.mockImplementation(() => router);

  return router;
};
