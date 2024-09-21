import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function DeleteModel({show , onHide , setDelete}) {


  return (
    <>
      <Modal show={show} onHide={onHide}>
        <Modal.Body>Do you really want to delete this Product?!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>setDelete(false) }>
            Cancel
          </Button>
          <Button variant="danger" onClick={()=>setDelete(true)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModel;