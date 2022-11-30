import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import { theme } from "../styles/theme";

export default function Home() {
  return (
    <Wrapper>
      <h1>하이</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.green};
`;
