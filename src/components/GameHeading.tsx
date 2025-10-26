import { Heading } from '@chakra-ui/react'
import React from 'react'
import { GameQuery } from '../App'

interface GameHeadingProps {
    gameQuery: GameQuery
}

const GameHeading = ({gameQuery}: GameHeadingProps) => {
    const headingText = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
  <Heading  as='h1' marginBottom={5}>
    {headingText}
  </Heading>
  )
}

export default GameHeading