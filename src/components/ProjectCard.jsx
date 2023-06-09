/* eslint-disable react/jsx-key */
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Text, Flex, Heading } from "@chakra-ui/layout";
// import sample from "../project_images/calcheck.png"
import { Image } from "@chakra-ui/image";
import { Tag } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react'


function ProjectCard({project}) {
    const tagComps = project.tags.map((tag) => {
        return <Tag m={0.5} size={'sm'} >{tag}</Tag>
    })
   return (
     <Card maxW='md' fontSize='sm' variant='outline'>
        <CardHeader p={3}>
    <Heading fontSize='md' fontWeight={400} >Calcheck</Heading>
  </CardHeader>
        <Flex mb={1}>
            
        <Image src={project.imgSrc}/>
        </Flex>
        <Box m={1}>
        {tagComps}
        </Box>
    <CardBody>
        
        <Text size={'md'}>A calorie tracking website.</Text>
    </CardBody>
    <CardFooter>
        
    </CardFooter>
    </Card>
   );

}

export default ProjectCard;