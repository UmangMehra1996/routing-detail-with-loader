import React from "react";
import EventForm from "../components/EventForm";
import { json } from "react-router-dom";

const NewEventPage = () => {
  return (
    <div>
      <EventForm />
    </div>
  );
};

export default NewEventPage;

export async function action({ request, params }) {
  const data = await request.formData();
  const eventData = {
    title: data.get("title"),
    image: data.get("image"),
    date: data.get("date"),
    description: data.get("description")
  };

  const response = await fetch("http://localhost:8080/events/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(eventData),
  });
  if (!response.ok) {
    // return { isError: true, message: "could not fetch data" };
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events" }, { status: 500 });
  }
}
