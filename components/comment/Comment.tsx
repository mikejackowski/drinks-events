import styled from 'styled-components'
import BaseUser from '../user/User'
import { EventComment } from '../common/event.types'
import { FlexWrapper } from '../common/common'
import { Colors } from '../common/colors'

const CommentWrapper = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  padding: 10px 0;

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

const TimeStamp = styled.div`
  width: 100%;
  padding: 5px;
  font-size: 8px;
  color: ${Colors.gray};
`

const CommentMsg = styled.div`
  font-size: 12px;
  padding: 5px;
`

const UserComment = ({user, timestamp, message}: EventComment) => (
  <CommentWrapper>
    <BaseUser name={user.name} avatarUrl={user.avatarUrl}/>
    <FlexWrapper>
      <TimeStamp>{new Date(timestamp).toLocaleTimeString()} - {new Date(timestamp).toLocaleDateString()}</TimeStamp>
      <CommentMsg>{message}</CommentMsg>
    </FlexWrapper>
  </CommentWrapper>
)

export default UserComment