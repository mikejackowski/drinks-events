import styled from 'styled-components'
import { User } from '../common/event.types'
const UserWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100px;
  justify-content: center;
`

const UserAvatar = styled.img`
  max-width: 40px;
  border-radius: 50%;
  margin: 10px;
`

const UserName = styled.div`
  font-size: 12px;
  font-weight: bold;
`

const BaseUser = ({name, avatarUrl}: User) => {
  return (
    <UserWrapper>
      <UserAvatar src={avatarUrl}/>
      <UserName>{name}</UserName>
    </UserWrapper>
  )
}

export default BaseUser