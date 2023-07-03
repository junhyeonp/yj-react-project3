import { Box, Grid, GridItem, HStack, Image, Select, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query";
import { charactersList } from "../api";
import { useState } from "react";
import SkeletonList from "../components/SkeletonList"
import Pagination from "react-js-pagination";
import './Paging.css'
import { Helmet, HelmetProvider } from "react-helmet-async";

export default function Characters() {
    const [numLimit, setNumLimit] = useState(6);
    const [page, setPage] = useState(1);
    const { data, isLoading } = useQuery(["characters", { numLimit, page }], charactersList);


    const handleChange = (e) => {
        setNumLimit(e.target.value);
    };

    const total = data?.data?.total


    const handlePageChange = (page) => {
        setPage(page)
    }
    return (
        <HelmetProvider>
            <Helmet>
                <title>마블페이지-Characters</title>
            </Helmet>
            <VStack w="full" pb="16">
                <Box w="full" h="64" overflow="hidden">
                    <Image
                        w="full"
                        h="full"
                        objectFit="cover"
                        src="https://images.unsplash.com/photo-1662010021854-e67c538ea7a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=652&q=80" alt="Characters Img" />
                </Box>
                <VStack w="7xl">
                    {/* 타이틀 */}
                    <HStack w="full" py="16" justifyContent="space-between">
                        <Box>
                            <Text fontSize={24} fontWeight="bold" textTransform="uppercase">Characters</Text>
                        </Box>
                        <Select w="32" onChange={handleChange}>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="18">18</option>
                            <option value="24">24</option>
                            <option value="30">30</option>
                            <option value="36">36</option>
                        </Select>
                    </HStack>
                    {/* 게시판 */}
                    <Grid templateColumns={"repeat(6,1fr)"} w="full" gap="4">
                        {isLoading && <SkeletonList />}
                        {data?.data?.results.map((item, i) => (
                            <GridItem w="220px" bg="red.500" role="group">
                                <VStack w="full">
                                    {/* 1번째 박스 (이미지) */}
                                    <Box w="full" h="48" overflow="hidden">
                                        <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="characters content"
                                            w="full"
                                            h="full"
                                            objectFit="cover"
                                            transition="0.4s"
                                            _groupHover={{ transform: 'scale(1.2)' }} />
                                    </Box>
                                    {/* 2번째 박스 (타이틀) */}
                                    <Box w="full" h="36" position="relative" overflow="hidden" >
                                        {/* 호버시 이동하는 빈박스 */}
                                        <Box position="absolute" top="0px" left="0" w="full" h="full" bg="gray.800" _groupHover={{ top: '180px' }} transition="0.4s" />
                                        <Box position="absolute" bottom="-15px" right="-15px" bg="white" w="30px" h="30px" transform="rotate(45deg) scale(2)" />
                                        <Text position="absolute" top="10px" left="10px" fontSize="14" color="white" fontWeight="semibold">{item.name}</Text>
                                    </Box>
                                </VStack>
                            </GridItem>
                        ))}
                    </Grid>
                    {/* 페이지네이션 */}
                    <Box>
                        <Pagination
                            activePage={page}
                            itemsCountPerPage={numLimit}
                            totalItemsCount={total}
                            pageRangeDisplayed={5}
                            onChange={handlePageChange}
                        />
                    </Box>
                </VStack>
            </VStack >
        </HelmetProvider>
    )
}