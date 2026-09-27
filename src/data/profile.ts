import profilePhoto from "../assets/images/my-photo.jpg";
import cvFile from "../assets/docs/Dayana_Siles_CV_of.pdf";

const whatsappMessage =
  "Hi, I want to communicate with you to coordinate a meeting to talk about my ideas for my project";

export const personalProfile = {
  firstName: "Dayana Alice",
  lastName: "Siles Miranda",
  fullName: "Dayana Alice Siles Miranda",
  initials: "DS",
  professionalTitle: "Frontend Developer",
  specialties: "Angular Specialist",
  email: "dayana.siles.m@gmail.com",
  phone: "+59169471893",
  location: "Cochabamba, Bolivia",
  availability: "Remote / Full-time available",
  contact: {
    whatsappMessage,
    whatsappUrl: `https://wa.me/59169471893?text=${encodeURIComponent(whatsappMessage)}`,
    emailUrl: `mailto:dayana.siles.m@gmail.com?subject=${encodeURIComponent("Portfolio contact")}&body=${encodeURIComponent("Hi Dayana, I would like to talk with you about a project.")}`,
  },
  photo: profilePhoto,
  photoAlt: "Dayana Alice Siles Miranda",
  links: {
    linkedin: {
      label: "LinkedIn",
      handle: "/in/dayana-siles",
      url: "https://www.linkedin.com/in/dayana-siles-dev/",
    },
    github: {
      label: "GitHub",
      handle: "github.com/dSiles98",
      url: "https://github.com/dSiles98",
    },
    figma: {
      label: "Figma Community",
      handle: "@dayana.siles",
      url: "https://www.figma.com/@dayanasiles",
    },
  },
  cvUrl: cvFile,
} as const;
