import { useRouter } from "next/router";
import { useEffect } from "react";
import styled from "styled-components";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // push 와 replace 차이는 
    // push 는 history stack 쌓여서 뒤로가기 가능
    // replace 는 history stack에 안쌓여서 뒤로가기 불가능
    // router.push("/movie/list");
    router.replace("/movie/list");
  }, []);
  return (
    <Wrapper>
      <h1>하이</h1>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.green};
`;
