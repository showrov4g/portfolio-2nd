import { GitHub, LinkedIn, Mail, Phone, X } from "@mui/icons-material";

const Contact = () => {
  return (
    <div id='contact' className="md:flex justify-between items-center my-32 text-center border-y py-4">
      <div>Showrov Ghosh</div>
      <div className="md:flex justify-around gap-3">
        <div>
          <Phone></Phone>+8801746767631
        </div>
        <div>
          <Mail></Mail>showrovg00@gmail.com
        </div>
        <div>
          <ul className="flex gap-4">
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
