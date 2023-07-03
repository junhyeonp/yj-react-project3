import { HStack, Skeleton } from "@chakra-ui/react";

export default function SkeletonList() {
    return (
        <HStack spacing={2}>
            <Skeleton height='240px' width="180px" />
            <Skeleton height='240px' width="180px" />
            <Skeleton height='240px' width="180px" />
            <Skeleton height='240px' width="180px" />
            <Skeleton height='240px' width="180px" />
            <Skeleton height='240px' width="180px" />
            <Skeleton height='240px' width="180px" />
        </HStack>
    )
}