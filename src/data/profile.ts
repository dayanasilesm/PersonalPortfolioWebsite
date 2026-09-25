import profilePhoto from "../assets/images/my-photo.jpg";
import cvFile from "../assets/docs/Dayana_Siles_CV_of.pdf";

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
