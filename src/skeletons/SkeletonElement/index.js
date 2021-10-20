import React from "react";
import Shimmer from "../Shimmer";
import { SkeletonItem } from "./styles";

export default function SkeletonElement({ type }) {
  return (
    <SkeletonItem className={type}>
      <Shimmer />
    </SkeletonItem>
  );
}
