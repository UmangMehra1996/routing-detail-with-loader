import React from 'react';
import EventForm from '../components/EventForm';
import { useLoaderData, useRouteLoaderData } from 'react-router-dom';

const EditEventPage = () => {
  const data = useRouteLoaderData('event-detail');

  return (
    <div>
      <EventForm event={data.event} />
    </div>
  )
}

export default EditEventPage
