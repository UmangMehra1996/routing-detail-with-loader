import React from "react";
import { useParams, json, useLoaderData, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

const EventDetailPage = () => {
  const params = useParams();
  const data = useRouteLoaderData('event-detail');
  console.log(params,'dtaa');

  return <EventItem event={data.event} />;
};

export default EventDetailPage;

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + id);

  if (!response.ok) {
    // return { isError: true, message: "could not fetch data" };
    // throw new Response(JSON.stringify({ message: "Could not fetch events" }), {
    //   status: 500,
    // });
    return json({ message: "Could not fetch events" }, { status: 500 });
  } else {
    return response; // this loader data i can fetch in any component using useLoaderData hook like in evnts page.
    // except on higher level route like root route. We can get this in lower level route
  }
}
