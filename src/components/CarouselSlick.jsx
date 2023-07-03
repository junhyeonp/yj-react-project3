import { Box, HStack } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function CarouselSlick() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 700,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return <Box w="full" h="full">
        <Slider {...settings}>
            <HStack
                w="full"
                h="450px"
                backgroundImage={"url('https://media.contentapi.ea.com/content/dam/news/www-ea/common/ea-motive-new-title-teaser-16x9.jpg.adapt.1456w.jpg')"}
                backgroundSize="cover"
            >
            </HStack>
            <HStack
                w="full"
                h="450px"
                backgroundImage={"url('https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg')"}
                backgroundSize="cover"
            >
                <HStack
                    w="full"
                    h="450px"
                    backgroundImage={"url('https://cdn.britannica.com/60/182360-050-CD8878D6/Avengers-Age-of-Ultron-Joss-Whedon.jpg')"}
                    backgroundSize="cover"
                ></HStack>
            </HStack>


        </Slider>
    </Box>
}