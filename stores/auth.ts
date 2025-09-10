import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();
const session = ref<ReturnType<typeof authClient.getSession> | null>(null);

export const useAuthStore = defineStore("useAuthStore", () => {
  async function init() {
    try {
      const data = await authClient.useSession(useFetch);
      session.value = data;
    }
    catch (error) {
      console.error("Failed to initialize auth session:", error);
      session.value = null;
    }
  }

  // Safe computed properties that handle null session
  const user = computed(() => session.value?.data?.user || null);
  // const loading = computed(() => session.value?.isPending || true);
  // stores/auth.ts
  const loading = computed(() => session.value?.isPending ?? false);

  async function signIn() {
    await authClient.signIn.social({
      provider: "github",
      callbackURL: "/dashboard",
      errorCallbackURL: "/error",
    });
  }

  async function signOut() {
    await authClient.signOut();
    navigateTo("/");
  }

  return { loading, signIn, user, signOut, init, session };
});
