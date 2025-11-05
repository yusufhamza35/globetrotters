import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socials = [
  {
    name: "facebook",
    profile: "",
    icon: <FaFacebook />,
    active: 1,
  },

  {
    name: "twitterx",
    profile: "",
    icon: <FaXTwitter />,
    active: 1,
  },

  {
    name: "youtube",
    profile: "",
    icon: <FaYoutube />,
    active: 1,
  },

  {
    name: "linkedin",
    profile: "",
    icon: <FaLinkedin />,
    active: 0,
  },

  {
    name: "instagram",
    profile: "",
    icon: <FaInstagram />,
    active: 1,
  },
];

export default socials;
