import { useNotifications } from "./useNotifications";
import { vi } from "vitest";

// Mock Notification API
vi.stubGlobal("Notification", {
  permission: "default",
  requestPermission: vi.fn(() => Promise.resolve("granted")),
});

describe("useNotifications Hook", () => {
  it("requests notification permission when not granted", async () => {
    const { sendNotification } = useNotifications();
    Notification.permission = "default";

    sendNotification("Test Message");
    await new Promise(process.nextTick);

    expect(Notification.requestPermission).toHaveBeenCalled();
  });
});
