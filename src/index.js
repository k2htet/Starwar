import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { PageContextProvider } from "./context/PageContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const root = ReactDOM.createRoot(document.getElementById("root"));

const queryClient = new QueryClient();

root.render(
  <QueryClientProvider client={queryClient}>
    <PageContextProvider>
      <App />
      <ReactQueryDevtools initialIsOpen={false} />
    </PageContextProvider>
  </QueryClientProvider>
);
