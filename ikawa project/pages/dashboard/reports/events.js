import React, {useState,useEffect} from 'react';
import Link from 'next/link';
import Wrapper from '../../../compontents/Dashboard/Layouts/Wrapper';
import PrintReports from '../../../compontents/Dashboard/PrintReports';
import { getAllEvents, deleteEvent } from '@components/Dashboard/services/EventsDataService';

export default function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const heads = ['', 'Name', 'Event date', 'Action'];
  
  async function handleDelete(e) {
    setLoading(true);
    const eventId = e.target.dataset.id;
    try {
      const data = await deleteEvent(eventId);
      fetchEvents()
      setLoading(false);
    } catch (error) {
      console.error(error)
      setLoading(false);
    }
  }

  async function fetchEvents() {
      try {
        const data = await getAllEvents();
        setEvents(data?.events);
        setLoading(false);

      } catch (error) {
        console.error(error);
      }
  }

  useEffect(() => {
    
    fetchEvents()
  }, [])
  
  return (
    <Wrapper>
      <div className='bg-light p--40 mt--30'>
        <div className='row show-on-print'>
          <div className='col-12 col-md-12'>
            <PrintReports reportTitle='All events' />
          </div>
          {loading ? (
            <h4 pt='0'>Loading...</h4>
          ) : (
            <div className='col-12 col-md-12 table-responsive'>
              <table class='table'>
                <thead>
                  {heads.map((h, i) => (
                    <th
                      scope='col'
                      className={
                        h.toLowerCase() === 'action' ? ' no-print ' : ''
                      }>
                      {h}
                    </th>
                  ))}
                </thead>

                <tbody>
                  {events.map((event, i) => (
                    <tr key={i}>
                      <th scope='row'>
                        <img src={event.imgPath} height='30' alt='' />
                      </th>
                      <td>{event.name}</td>
                      <td>{event.date}</td>
                      <td className='no-print'>
                        <span>
                          <Link href={`/dashboard/admin?eventId=${event._id}`} >
                            <i className='fi fi-pencil mr--20 text-success pointer' data-id={event._id}></i>
                          </Link>
                          <i className='fi fi-thrash text-danger pointer' data-id={event._id} onClick={ e => handleDelete(e)}></i>
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}
