import React, { FC, useEffect, useState } from "react";
import "./index.scss";

type Props = {
  contact: any;
  deleteContact: Function;
  viewContact: Function;
  editContact: Function;
};

export const ContactDetails: FC<Props> = ({
  contact,
  deleteContact,
  viewContact,
  editContact,
}) => {
  const [contactDetails, setContactDetails] = useState([]);

  useEffect(() => {
    setContactDetails(contact.listData);
  }, [contact]);

  const handleDelete = (index: any) => {
    deleteContact(index);
  };

  const handleView = (index: any) => {
    viewContact(index);
  };
  const handleEdit = (index: any) => {
    editContact(index);
  };

  return (
    <div className="container">
      {!contactDetails ||
        (contactDetails.length < 1 && (
          <div className="noContact">No contacts found</div>
        ))}
      {contactDetails.map((contact: any, index: any) => (
        <div className="contact" key={contact.telephone}>
          <div>
            <i className="bi bi-person"></i>
          </div>
          <div>
            {contact.firstName} {contact.lastName}
          </div>
          <div>{contact.telephone}</div>
          <div>{contact.email}</div>
          <div>
            <i
              className="bi bi-arrow-up-right-square-fill"
              onClick={() => handleView(index)}
            />
            <i
              className="bi bi-pencil-fill"
              onClick={() => handleEdit(index)}
            ></i>
            <i className="bi bi-trash" onClick={() => handleDelete(index)}></i>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ContactDetails;
