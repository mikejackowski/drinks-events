import styled from 'styled-components'
import { FunctionComponent } from 'react'
import Header from '../header/Header'
import Footer from '../footer/Footer'

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  justify-content: center;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 0 auto;
`

const ChildrenWrapper = styled.div`
  padding: 0 2%;
  box-sizing: border-box;
  background: rgb(233,233,233);
  background: linear-gradient(180deg, rgba(233,233,233,1) 65%, rgba(229,203,144,1) 100%);
`

const Layout: FunctionComponent = (props) => (
  <LayoutWrapper>
    <Header/>
    <ChildrenWrapper>
      {props.children}
    </ChildrenWrapper>
    <Footer/>
  </LayoutWrapper>
)

export default Layout