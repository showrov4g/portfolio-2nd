import { GitHub, LinkedIn, Mail, Phone, X } from "@mui/icons-material";

const Contact = () => {
  return (
    <div className="flex justify-between items-center my-32">
      <div>Showrov Ghosh</div>
      <div>
        <div>
          <Phone></Phone>+8801746767631
        </div>
        <div>
          <Mail></Mail>showrovg00@gmail.com
        </div>
        <div>
          <ul>
            <li>
              <a href="https://github.com/showrov4g">
                <GitHub></GitHub>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/showrov4g/">
                <LinkedIn></LinkedIn>
              </a>
            </li>
            <li>
              <a href="https://x.com/showrov4g">
                <X></X>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;
