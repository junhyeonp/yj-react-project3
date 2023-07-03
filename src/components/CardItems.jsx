import { Button, Card, CardBody, CardFooter, CardHeader, Heading, Text } from "@chakra-ui/react"

export default function CardItems({ item }) {
    return (
        <Card>
            <CardHeader>
                <Heading size='md'>{item.title}</Heading>
            </CardHeader>
            <CardBody>
                <Text>{item.description}</Text>
            </CardBody>
            <CardFooter>
                <Button>{item.buttonText}</Button>
            </CardFooter>
        </Card>
    )
}