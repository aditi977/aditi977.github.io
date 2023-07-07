/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import { Card, CardHeader, CardBody, CardFooter } from "@chakra-ui/react";
import { Text, Flex, Heading } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { Tag } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Slide, Button, useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

function SlideEx({ description }) {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button onClick={onToggle}>Click Me</Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box
          p="100px"
          color="white"
          mt="4"
          bg="teal.500"
          rounded="md"
          shadow="md"
        >
          {description}
        </Box>
      </Slide>
    </>
  );
}
const ProjectInfoModal = ({ onClose, isOpen, project, img }) => {
  const tagComps = project.tags.map((tag, idx) => {
    return (
      <Tag m={0.5} key={idx} size={"md"}>
        {tag}
      </Tag>
    );
  });
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size={{ base: "full", sm: "4xl ", lg: "5xl" }}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{project.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex justifyContent={"center"}>
            <Image src={img} />
          </Flex>
          {tagComps.length > 0 && (
            <Box m={1} textAlign={"center"}>
              {tagComps}
            </Box>
          )}
          <Text>{project.description}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
function ProjectCard(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { img } = props;
  return (
    <Card
      fontSize="sm"
      variant="outline"
      onClick={onOpen}
      cursor="pointer"
      direction="row"
      overflow={"hidden"}
    >
      <Image src={img} objectFit="cover" />
      {/* <CardHeader p={3}>
        <Heading fontSize="md" fontWeight={400}>
          {project.title}
        </Heading>
      </CardHeader> */}
      <ProjectInfoModal isOpen={isOpen} onClose={onClose} {...props} />
      {/* <CardBody>
        <Text size={"md"}>{project.description}</Text>
      </CardBody>
      <CardFooter>
        <SlideEx description={project.description} />
      </CardFooter> */}
    </Card>
  );
}

export default ProjectCard;
