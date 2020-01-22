import styled from 'styled-components'
import { FunctionComponent } from 'react'

const LayoutWrapper = styled.div`
  display: grid;
`

const Layout: FunctionComponent = (props) => (
  <LayoutWrapper>
    {props.children}
  </LayoutWrapper>
)

export default Layout