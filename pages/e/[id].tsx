import axios from 'axios';
import styled from 'styled-components';
import BaseEvent from '../../components/event/Event'
import { NextPage } from 'next';
import { Event } from '../../components/common/event.types'

const EventWrapper = styled.div`
`

const EventPage: NextPage<Event> = ({id, time, title, creator, guests, type, location, comments }) => {

  return (
    <EventWrapper>
      <BaseEvent
        id={id}
        time={time}
        title={title}
        creator={creator}
        guests={guests}
        type={type}
        location={location}
        comments={comments}
      />
    </EventWrapper>
  )
}

EventPage.getInitialProps = async (context) => {
  const { id } = context.query;
  const res = await axios.get(`https://mock-api.drinks.test.siliconrhino.io/events/${id}`);
  const event: Event = res.data

  return event;
};

export default EventPage;