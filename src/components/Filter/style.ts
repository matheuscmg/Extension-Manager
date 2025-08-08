import styled from "styled-components";

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  border-radius: 0.75rem;

  h1 {
    color: var(--neutral-0);
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  .content {
    display: flex;
  }

  .content button {
    background: var(--neutral-700);
    padding: 0.5rem 1rem;
    color: var(--neutral-0);
    font-weight: var(--font-weight-regular);
    border-radius: 1rem;
    cursor: pointer;

    transition:
      background 0.3s ease,
      color 0.3s ease;

    &:hover {
      background: var(--red-500);
      color: var(--neutral-900);
    }
    &.active {
    background: var(--red-500);
    color: var(--neutral-900);
    transition:
      background 0.3s ease,
      color 0.3s ease;
  }
  }

  .content button:not(:last-child) {
    margin-right: 1rem;
  }
  @media (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
