import React, { useState } from "react";
import styled, { css } from "styled-components";
import useInputs from "./hooks/useInputs";
import Input from "./components/Input";

function FunctionalType(props) {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const [name, setName] = useState("");
  const [emailAdd, setEmailAdd] = useState("");

  const registerUserInfo = () => {
    reset();
    setName(username);
    setEmailAdd(email);
  };

  return (
    <Dimmer>
      <Container>
        <TextWrapper emailAdd={emailAdd}>
          <p>{!name ? "안녕하세요 고객님!" : `${name}님 환영합니다!`}</p>
          <p>
            {!emailAdd
              ? "정보를 등록해주세요!"
              : `${emailAdd}로 인증 메일을 발송하였습니다.`}
          </p>
        </TextWrapper>
        <Wrapper>
          {formats.map((format) => {
            return (
              <Input
                key={format.id}
                value={format.name === "email" ? email : username}
                type={format.type}
                name={format.name}
                placeholder={format.placeholder}
                onChange={onChange}
              />
            );
          })}
          <Button onClick={registerUserInfo}>등록하기</Button>
        </Wrapper>
      </Container>
    </Dimmer>
  );
}

export default FunctionalType;

const TextWrapper = styled.div`
  font-size: 16px;
  text-align: center;
  margin-bottom: 20px;
  color: #2e2d2d;

  p {
    width: 180px;
    ${(props) =>
      props.emailAdd &&
      css`
        line-height: 24px;
      `}
  }
`;

const Dimmer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  background-color: rgba(45, 45, 45, 0.2);
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 250px;
  height: 350px;
  background-color: white;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  margin-top: 25px;
  border: none;
  padding: 7px 0;
  background-color: #007aff;
  color: white;
  border-radius: 4px;
`;

const formats = [
  {
    id: 1,
    type: "text",
    name: "username",
    placeholder: "사용자 이름",
  },
  {
    id: 2,
    type: "text",
    name: "email",
    placeholder: "사용자 이메일",
  },
];
