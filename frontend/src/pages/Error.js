import React from "react";
import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  let title = "An error occurred";
  let message = "Something went wrong!";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    message = "Could not find resource";
  }

  return (
    <>
      <MainNavigation />
      <main>
        <PageContent title={title} />
        <p>{message}</p>
      </main>
    </>
  );
};

export default Error;
