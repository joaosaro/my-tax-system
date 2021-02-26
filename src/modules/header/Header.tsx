import React, { FC } from "react";
import { Heading, Text } from "../../components/typography";
import "./styles.scss";

const Header: FC = () => {
  return (
    <header className="header">
      <Heading>Tax System</Heading>
      <Text as="p">Gera o teu sistema de impostos</Text>
    </header>
  );
};

export default Header;
