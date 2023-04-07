import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
  padding: 20px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px,
    rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 5px;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
`;

export const FormInput = styled.input`
  padding-left: 30px;
  height: 25px;
  margin-bottom: 10px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;

  &:last-of-type {
    margin-bottom: 20px;
  }
`;

export const FormButton = styled.button`
  display: block;
  margin: 0 auto;
  width: 100px;
  cursor: pointer;
  text-align: center;
`;

export const Wrapper = styled.div`
  position: relative;
`;
