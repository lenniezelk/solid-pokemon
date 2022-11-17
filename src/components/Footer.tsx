import { FaBrandsGithub } from 'solid-icons/fa';

const Footer = () => {
  return (
    <footer>
      <span>Built with &#128151; using</span>
      <a
        href="https://www.solidjs.com"
        target="_blank"
        style={{ 'margin-left': '8px' }}
      >
        Solid
      </a>
      <a
        href="https://github.com/lenniezelk/solid-pokemon"
        target="_blank"
        style={{ 'margin-left': '16px' }}
      >
        <FaBrandsGithub size={24} />
      </a>
    </footer>
  );
};

export default Footer;
