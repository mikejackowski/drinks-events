import axios from 'axios';
import styled from 'styled-components';
import BaseEvent from '../../components/event/Event'
import { NextPage } from 'next';
import { Event } from './event.types'

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
  console.log('getting stuff')
  const res = await axios.get(`https://mock-api.drinks.test.siliconrhino.io/events/${id}`);
  const event: Event = res.data
  console.log(`Fetched data: `, res);

  return event;
};

export default EventPage;


/**
 * import axios from 'axios';
import styled from 'styled-components';
import BaseEvent from '../../components/event/Event'
import { NextPageContext } from 'next';
import { Event } from './event.types'
import React from 'react';

const EventWrapper = styled.div`
`

class EventPage extends React.Component<Event> {
  static getInitialProps = async ({ query }: NextPageContext) => {
    try {
      const { id } = query
      const item = await axios.get<Event>(`https://mock-api.drinks.test.siliconrhino.io/events/${id}`);
      console.log('item: ', item)
      return item.data
    } catch (err) {
      return { errors: err.message }
    }
  }

  render () {
    const {id, time, title, creator, guests, drinkType, location, comments } = this.props;
    return (
      <EventWrapper>
        <BaseEvent
          id={id}
          time={time}
          title={title}
          creator={creator}
          guests={guests}
          drinkType={drinkType}
          location={location}
          comments={comments}
        />
      </EventWrapper>
    )
  }
}

export default EventPage;

 */