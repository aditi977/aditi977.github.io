import "./App.css";
import { Box, SimpleGrid, color, useColorMode } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import {
  InfoOutlineIcon,
  StarIcon,
  SettingsIcon,
  CheckCircleIcon,
  MoonIcon,
  SunIcon,
} from "@chakra-ui/icons";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { Text, Tag, Image } from "@chakra-ui/react";
import me from "./assets/images/dark_mode_me.jpeg";
import me2 from "./assets/images/light_mode_me.jpeg";
import { Container } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import ProjectCard from "./components/ProjectCard";
import { projectImages, projectInfoMap } from "./project_images";

import { faAws } from '@fortawesome/free-brands-svg-icons'
import CertBadge from "./CertBadge";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  // Set based on color mode
  const mode = colorMode == "dark" ? <SunIcon /> : <MoonIcon />;
  const [smallerThan560] = useMediaQuery("(max-width: 560px)");

  // const projects = [
  //   {
  //     title: "Calcheck",
  //     imgSrc: '/project_images/calcheck.png"',
  //     tags: [
  //       "HTML",
  //       "CSS",
  //       "jQuery",
  //       "MongoDB",
  //       "ExpressJS",
  //       "EJS",
  //       "nutritionixAPI",
  //     ],
  //   },
  // ];

  const projectCards = projectImages.map((img, idx) => {
    return <ProjectCard key={idx} img={img} project={projectInfoMap[img]} />;
  });

  const bodyTextProps = {
    fontSize: smallerThan560 ? "sm" : "md",
    fontWeight: 400,
  };

  const tagProps = {
    size: bodyTextProps.fontSize, //todo: customize according to finalized theme
  };

  const tabProps = {
    ...bodyTextProps,
    mt: 4,
    orientation: "horizontal",
    variant: smallerThan560 ? "enclosed" : "solid-rounded",
    isFitted: smallerThan560,
    align: "center",
  };
  return (
    <div>
      <Box
        rounded="lg"
        // borderWidth="thin"
        // borderColor={colorMode == "dark" ? "gray.700" : "gray.200"}
        mt={5}
      >
        <Box align="right" p={4}>
          <IconButton
            aria-label="dark mode toggle"
            onClick={toggleColorMode}
            icon={mode}
            size="sm"
          />
        </Box>
        <Box align="center" m={4}>
          <Text fontSize={["md", "xl"]} mb={4}>
            Hi, I'm Aditi!
          </Text>
          <Image
            borderRadius="full"
            boxSize={[100, 200, 300]}
            objectFit="cover"
            src={colorMode == "dark" ? me : me2}
          />
        </Box>

        <Tabs {...tabProps}>
          <TabList>
            <Tab>
              {" "}
              {smallerThan560 ? <InfoOutlineIcon /> : "Elevator Speech"}{" "}
            </Tab>
            <Tab>{smallerThan560 ? <SettingsIcon /> : "Projects"}</Tab>
            <Tab>{smallerThan560 ? <CheckCircleIcon /> : "Certifications"}</Tab>
            <Tab>{smallerThan560 ? <StarIcon /> : "Other Interests"}</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Container p={0}>
                <Text {...bodyTextProps}>
                  I recently completed an Accelerated B.S./MEng Computer Science program at Virginia
                  Tech. During my undergraduate degree, I majored in Data-Centric Computing and minored in Human-Computer Interaction (HCI). During my graduate degree, my focus became Software Development & Applications.
                  I started out with little to no coding experience.
                  However, during the first summer of the pandemic, I began self-teaching
                  web development. I built a few projects using{" "}
                  <Tag {...tagProps}>HTML</Tag>, <Tag {...tagProps}>CSS</Tag>,
                  <Tag {...tagProps}>JavaScript</Tag> and eventually moved on to
                  using libraries like <Tag {...tagProps}> React</Tag>. Most
                  recently, I learned to code a full-stack application using the{" "}
                  <Tag {...tagProps}>VueJS</Tag> framework in the frontend and{" "}
                  <Tag {...tagProps}>MySQL</Tag> in the backend (for more info,
                  checkout the Projects section!). I soon expanded to the cloud
                  and got certified as an <Tag {...tagProps}>AWS</Tag> Solutions
                  Architect - Associate. I am also interested in exploring
                  Machine Learning and Data Analytics, and would like to get
                  more hands-on experience in industry.
                </Text>
              </Container>
            </TabPanel>
            <TabPanel>
              <p>Projects</p>
              <SimpleGrid
                columns={{ sm: 2, md: 3, lg: 3, xl: 4 }}
                justifyItems={"center"}
                spacing={10}
                mt={10}
              >
                {projectCards}
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <SimpleGrid columns={{ sm: 1, xl: 2 }} spacing={2} justifyItems={"center"}>
                <CertBadge icon={faAws} />
              </SimpleGrid>
            </TabPanel>
            <TabPanel>
              <p>Other Interests</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </div>
  );
}

export default App;
