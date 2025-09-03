import { createAuthClient } from "better-auth/vue";

const authClient = createAuthClient();

export const useAuthStore = defineStore("useAuthStore", () => {
  const session = authClient.useSession();
  const loading = computed(() => session.value.isPending || session.value.isRefetching);
  const user = computed(() => session.value.data?.user);
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
  return { loading, signIn, user, signOut };
});
