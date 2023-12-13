import React from 'react';
import { eventData } from '../../data';
import EventItems from '../../components/eventsItems/EventItems';

function HomePage() {
  return (
    <div className="container">
      {/* header */}
      <div className="empty_space" />
      {/* main */}
      <main>
        <div className="main_Container">
          {/* header section */}
          <div className="main_container_header">
            {/* title */}
            <h2>All Events</h2>
            {/* search engine */}
            <div>search engine</div>
          </div>
          {/* grid contents */}
          <div className="grid_container">
            {eventData.map((ele, index) => (
              <EventItems key={index} {...ele} />
            ))}
            {/* <EventItems /> */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
