import styled from "@emotion/styled";

export const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 20px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;
