import React from "react";

class Details extends React.Component {
  render() {
    const {showData} = this.state
    console.log(showData)
    return (
      <div>
        <div
          class="modal fade bd-example-modal-lg"
          tabindex="-1"
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <img src="..." class="img-fluid" alt="Responsive image"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Details;
