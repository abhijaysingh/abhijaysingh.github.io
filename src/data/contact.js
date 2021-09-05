import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

const data = [
  {
    link: 'https://github.com/abhijaysingh',
    label: 'Github',
    icon: faGithub,
  },
  {
    link: 'https://www.instagram.com/_abhijaysingh_/',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: 'https://www.linkedin.com/in/abhijay-singh-420a26150?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BTa2JEJAFTe%2B8vAkNLF0g4w%3D%3D',
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'mailto:abhijaysingh98@gmail.com',
    label: 'Email',
    icon: faEnvelope,
  },
];

export default data;
