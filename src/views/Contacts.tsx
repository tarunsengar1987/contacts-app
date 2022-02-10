import React, { FC, useCallback, useEffect, useState } from "react";
import { ContactDetails } from "components";
import {
  loadContacts,
  addContact,
  viewContact,
  updateContact,
  deleteContact,
} from "redux/actions/contactsActions";
import { connect } from "react-redux";
import { AddContact } from "components/addContact/index";

type Props = {
  loadContacts?: any;
  addContact?: any;
  viewContact?: any;
  updateContact?: any;
  deleteContact?: any;
  allContacts?: any;
};

const Contacts: FC<Props> = ({
  loadContacts,
  addContact,
  viewContact,
  updateContact,
  deleteContact,
  allContacts,
}) => {
  const loadingContacts = useCallback(() => {
    loadContacts();
  }, [loadContacts]);

  useEffect(() => {
    loadingContacts();
  }, [loadingContacts]);

  const [showContacts, setShowContacts] = useState(true);
  const [showAddContacts, setShowAddContacts] = useState(false);
  const [readOnly, setReadonly] = useState(false);
  const [showAddButton, setShowAddButton] = useState(true);
  const [editDataIndex, setEditDataIndex] = useState("");

  const handelShowContacts = () => {
    setShowAddContacts(false);
    setShowContacts(true);
    setShowAddButton(true);
  };

  const handleShowAddContacts = () => {
    setShowContacts(false);
    setShowAddContacts(true);
    setReadonly(false);
    setShowAddButton(false);
  };

  const handleAddContacts = (data: any) => {
    addContact(data);
    setShowAddContacts(false);
    setShowContacts(true);
    setShowAddButton(true);
  };

  const handleViewContacts = (data: any) => {
    setShowContacts(false);
    setShowAddContacts(true);
    setReadonly(true);
    viewContact({ data });
    setShowAddButton(false);
  };

  const handleShowEditContacts = (data: any) => {
    setShowContacts(false);
    setShowAddContacts(true);
    setReadonly(false);
    viewContact({ data, isEditMode: true });
    setEditDataIndex(data);
    setShowAddButton(false);
  };
  const handleEditContact = (data: any, index: any) => {
    updateContact(data, index);
    setShowAddContacts(false);
    setShowContacts(true);
    setShowAddButton(true);
    setEditDataIndex("");
  };

  const handleDeleteContact = (data: any) => {
    deleteContact(data);
  };

  return (
    <div>
      <div className="container">
        <div className="row py-2">
          <div className="col  d-flex justify-content-start">
            {showAddContacts && (
              <i
                style={{ fontSize: "30px", color: "white" }}
                className="bi bi-arrow-left-circle"
                onClick={handelShowContacts}
              ></i>
            )}
          </div>
          <div className="col  d-flex justify-content-center">
            <h3 onClick={handelShowContacts}>Contact App</h3>
          </div>
          <div className="col d-flex justify-content-end">
            {showAddButton && (
              <button
                className="btn btn-outline-light btn-sm"
                onClick={handleShowAddContacts}
              >
                + Add New
              </button>
            )}
          </div>
        </div>
      </div>
      {showContacts && (
        <ContactDetails
          contact={allContacts}
          deleteContact={handleDeleteContact}
          viewContact={handleViewContacts}
          editContact={handleShowEditContacts}
        />
      )}
      {showAddContacts && (
        <AddContact
          addContact={handleAddContacts}
          editContact={handleEditContact}
          readonly={readOnly}
          viewContactData={allContacts.viewData}
          editContactData={allContacts.editData}
          isEditMode={allContacts.viewIsEditMode}
          editIndex={editDataIndex}
        />
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch: any) => ({
  loadContacts: () => dispatch(loadContacts()),
  addContact: (data: any) => dispatch(addContact(data)),
  deleteContact: (data: any) => dispatch(deleteContact(data)),
  viewContact: (data: any) => dispatch(viewContact(data)),
  updateContact: (data: any, index: any) =>
    dispatch(updateContact(data, index)),
});

const mapStateToProps = ({ contact }: any) => ({
  allContacts: contact,
});

const Contact = connect(mapStateToProps, mapDispatchToProps)(Contacts);

export default Contact;
