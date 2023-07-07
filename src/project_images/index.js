import I2I from "./i2i_1.png";
import BookOfCreativitea from "./book_of_creativitea.png";
import BookItBookstore from "./bookit_bookstore.png";
import Calcheck from "./calcheck.png";
function getInfoObject(info) {
  return {
    title: "Image to Image Translation",
    description: "Sample description",
    githubRepoLink: "",
    websiteLink: "",
    tags: [],
    ...info,
  };
}
const projectInfoMap = {
  [I2I]: getInfoObject({ title: "Image to Image Translation" }),
  [BookItBookstore]: getInfoObject({ title: "Book It Bookstore" }),
  [BookOfCreativitea]: getInfoObject({
    title: "Book of Creativitea",
    tags: ["test"],
  }),
  [Calcheck]: getInfoObject({
    title: "Calcheck",
    tags: [
      "HTML",
      "CSS",
      "jQuery",
      "MongoDB",
      "ExpressJS",
      "EJS",
      "nutritionixAPI",
    ],
  }),
};

const toolToTooltipContentMap = {
  HTML: "Expert",
  CSS: "Proficient",
};

const projectImages = [I2I, BookItBookstore, BookOfCreativitea, Calcheck];
export { projectImages, projectInfoMap };
// todo: figure out how to omit default export if possible
export default {};
