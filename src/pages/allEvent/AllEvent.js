import React, { useEffect, useState } from 'react';
import EventItems from '../../components/eventsItems/EventItems';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AiOutlinePlus } from 'react-icons/ai';
import { GoSearch } from 'react-icons/go';
import { MdKeyboardArrowDown } from 'react-icons/md';

function AllEventPage() {
  const { eventItems } = useSelector((state) => state.addEvent);

  const [eventItemsData, setEventItemsData] = useState(eventItems);

  const [search, setSearch] = useState('');

  const [searchType, setSearchType] = useState('text');

  const [openDropdown, setOpenDropdown] = useState(false);

  const dropdownItems = [
    {
      name: 'event name',
      type: 'text',
    },
    {
      name: 'event date',
      type: 'date',
    },
  ];

  const [selectDropdownItems, setSelectDropdownItems] = useState('event name');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleOnChangedEventSearch = (e) => {
    const searchText = e.target.value.toLowerCase();
    setSearch(searchText);

    // e.preventDefault();

    // Filter
    const filterSearch = eventItems.filter(
      (ele) =>
        ele.name.toLowerCase().includes(searchText) ||
        ele.date.toLowerCase().includes(searchText)
    );

    setEventItemsData(filterSearch);
  };

  return (
    <div className="container">
      {/* header */}
      <div className="empty_space" />
      {/* main */}
      <main>
        <div className="main_Container">
          {/* header section */}
          <div className="main_container_header">
            <div className="mobileViewEdit">
              {/* title */}
              <h2>All Events</h2>
              {/* add events */}
              <Link to="/" className="btn mobileSite">
                Add Event <AiOutlinePlus />
              </Link>
            </div>
            {/* search engine and add events */}
            <div className="search_addEvent_container">
              {/* search filter */}
              <div className="searchFilter">
                <span className="searchFilterTitle">Search Filter :</span>
                {/* dropdown */}
                <div className="dropdownContainer">
                  <p
                    className="selectedItems"
                    onClick={() => setOpenDropdown(!openDropdown)}
                  >
                    {selectDropdownItems}
                    {/* icons */}
                    <span
                      className="icons"
                      style={{ transform: openDropdown && 'rotate(180deg)' }}
                    >
                      <MdKeyboardArrowDown size={18} />
                    </span>
                  </p>
                  {openDropdown && (
                    <div className="selectOption">
                      {dropdownItems.map((ele, index) => (
                        <span
                          key={index}
                          style={{
                            backgroundColor:
                              selectDropdownItems === ele.name && '#EEEEEE',
                          }}
                          onClick={() => {
                            setSelectDropdownItems(ele.name);
                            setOpenDropdown(!openDropdown);
                            setSearchType(ele.type);
                          }}
                        >
                          {ele.name}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              {/* search engines */}
              <form
                method="post"
                // onSubmit={handleSearchedEvents}
                className="searchContainer"
                autoComplete="off"
              >
                <input
                  type={searchType}
                  name="search"
                  value={search}
                  autoComplete="off"
                  placeholder="Search events name and date"
                  // onChange={(e) => setSearch(e.target.value)}
                  onChange={handleOnChangedEventSearch}
                />
                {/* buttons */}
                <button>
                  <GoSearch size={18} />
                </button>
              </form>
              {/* add events */}
              <Link to="/" className="btn desktopSite">
                Add Event <AiOutlinePlus />
              </Link>
            </div>
          </div>
          {/* grid contents */}
          <div className="grid_container">
            {eventItemsData.map((ele, index) => (
              <EventItems key={index} {...ele} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AllEventPage;
