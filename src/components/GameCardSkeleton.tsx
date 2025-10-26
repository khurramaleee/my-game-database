import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React, { ReactNode } from 'react'

export const GameCardSkeleton = () => {
  return (
    <Card >
        <Skeleton height="200px"  />
        <CardBody>
            <SkeletonText height="20px"/>
            <SkeletonText height="20px" />
        </CardBody>
    </Card>
  )
}
