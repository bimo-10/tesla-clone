import React from "react";
import styled from "styled-components";
import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-s.jpg"
      />

      <Section
        title="Model Y"
        desc="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-y.jpg"
      />

      <Section
        title="Model 3"
        desc="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-3.jpg"
      />

      <Section
        title="Model X"
        desc="Order Online for Touchless Delivery"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="model-x.jpg"
      />

      <Section
        title="Solar Panels in America"
        desc="Money-back guarantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
        backgroundImg="solar-panel.jpg"
      />

      <Section
        title="Solar for New Roofs"
        desc="Solar Roofs Costs Less Than a New Roof Plus Solar Panels"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        backgroundImg="solar-roof.jpg"
      />

      <Section
        title="Accessories"
        desc=""
        leftBtnText="Custom Order"
        backgroundImg="accessories.jpg"
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
`;

export default Home;
