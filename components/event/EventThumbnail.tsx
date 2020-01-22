import styled from 'styled-components'
import { Event } from '../../pages/e/event.types'
import { Colors, BoxShadows } from '../../theme/colors'
import { useState, useEffect } from 'react'
import getDistance from 'geolib/es/getDistance';

const EventThumbnailWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-radius: 10%;
  box-shadow: ${BoxShadows.unfocusedBoxShadow};
  cursor: pointer;

  &:hover {
    box-shadow: ${BoxShadows.focusedBoxShadow};
  }
`

const TitleWrapper = styled.div`
  display: flex;
`

const IdWrapper = styled.div`
  color: ${Colors.gray};
`

const ThumbnailTitle = styled.div`
  font-weight: bold;
`

const LocationWrapper = styled.div``

const EventThumbnail = (event: Event) => {
  const [userLat, setUserLat] = useState<number>(0);
  const [userLon, setUserLon] = useState<number>(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position: Position) => {
      setUserLat(position.coords.latitude)
      setUserLon(position.coords.longitude)
    });
  }, [])
  const eventLat = event.location.latitude
  const eventLon = event.location.longitude
  return (
    <EventThumbnailWrapper>
    <TitleWrapper>
      <IdWrapper>#{event.id}</IdWrapper>
      <ThumbnailTitle>{event.title}</ThumbnailTitle>
      <LocationWrapper>{getDistance({latitude: userLat, longitude: userLon}, {latitude: eventLat, longitude: eventLon}, 100)/1000}</LocationWrapper>
    </TitleWrapper>
  </EventThumbnailWrapper>
  )
}


export default EventThumbnail