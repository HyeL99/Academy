//react-bootstrap modal을 이용한 유튜브 팝업
import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'


const Trailer = ({title}) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Button variant="danger" onClick={() => setShow(true)}>
        🎥 트레일러 영상 보기
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default Trailer
