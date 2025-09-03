import { auth } from "~/lib/auth";

export default defineEventHandler(async (event) => {
  if (event.path?.startsWith("/dashboard")) {
    try {
      const session = await auth.api.getSession({
        headers: event.headers,
      });

      if (!session) {
        return sendRedirect(event, "/", 302);
      }
    }
    catch (error) {
      console.error("Auth check failed:", error);
      return sendRedirect(event, "/error", 500);
    }
  }
});
