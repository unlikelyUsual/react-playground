import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  //   reducerPath: "user",
  tagTypes: ["user"],
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/",
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = (getState() as any).auth.token;
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (build) => ({
    login: build.mutation({
      query: (data) => ({
        url: "login",
        data,
        method: "POST",
      }),
      invalidatesTags: ["user"],
    }),
    signup: build.mutation({
      query: (data) => ({
        url: "signup",
        data,
        method: "POST",
      }),
    }),
    user: build.query({
      query: () => `user`,
      providesTags: ["user"],
    }),
    logOut: build.mutation({
      query: (data) => ({
        url: "logout",
        data,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useSignupMutation,
  useUserQuery,
  useLogOutMutation,
} = userApi;
