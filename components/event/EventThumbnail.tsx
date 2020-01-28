import styled from 'styled-components'
import { Event } from '../common/event.types'
import { Colors, BoxShadows } from '../common/colors'
import { useState, useEffect } from 'react'
import getDistance from 'geolib/es/getDistance';
import React from 'react';
import { FlexWrapper } from '../common/common';
import beers from '../../public/drink_assets/beer-icon.png';
import cocktails from '../../public/drink_assets/cocktail-icon.png';
import coffee from '../../public/drink_assets/coffee-icon.png';
import milkshakes from '../../public/drink_assets/milkshake-icon.png';
import comments_black from '../../public/drink_assets/comment.png'
import comments_red from '../../public/drink_assets/comment-red.png'
import comments_green from '../../public/drink_assets/comment-green.png'
import comments_yellow from '../../public/drink_assets/comment-yellow.png'
import guests from '../../public/drink_assets/guests.svg';

const EventThumbnailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  border-radius: 5px;
  box-shadow: ${BoxShadows.unfocusedBoxShadow};
  cursor: pointer;
  padding: 10px;
  background: ${Colors.white};

  &:hover {
    box-shadow: ${BoxShadows.focusedBoxShadow};
  }
`

const IdWrapper = styled.div`
  color: ${Colors.gray};
  padding-right: 5px;
  font-size: 20px;
  align-self: center;
`

const ThumbnailTitle = styled.div`
  font-weight: bold;
  font-size: 14px;
  align-self: center;
`

const LocationWrapper = styled.div`
  font-size: 10px;
  margin-left: 35px;
  color: ${Colors.gray};
`

const TypeImage = styled.img`
  max-height: 16px;
  margin-left: 20px;
`

const CommentImg = styled(TypeImage)`
  margin-right: 10px;
  margin-left: 0;
`

const EventInternalWrapper = styled(FlexWrapper)`
  align-items: center;
`

const NumberWrapper = styled.div`
  color: ${Colors.black};
  margin-right: 5px;
  font-weight: 300;
  font-size: 10px;
`


const EventThumbnail = React.forwardRef((event: Event) => {
  const [userLat, setUserLat] = useState<number>(0)
  const [userLon, setUserLon] = useState<number>(0)
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: Position) => {
      setUserLat(position.coords.latitude)
      setUserLon(position.coords.longitude)
    });
  }, [])
  const eventLat = event.location.latitude
  const eventLon = event.location.longitude

  return (
    <EventThumbnailWrapper >
      <EventInternalWrapper>
        <IdWrapper>#{event.id}</IdWrapper>
        <ThumbnailTitle>{event.title}</ThumbnailTitle>
        {event.type === 'BEERS' && <TypeImage src={beers}/>}
        {event.type === 'COCKTAILS' && <TypeImage src={cocktails}/>}
        {event.type === 'COFFEES' && <TypeImage src={coffee}/>}
        {event.type === 'MILKSHAKES' && <TypeImage src={milkshakes}/>}
      </EventInternalWrapper>
      <LocationWrapper>({getDistance({latitude: userLat, longitude: userLon}, {latitude: eventLat, longitude: eventLon}, 100)/1000} km away)</LocationWrapper>
      <FlexWrapper style={{alignItems: 'center'}}>
        {event.comments.length === 0 && <><NumberWrapper>{event.comments.length}</NumberWrapper><CommentImg src={comments_black}/></>}
        {(event.comments.length >= 1 && event.comments.length < 5) && <><NumberWrapper>{event.comments.length}</NumberWrapper><CommentImg src={comments_yellow}/></>}
        {(event.comments.length >= 6 && event.comments.length < 10) && <><NumberWrapper>{event.comments.length}</NumberWrapper><CommentImg src={comments_green}/></>}
        {event.comments.length > 10 && <><NumberWrapper>{event.comments.length}</NumberWrapper> <CommentImg src={comments_red}/></>}
        <NumberWrapper> {event.guests.length} </NumberWrapper><CommentImg src={guests}/>
      </FlexWrapper>
  </EventThumbnailWrapper>
  )
})

export default EventThumbnail
