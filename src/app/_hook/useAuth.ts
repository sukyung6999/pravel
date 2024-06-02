import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authKey } from "../_services/key/auth";
import * as authApi from "../_services/api/auth.api";
import { getAuthorization, setAuthorization } from "../_services/api";
import { User } from "../_types/auth.type";

export const useUser = () => {
  const queryClient = useQueryClient();
  const { email, token } = getAuthorization();

  const user = useQuery({
    queryKey: [authKey.all, email],
    queryFn: () => authApi.fetchUser({ email, token }),
    staleTime: Infinity,
    enabled: !!email,
  });

  const updateUser = (newUser: User) => {
    queryClient.setQueryData([authKey.all, email], newUser);
  };

  const clearUser = () => {
    queryClient.removeQueries({ queryKey: [authKey.all] });
  }

  return {
    user,
    updateUser,
    clearUser,
  }
};

export const useLogin = () => {
  const { updateUser } = useUser();

  return useMutation({
    mutationFn: authApi.login,

    onSuccess: ({ user, token }) => {
      updateUser(user);
      setAuthorization(user.email, token);
    },

    onError: (error) => {
      alert(error.message);
    },
  })
};

export const useLogout = () => {
  const { clearUser } = useUser();
  const auth = getAuthorization();

  return useMutation({
    mutationFn: () => authApi.logout(auth),

    onSuccess: () => {
      clearUser();
    },

    onError: (error) => {
      alert(error.message);
    },
  })
};