import React, { useEffect } from 'react';
import EventItems from '../../components/eventsItems/EventItems';
import { useSelector } from 'react-redux';

function AllEventPage() {
  const { eventItems } = useSelector((state) => state.addEvent);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            {eventItems.map((ele, index) => (
              <EventItems key={index} {...ele} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllEventPage;
