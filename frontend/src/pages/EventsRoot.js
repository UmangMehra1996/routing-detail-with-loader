import React from 'react';
import { Outlet } from 'react-router-dom'; 
import EventsNavigation from '../components/EventsNavigation';

const EventsRoot = () => {
  return (
    <div>
      <EventsNavigation />
      <main>
       <Outlet />
       </main>
    </div>
  )
}

export default EventsRoot
