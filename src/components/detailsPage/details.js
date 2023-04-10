import React from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Details = ({showModal, OnHide, MovieDetails}) =>  {

    return (
      <div>
      {showModal && MovieDetails?.map(item => {
        return (
          <Modal
          show={showModal} onHide={OnHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          key={item.id}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modal heading
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{item.title}</h4>
            <p>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
              ac consectetur ac, vestibulum at eros.
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={OnHide}>Close</Button>
          </Modal.Footer>
        </Modal>
        )
      }) 
     
      }
      
      </div>
    );
}

export default Details;
