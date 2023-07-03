import { Box, Grid, HStack, Image, Skeleton, Text, VStack, } from "@chakra-ui/react";
import CarouselSlick from "../components/CarouselSlick";
import CardItems from "../components/CardItems";
import TitleImageSkew from "../components/TitleImageSkew";
import { useQuery } from "react-query";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import { comicsList, eventsList } from "../api";
import SkeletonList from "../components/SkeletonList";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";


const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
};

const featureLists = [
    { title: "스마트웹3기", description: "동해물과 백두산이 마르고 닳도록", buttonText: "자세히 보기" },
    { title: "대구수목원", description: "삼삼오오", buttonText: "자세히 보기" },
    { title: "스파이더맨 개봉", description: "극찬 이어져", buttonText: "예매하러 가기" },
]

export default function Home() {
    useEffect(() => { Aos.init(); }, [])

    const { isLoading, data } = useQuery('repoData', comicsList)

    const { data: eventsData, isLoading: eventsLoading } = useQuery('eventsData', eventsList
    )

    return <>
        <HelmetProvider>
            <Helmet>
                <title>마블 홈페이지 입니다.</title>
            </Helmet>
            {/* 캐러셀 */}
            <Box>
                <CarouselSlick />
            </Box>
            {/* 특장점 */}
            <HStack w="full" justifyContent="center" py="16" bg="gray.100" data-aos="fade-up">
                <Grid w={"7xl"} templateColumns={"repeat(3, 1fr)"} gap={"4"}>
                    {
                        featureLists.map((item, i) => (
                            <CardItems key={i} item={item} />
                        ))
                    }
                </Grid>
            </HStack>

            {/* 이벤트 타이틀 */}
            {/* 기울어진 이미지 타이틀 */}
            <div data-aos="fade-up">
                <TitleImageSkew title="comics" imgUrl="https://www.themoviedb.org/t/p/original/bpvjzk0QXbJPV4wVwrHuYiq1TbP.jpg" description="안녕" />
            </div>



            {/* Comiocs 컨텐츠 리스트 */}
            <div data-aos="fade-up">
                <VStack w="full" position="relative" h="400px">
                    {/* 흰박스 위로 올라오게 하는 범위지정 */}
                    <Box position="absolute" w="7xl" h="420px" top="-16" bg="white" py="8" px="2" >
                        {isLoading ? <SkeletonList /> : ""}
                        <Slider {...settings}>
                            {data?.data?.results?.map((item, i) => (
                                <Link to={`/comics/${item.id}?type=comics`} key={i}>
                                    <VStack h="full" role="group" cursor="pointer" >
                                        <Box w="170px" h="240px" _groupHover={{ transform: "scale(1.1)" }} transition="all 0.4s" overflow="hidden" >
                                            <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`} w="full" h="full" objectFit="cover" />
                                        </Box>
                                        <Text mt="2" py="2" _groupHover={{ color: "red.500", fontWeight: "600" }} transition="all 0.4s">{item.title.substring(0, 38)}</Text>
                                    </VStack>
                                </Link>
                            ))}
                        </Slider>
                    </Box>
                </VStack>
            </div>


            {/* 이벤트 타이틀 */}
            {/* 기울어진 이미지 타이틀 */}
            <TitleImageSkew title="comics" imgUrl="https://www.themoviedb.org/t/p/original/bpvjzk0QXbJPV4wVwrHuYiq1TbP.jpg" description="안녕" />

            {/* Events 컨텐츠 리스트 */}
            <VStack w="full" position="relative" h="400px">
                {/* 흰박스 위로 올라오게 하는 범위지정 */}
                <Box position="absolute" w="7xl" h="420px" top="-16" bg="white" py="8" px="2" >
                    {eventsLoading ? <SkeletonList /> : ""}
                    <Slider {...settings}>
                        {eventsData?.data?.results?.map((item, i) => (
                            <Link to={`/events/${item.id}?type=events`} key={i}>
                                <VStack h="full" role="group" cursor="pointer" >
                                    <Box w="170px" h="240px" _groupHover={{ transform: "scale(1.1)" }} transition="all 0.4s" overflow="hidden" >
                                        <Image src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={`Comics ${i}`} w="full" h="full" objectFit="cover" />
                                    </Box>
                                    <Text mt="2" py="2" _groupHover={{ color: "red.500", fontWeight: "600" }} transition="all 0.4s">{item.title.substring(0, 38)}</Text>
                                </VStack>
                            </Link>
                        ))}
                    </Slider>
                </Box>
            </VStack>

        </HelmetProvider>
    </>

}