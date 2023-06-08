import './Warning.css';
import { FaRadiationAlt } from 'react-icons/fa';
// eslint-disable-next-line react/prop-types
const Warning = ({ children }) => {
  return (
    <section>
      <div className="col-sm-12">
        <div
          className="alert fade alert-simple alert-warning alert-dismissible text-left font__family-montserrat font__size-16 font__weight-light brk-library-rendered rendered show"
          role="alert"
          data-brk-library="component__alert"
        >
          <button
            type="button"
            className="close font__size-18"
            data-dismiss="alert"
          >
            <span aria-hidden="true">
              <FaRadiationAlt className='times'></FaRadiationAlt>
            </span>
          </button>
          <i className="start-icon fa fa-exclamation-triangle faa-flash animated"></i>
          <strong className="font__weight-semibold">Warning!</strong>
          {children}
        </div>
      </div>
    </section>
  );
};

export default Warning;
