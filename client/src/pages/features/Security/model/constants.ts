export const ICON_MAP: Record<string, string> = {
  key: "🔑",
  lock: "🔒",
  security: "🛡️",
  history: "📜",
  desktop_windows: "🖥️",
  smartphone: "📱",
  desktop_mac: "💻",
  logout: "🚪",
  check_circle: "✅",
};

export const MOCK_LOGIN_SESSIONS = [
  {
    id: "1",
    device: "Windows",
    browser: "Chrome",
    location: "Moscow, Russia",
    timestamp: "Just now",
    isActive: true,
  },
  {
    id: "2",
    device: "iPhone 13",
    browser: "Safari",
    location: "St. Petersburg, Russia",
    timestamp: "2 hours ago",
    isActive: false,
  },
  {
    id: "3",
    device: "MacOS",
    browser: "Safari",
    location: "Moscow, Russia",
    timestamp: "Yesterday",
    isActive: false,
  },
];

