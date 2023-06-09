import "./App.css";
import { Box, useColorMode } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Text, Tag, Image } from "@chakra-ui/react";
import me from "./assets/images/dark_mode_me.jpeg";
import me2 from "./assets/images/light_mode_me.jpeg";
import { Container } from "@chakra-ui/react";
function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  let mode;
  let myPic;

  if (colorMode == "dark") {
    mode = <MoonIcon />;
  } else {
    mode = <SunIcon />;
  }

  
  if (colorMode == "dark") {
    myPic = <Image  borderRadius="full" boxSize={[100,200,300]}objectFit="cover" src={me} />;
  } else {
    myPic = <Image  borderRadius="full" boxSize={[100,200,300]}objectFit="cover" src={me2} />;
  }

  


  return (
    <div>
      <Box align='right'>
      <IconButton
        aria-label="dark mode toggle"
        onClick={toggleColorMode}
        icon={mode}
        size="sm"
        
      />
      </Box>

      <Box align='center'>
        <Text fontSize='xl'>Hi, I'm Aditi!</Text> 
        
        {myPic}
      </Box>
      

      <Tabs

        size="sm"
        mt={4}
        orientation="horizontal"
        variant="soft-rounded"
        colorScheme="blue"
        align="center"
      >
        <TabList >
          <Tab> Elevator Speech </Tab>
          <Tab>Projects</Tab>
          <Tab>Certifications</Tab>
          <Tab>Other Interests</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Container maxW='2xl'>
            <Text fontSize="sm">
              I recently finished my B.S. in Computer Science at
              Virginia Tech. I'm now continuing as an MEng student in the
              Accelarated B.S./M.S program here. Initially, I started out with
              little to no coding experience. During the first summer of the
              pandemic, I began self-teaching web development. I built a few
              projects using <Tag size="sm">HTML</Tag>, <Tag size="sm">CSS</Tag>
              ,<Tag size="sm">JavaScript</Tag> and eventually moved on to using
              libraries like <Tag size="sm">React</Tag>. Most recently, I
              learned to code a full-stack application using the{" "}
              <Tag size="sm">VueJS</Tag> framework in the frontend and <Tag size="sm">MySQL</Tag> in the
              backend (for more info, checkout the Projects section!). I soon
              expanded to the cloud and got certified as an{" "}
              <Tag size="sm">AWS</Tag> Solutions Architect - Associate. I'm also
              interested in Machine Learning and Data Analytics, and would like
              to get more hands-on experience in industry.
            </Text>
            </Container>
            
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
