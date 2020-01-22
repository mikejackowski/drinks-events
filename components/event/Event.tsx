import styled from 'styled-components'
import { Event } from '../../pages/e/event.types'
import BaseUser from '../user/User'
import Comment from '../comment/Comment'

const EventWrapper = styled.div`
`

const TitleWrapper = styled.div`
  font-weight: bold;
`

const BaseEvent = ({id, time, title, creator, guests, type, location, comments }: Event) => (
  <EventWrapper>
    <TitleWrapper>{title}</TitleWrapper>
    <div>id: {id}</div>
    <div>time: {time}</div>
    <div>Created by: {creator.name}</div>
    <div>at: {location.name} ({location.latitude}, {location.longitude})</div>
    <div>what are we drinking: {type}</div>
    <div>Guests: </div>
    {guests.length > 0 ?
      guests.map((guest) => {
        return <BaseUser name={guest.name} avatarUrl={guest.avatarUrl}/>
      })
      :
      <div>No guests :(</div>
    }
    {comments.length > 0 &&
      <>
          <div>Comments:</div>
            {comments.map((comment) => {
              return <Comment user={comment.user} timestamp={comment.timestamp} message={comment.message}/>
            })
            }
      </>
    }
  </EventWrapper>
)

export default BaseEvent