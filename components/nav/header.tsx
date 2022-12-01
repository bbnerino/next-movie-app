import Link from 'next/link'
import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Wrapper>
      <Link href={'/movie/list'}>LIST</Link>
    </Wrapper>
  )
}
const Wrapper = styled.nav`
  background-color: aliceblue;
  width: 100%;
  display: flex;
  padding: 20px;
  a{
    text-decoration: none;
    color: #333;
    :hover{
      color: blueviolet;
    }
  }
`
export default Header