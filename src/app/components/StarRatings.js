"use client";

import { StarIcon } from "@chakra-ui/icons";
import { Icon } from "@chakra-ui/react";

export default function StarRatings({ rating, color }) {
  const stars = [...Array(rating).keys()];
  return stars.map((item) => (
    <Icon key={`ratings-${item}`} as={StarIcon} color={color} />
  ));
}
