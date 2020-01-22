import styled from 'styled-components'

const StyledHeader = styled.div`
  width: 100%;
  height: 200px;

`

const Header: React.FC = (props) => (
  <StyledHeader>
    {props.children}
  </StyledHeader>
)

export default Header