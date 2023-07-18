/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/books" }),
  tagTypes: ["books"],
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/get-book",
    }),
    getSingleBook: builder.query({
      query: (id) => `/getSingle-book/${id}`,
    }),
    postBook: builder.mutation({
      query: (data) => ({
        url: `/create-book`,
        method: "POST",
        body: data,
      }),
    }),
    postComment: builder.mutation({
      query: ({ id, data }) => ({
        url: `/addComment/${id}`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useGetBooksQuery, usePostBookMutation, usePostCommentMutation } =
  api;
