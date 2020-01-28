import styled from 'styled-components'
import { Event } from '../common/event.types'
import BaseUser from '../user/User'
import Comment from '../comment/Comment'
import Layout from '../layout/Layout'
import { FlexWrapper } from '../common/common'
import { Colors } from '../common/colors'
import beers from '../../public/drink_assets/beer-icon.png';
import cocktails from '../../public/drink_assets/cocktail-icon.png';
import coffee from '../../public/drink_assets/coffee-icon.png';
import milkshakes from '../../public/drink_assets/milkshake-icon.png';

const EventWrapper = styled(FlexWrapper)`
  width: 50%;
  justify-self: center;
  align-self: center;
  padding: 20px;
  margin: 10px auto 0;
  box-sizing: border-box;
  font-family: 'Lato', sans-serif;
  background: ${Colors.white};
  border-radius: 10px;
`

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  font-size: 26px;
  line-height: 28px;
  align-items: center;
  font-weight: bold;
`

const RowWrapper = styled(FlexWrapper)`
  position: relative;
  padding: 15px 0;
  box-sizing: border-box;
  align-items: center;

  &:after {
    position: absolute;
    bottom: -4px;
    display: block;
    border-bottom: 1px solid ${Colors.gray};
    content: '';
    width: 100%;
  }

  &:last-child {
    &:after {
      content: none;
    }
  }
`

const IdWrapper = styled.div`
  color: ${Colors.gray};
  padding-right: 5px;
  font-size: 20px;
  align-self: center;
`

const EventParamHeader = styled.div`
  display: block;
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.black};
  padding: 10px 0;
`

const UserAvatar = styled.img`
  display: inline-block;
  max-width: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 0;
  margin: 0 0 0 10px;
`

const EventParam = styled.div`
  display: inline-block;
  margin-left: 12px;
  font-size: 20px;
  align-self: center;
  font-weight: lighter;
`

const MinorParam = styled(EventParam)`
  color: ${Colors.gray};
  font-size: 15px;
`

const TypeImg = styled.img`
  max-height: 20px;
`

const BaseEvent = ({id, time, title, creator, guests, type, location, comments }: Event) => (
  <Layout>
    <EventWrapper>
      <RowWrapper>
        <TitleWrapper><IdWrapper>#{id}</IdWrapper> {title}</TitleWrapper>
        <MinorParam>{new Date(time).toLocaleDateString()} - {new Date(time).toLocaleTimeString()}</MinorParam>
      </RowWrapper>
      <RowWrapper>
        <EventParamHeader>Location:</EventParamHeader>
        <EventParam>{location.name} <MinorParam>({location.latitude.toFixed(2)}, {location.longitude.toFixed(2)})</MinorParam></EventParam>
      </RowWrapper>
      <RowWrapper>
        <EventParamHeader>Event type:</EventParamHeader>
        {type === 'BEERS' && <TypeImg src={beers}/>}
        {type === 'COCKTAILS' && <TypeImg src={cocktails}/>}
        {type === 'COFFEES' && <TypeImg src={coffee}/>}
        {type === 'MILKSHAKES' && <TypeImg src={milkshakes}/>}
        <MinorParam>{type}</MinorParam>
      </RowWrapper>
      <RowWrapper>
        <EventParamHeader>Hosted by:</EventParamHeader>
        <UserAvatar src={creator.avatarUrl}/>
        <EventParam>{creator.name}</EventParam>
      </RowWrapper>
      <RowWrapper>
        <EventParamHeader>Guests:</EventParamHeader>
        {guests.length > 0 ?
          guests.map((guest) => {
            return <BaseUser key={guest.name} name={guest.name} avatarUrl={guest.avatarUrl}/>
          })
          :
          <div>No guests :(</div>
        }
      </RowWrapper>
      <RowWrapper>
      <EventParamHeader>Comments:</EventParamHeader>
        {comments.length > 0 &&
          comments.map((comment) => {
            return <Comment key={comment.timestamp} user={comment.user} timestamp={comment.timestamp} message={comment.message}/>
          })
        }
      </RowWrapper>
    </EventWrapper>
  </Layout>
)

export default BaseEvent