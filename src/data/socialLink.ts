interface SocialLinkType {
  id: string;
  name: string;
  image: string;
  link: string;
}

export const socialLink: SocialLinkType[] = [
  {
    id: "1",
    name: "github",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
    link: "https://github.com/AyjuYaas",
  },
  {
    id: "2",
    name: "linkedin",
    image:
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg",
    link: "https://www.linkedin.com/in/sayujya-satyal-3452b5217/",
  },
  {
    id: "3",
    name: "mail",
    image:
      "https://img.icons8.com/?size=100&id=P7UIlhbpWzZm&format=png&color=000000",
    link: "mailto:sayujya57@gmail.com",
  },
];
