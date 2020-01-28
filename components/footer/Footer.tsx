import styled from 'styled-components'
import { Colors } from '../common/colors'
import drinks from '../../public/drink_assets/drinks-text.png'

const FooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  padding: 20px 0 10px 0;
  background: ${Colors.gold};
`

const FooterImgWrapper = styled.img`
  max-height: 50px;
`

const Footer = () => (
  <FooterWrapper>
    <FooterImgWrapper src={drinks}/> ©
  </FooterWrapper>
)

export default Footer