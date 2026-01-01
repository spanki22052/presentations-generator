// Helper function to safely set item in localStorage
export function safeSetItem(key: string, value: string): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.setItem(key, value);
    }
  } catch (error) {
    console.warn("Failed to set localStorage item:", error);
  }
}

// Helper function to safely remove item from localStorage
export function safeRemoveItem(key: string): void {
  try {
    if (typeof window !== "undefined" && window.localStorage) {
      localStorage.removeItem(key);
    }
  } catch (error) {
    console.warn("Failed to remove localStorage item:", error);
  }
}

