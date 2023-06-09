import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="  grid md:grid-cols-2 gap-5 md:max-w-[90%] mx-auto">
        <div className="contact">
          <h2 className="contact-heaing">Contact Us</h2>
          <h3 className="contact-heaing">We would like to here from you</h3>
          <p>
            Have questions about our language learning programs? Need assistance
            with enrollment or want to learn more about our courses? Feel free
            to reach out to us using the contact form below. Our team will be
            happy to assist you in any way we can. We value your feedback and
            suggestions as well. If you have any comments or ideas on how we can
            improve our services, we would love to hear from you.
          </p>
        </div>
        <div className="login-box">
          <form>
            <div className="user-box">
              <input type="text" name="" required />
              <label>Username</label>
            </div>
            <div className="user-box">
              <input type="text" name="" required />
              <label>Subject</label>
            </div>
            <div className="user-box">
              <textarea name="" required></textarea>
              <label>Write your message</label>
            </div>

            <a href="#">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Send Message
            </a>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
