import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function NotFound(){
    return <VStack w="full" justifyContent="center" h="100vh">
        <Heading>404</Heading>
        <Text>페이지가 존재하지 않습니다</Text>
        <Link to="/">
            <Button>홈으로가기</Button>
        </Link>
    </VStack>
}