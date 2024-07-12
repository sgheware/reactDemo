import { useProductContext } from "./context/productcontex";
import styled from "styled-components";

const Login = () => {  

    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

  return (
    <Wrapper>
    <h2 className="common-heading">Login page</h2>

    <div className="container">
      <div className="contact-form">
        <form
          action="https://formspree.io/f/mvgpogwv"
          method="POST"
          className="contact-inputs">
          <input
            type="text"
            placeholder="username"
            name="username"
            required
            autoComplete="off"
          />

          <input
            type="password"
            name="Password"
            placeholder="Password"
            autoComplete="off"
            required
          />

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  </Wrapper>
  );
};

export default Login;
