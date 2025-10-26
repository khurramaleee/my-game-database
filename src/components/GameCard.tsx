import React from "react";

import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import { PlatformIconList } from "./PlatformIconList";
import { Game } from "../hooks/useGames";
import { CricticScore } from "./CricticScore";

interface GameCardProps {
  game: Game;
}
export const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card >
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        <HStack justifyContent="space-between">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CricticScore score={game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};
