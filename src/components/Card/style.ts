import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--card-bg);
  padding: 1rem;
  color: var(--text-color);
  border-radius: 1rem;
  border: 1px solid var(--neutral-600);
  max-width: 25rem;
  
  .header {
    display: flex;
    align-items: start;
    p {
      font-weight: 300;
      font-size: 0.75rem;
    }
  }
  .content {
    margin-left: 1rem;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    margin: 1rem 0 1rem 0;
  }
  .actions button {
    background: var(--button-bg);
    color: var(--neutral-0);
    border: 1px solid var(--button-border);
    padding: 0.375rem 0.725rem;
    border-radius: 1rem;
    
    transition:
      background 0.3s ease,
      color 0.3s ease;

    &:hover {
      background: var(--button-hover-bg);
      color: var(--button-hover-text);
      border: none;
    }
  }
`;
