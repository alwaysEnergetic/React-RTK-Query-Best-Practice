import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Post, User, Comment } from "../../utils/types";

export const dataApi = createApi({
  reducerPath: "dataApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
    prepareHeaders: (headers) => {
      headers.set("content-type", "application/json");
      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "users",
    }),
    getPosts: builder.query<Post[], void>({
      query: () => "posts",
    }),
    getComments: builder.query<Comment[], void>({
      query: () => "comments",
    }),
  }),
});

export const { useGetUsersQuery, useGetPostsQuery, useGetCommentsQuery } =
  dataApi;
