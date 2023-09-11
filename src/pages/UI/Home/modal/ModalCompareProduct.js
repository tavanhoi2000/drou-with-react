import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalCompareProduct = ({ showModalCompare, setShowModalCompare }) => {
  return (
    <Modal
      show={showModalCompare}
      onHide={() => setShowModalCompare(false)}
      scrollable={false}
    >
      <Modal.Header closeButton>
        <Modal.Title className="text-center">Compare Product</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <table className="table table-hover table-responsive">
          <thead>
            <tr className="th-compare">
              <td>Action</td>
            </tr>
          </thead>
          <tbody id="table-compare">
            <tr>
              <th width="15%" className="product-name">
                Product name
              </th>
            </tr>
            <tr>
              <th width="15%" className="product-name">
                Product image
              </th>
            </tr>
            <tr>
              <th width="15%" className="product-name">
                Product description
              </th>
            </tr>
            <tr />
            <tr>
              <th width="15%" className="product-name">
                Availability
              </th>
            </tr>
            <tr />
          </tbody>
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button
          type="button"
          className="btn btn-light btn-elevate"
          onClick={() => setShowModalCompare(false)}
        >
          Hủy
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCompareProduct;
