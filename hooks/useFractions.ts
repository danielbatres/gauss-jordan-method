import React from "react";
import Fraction from "fraction.js";

export function useFractions() {
  const convertToFraction = (value: number): string => {
    const fraction = new Fraction(value);
    return fraction.toFraction();
  };

  const convertedValue = (value: number): string | Fraction => {
    if (Number.isInteger(value)) {
      return value.toString()
    } else {
      return convertToFraction(value);
    }
  } 

  return [convertToFraction, convertedValue];
}