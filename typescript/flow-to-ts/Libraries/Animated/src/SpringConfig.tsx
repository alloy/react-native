'use strict';












type SpringConfigType = {
  stiffness: number;
  damping: number;

};

function stiffnessFromOrigamiValue(oValue) {
  return (oValue - 30) * 3.62 + 194;
}

function dampingFromOrigamiValue(oValue) {
  return (oValue - 8) * 3 + 25;
}

function fromOrigamiTensionAndFriction(tension: number, friction: number): SpringConfigType {
  return null as any;
}

function fromBouncinessAndSpeed(bounciness: number, speed: number): SpringConfigType {
  return null as any;
}

export default {
  fromOrigamiTensionAndFriction,
  fromBouncinessAndSpeed
};;
