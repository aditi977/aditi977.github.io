import "./App.css";
import { Box, useColorMode } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { InfoOutlineIcon, StarIcon, SettingsIcon, CheckCircleIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Text, Tag, Image } from "@chakra-ui/react";
import me from "./assets/images/dark_mode_me.jpeg";
import me2 from "./assets/images/light_mode_me.jpeg";
import { Container } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import ProjectCard from "./components/ProjectCard";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  // Set based on color mode
  const mode = (colorMode == "dark") ? <SunIcon /> : <MoonIcon />;
  const  myPic = <Image  borderRadius="full" boxSize={[100,200,300]}objectFit="cover" src={(colorMode == "dark") ? me : me2} />;
  const [ smallerThan560 ] = useMediaQuery('(max-width: 560px)')
  const baseUrl = '/project_images/'
  const projects = [
    { title: 'Calcheck',
      imgSrc: '/project_images/calcheck.png"',
      tags: ['HTML', 'CSS', 'jQuery', 'MongoDB', 'ExpressJS', 'EJS', 'nutritionixAPI']
    }
  ]

  const projectCards = projects.map((project) => {
    return <ProjectCard project={project}/>
  })

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
        <Text fontSize={['md','xl']} mb={4}>Hi, I'm Aditi!</Text> 
        {myPic}
      </Box>
      

      <Tabs
        size={(smallerThan560 ? "md": "sm")}
        mt={4}
        orientation="horizontal"
        variant={smallerThan560? "enclosed": "soft-rounded"}
        isFitted={smallerThan560? true: false}
        colorScheme="blue"
        align="center"
      >
        <TabList >
          <Tab> {smallerThan560 ? <InfoOutlineIcon/> : 'Elevator Speech'} </Tab>
          <Tab>{smallerThan560 ? <SettingsIcon/> : 'Projects'}</Tab>
          <Tab>{smallerThan560 ? <CheckCircleIcon/> : 'Certifications'}</Tab>
          <Tab>{smallerThan560 ? <StarIcon/> : 'Other Interests'}</Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Container maxW='2xl' p={0}>
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
            <p>Projects</p>
            {projectCards}
          </TabPanel>
          <TabPanel>
            <p>Certifications</p>
          </TabPanel>
          <TabPanel>
            <p>Other Interests</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default App;
