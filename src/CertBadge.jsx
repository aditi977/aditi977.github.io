import { Card, CardHeader, CardBody, CardFooter, Flex } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from '@chakra-ui/react'

export default function CertBadge({ icon }) {
    return (
        <Link href='https://www.credly.com/badges/761b9c2a-a324-48e0-997a-3337d8dde40b/embedded' isExternal>
            <Card maxW={32} minW={32} height={32} justify={'center'} align={'center'} size={'sm'} variant={'outline'} colorScheme='teal'>
                <FontAwesomeIcon icon={icon} fontSize={32} />
            </Card>
        </Link>





    )
}