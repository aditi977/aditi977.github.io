import { Card, CardHeader, CardBody, CardFooter, Flex, Image } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'

export default function CertBadge({ cert }) {
    const { name, path, link } = cert
    return (
        <Link href={link} isExternal>
            <Tooltip label={name} aria-label='name-of-certification' placement='bottom' rounded='md' openDelay={250}>
                <Card p={2} justify={'center'} align={'center'} size={'sm'} variant={'outline'}>
                    <Image src={path} width={100} />

                </Card>
            </Tooltip>

        </Link>





    )
}