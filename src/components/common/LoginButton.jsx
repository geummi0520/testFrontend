import styled from "styled-components";

export default function LoginButton() {
  return (
    <>
      <Button onClick={() => navigate("/login")}>로그인</Button>
    </>
  );
}

const Button = styled.button`
  display: flex;
  padding: 0.7rem 1.4rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid var(--line-secondary);
  background-color: transparent;
  cursor: pointer;

  //Text
  color: var(--text-brand);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.429; /* 2rem */
  letter-spacing: 0.0203rem;

  &:hover {
    background-color: var(--background-secondary);
  }
`;
