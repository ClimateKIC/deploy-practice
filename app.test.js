import { afterEach, describe, expect, it, vi } from "vitest";
import { getInfo } from "./app.js";

describe("getInfo", () => {
  afterEach(() => {
    vi.unstubAllEnvs();
  });

  it("returns defaults when env vars are unset", () => {
    vi.stubEnv("APP_VERSION", "");
    vi.stubEnv("APP_ENV", "");
    expect(getInfo()).toEqual({ message: "bye", version: "local", env: "local" });
  });
});
