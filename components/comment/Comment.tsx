import styled from 'styled-components'
import BaseUser from '../user/User'
import { EventComment } from '../../pages/e/event.types'

const CommentWrapper = styled.div`
  display: flex;
`

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const TimeStamp = styled.div`
  font-size: 8px;
  color: gray;
`

const CommentMsg = styled.div`
  font-size: 11px;
`

const UserComment = ({user, timestamp, message}: EventComment) => (
  <CommentWrapper>
    <BaseUser name={user.name} avatarUrl={user.avatarUrl}/>
    <TextWrapper>
      <TimeStamp>{timestamp}</TimeStamp>
      <CommentMsg>{message}</CommentMsg>
    </TextWrapper>
  </CommentWrapper>
)

export default UserComment