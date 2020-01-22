import styled from 'styled-components'
import { User } from '../../pages/e/event.types'
const UserWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const UserAvatar = styled.img`
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