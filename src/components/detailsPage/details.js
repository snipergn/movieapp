import React from "react";

class Details extends React.Component {
  render() {
    const showHideClassName = this.handleModal ? "modal display-block" : "modal display-none";
    return (
      <div>
        {
          // When press the image the modal is on
          // The modal shows information about movie like trailer, details if is needed.
          // Display information in order like netflix
        }
        <div
          class= {showHideClassName}
          id="exampleModalCenter"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">...</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Details;
