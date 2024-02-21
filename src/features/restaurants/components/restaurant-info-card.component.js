import React from "react";
import styled from "styled-components";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import {
  Icon,
  Adress,
  Info,
  Rating,
  Section,
  SectionEnd,
  RestaurantCard,
  RestaurantCardCover,
} from "./restaurant-info-card.style";

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "some resto",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMkQZYzDcEyfBJlPIRAO_2bPi3KlkEWFWqwYWN3i0-Cw&s",
    ],
    address = "somewhere over the raimbow",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover key={name} source={{ uri: photos[0] }} />
      <Info>
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporarily && (
              <Text variant="error">CLOSED TEMPORARILY</Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>

            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>

        <Adress>{address}</Adress>
      </Info>
    </RestaurantCard>
  );
};
