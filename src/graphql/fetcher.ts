import { GraphQLClient } from "graphql-request";

// Instantiate the client once globally, so it persists across requests
export const client = new GraphQLClient(
  import.meta.env.VITE_GRAPHQL_SCHEMA_URL!
);

// Create a fetcher function that dynamically updates the Authorization header
export const fetcher = <TData, TVariables>(
  query: string,
  variables?: TVariables
) => {
  return async (): Promise<TData> => {
    // Retrieve the latest token from localStorage on each request
    const token = localStorage.getItem("access_token");

    // Update the Authorization header of the client dynamically for the current request
    client.setHeaders({
      Authorization: token
        ? `Bearer ${token}`
        : "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImJvYnl0byIsInN1YiI6NSwiaWF0IjoxNzQ2OTg2ODUzLCJleHAiOjE3NDY5OTA0NTN9.zXfn_rnJZGj872qVmrpjdJRkkNNFgwFqNCXC2H5q9-k",
    });

    // Now, use the client to perform the request with the updated headers
    return client.request<TData>(query, variables ?? {});
  };
};
