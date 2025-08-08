import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  height: 3rem;
  background-color: var(--background-header);
  border-radius: 0.75rem;
  margin-top: 1rem;

  .dark {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    height: 2rem;
    width: 2rem;
    background: var(--neutral-600);
    border-radius: 0.5rem;
    color: var(--neutral-0);
    font-size: 1.25rem;

    transition:
      background 0.3s ease,
      color 0.3s ease;

    &:hover {
      background: var(--red-500);
      color: var(--neutral-900);
      border: none;
    }
  }

  .white {
    display: flex;
    align-items: center;
    margin-right: 1rem;
    height: 2rem;
    width: 2rem;
    background: var(--neutral-300);
    border-radius: 0.5rem;
    color: var(--neutral-900);
    font-size: 1.25rem;

    transition:
      background 0.3s ease,
      color 0.3s ease;

    &:hover {
      background: var(--red-600);
      color: var(--neutral-900);
      border: none;
    }
  }
  .icon {
    margin-left: 1rem;
  }
`;
