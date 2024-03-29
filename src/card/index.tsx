import styled from "styled-components";
import { CloseButton } from "../component/close";
import { CosmosHubAccount, OsmosisAccount } from "./account";
import ArrowIcon from "@/assets/arrow.svg?react";
import { Time } from "./time";
import { Button } from "../component/button";
import { TextButton } from "../component/text-button";
import { Amount } from "./amount";
const Container = styled.div<{
  width: number;
}>`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  color: var(--main-text-color);
  width: ${(props) => `${props.width}px`};
  background-color: var(--main-background-color);
  padding: 0.5rem 1rem 1rem;
  border-radius: 1rem;
`;

const Title = styled.h2`
  font-weight: 400;
`;
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;
const AccountsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArrowIcon$ = styled(ArrowIcon)`
  flex-shrink: 0;
  flex-grow: 0;
  margin: 0 4px;
  position: relative;
  top: 15px;
`;
const TransferButton = styled.div`
  margin-top: 1rem;
`;
const CancelButtonCon = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

export const Card: React.FC<{
  width: number;
}> = ({ width }) => {
  return (
    <Container width={width}>
      <Header>
        <Title>Deposit ATOM</Title>
        <CloseButton />
      </Header>
      <AccountsContainer>
        <CosmosHubAccount address="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" />
        <ArrowIcon$ />
        <OsmosisAccount address="bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh" />
      </AccountsContainer>
      <Amount maxAmount={2} />
      <Time />
      <TransferButton>
        <Button label="Transfer" />
      </TransferButton>
      <CancelButtonCon>
        <TextButton label="Cancel" />
      </CancelButtonCon>
    </Container>
  );
};
