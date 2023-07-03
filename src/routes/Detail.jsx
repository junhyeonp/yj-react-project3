import { Avatar, Box, Grid, GridItem, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { useQuery } from "react-query"
import { useLocation, useParams } from "react-router-dom"

export default function Detail() {
    const { id } = useParams();
    const { search } = useLocation();
    const paramData = search.split('=')
    console.log(paramData)
    console.log(search)

    const { data } = useQuery(paramData[1], () =>
        fetch(`https://gateway.marvel.com:443/v1/public/${paramData[1]}/${id}?apikey=0c90e701f4899622ea1b5628ea8df350`).then(res =>
            res.json()
        )
    )

    return (
        <>
            <Box>
                <VStack w="full" h="650px" backgroundImage={`${data?.data?.results[0].thumbnail?.path}.${data?.data?.results[0].thumbnail.extension}`}
                    backgroundRepeat="no-repeat" backgroundSize="cover" backgroundPosition="center" alignItems="center" position="relative" >
                    <Box position="absolute" top="0" left="0" w="full" h="full" bg="rgba(0,0,0,0.5)">
                        <HStack w="7xl" h="full" alignItems="center" zIndex="99">
                            <Grid templateColumns="350px 1fr" gap="8">
                                <GridItem>
                                    <Box w="full" h="550px" transform="translateY(-40px)">
                                        <Image src={`${data?.data?.results[0].thumbnail.path}.${data?.data?.results[0].thumbnail.extension}`} />
                                    </Box>
                                </GridItem>
                                <GridItem>
                                    <VStack h="full" justifyContent="flex-start" alignItems="flex-start">
                                        <Text fontWeight="600" fontSize="xl">{data?.data?.results[0].title}</Text>
                                        <Text color="gray.700" font="lg">
                                            {data?.data?.results[0].variantDescription}
                                        </Text>
                                        <VStack alignItems="flex-start">
                                            <Text color="white" fontWeight="600" fontSize="xl">Creator</Text>
                                            <HStack w="full" justifyContent="flex-start">
                                                {data?.data?.results[0]?.creator?.items?.map((item, i) =>
                                                    <VStack>
                                                        <Avatar src={item.resourceURI} name={item.name}></Avatar>
                                                        <Text color="white" key={i}>{item.name}</Text>
                                                    </VStack>
                                                )}
                                            </HStack>
                                        </VStack>
                                    </VStack>
                                </GridItem>
                            </Grid>
                        </HStack>
                    </Box>
                </VStack>
            </Box>
        </>

    )
}