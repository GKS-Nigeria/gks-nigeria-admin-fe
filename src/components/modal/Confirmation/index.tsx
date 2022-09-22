/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */

import { ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Button } from "../../../lib/Button";
import { Modal } from "../../../lib/Modal";
import { Text } from "../../../lib/Text";
import { ThemeColors } from "../../../theme/style";


interface ConfirmationModalProps {
  showModal: boolean;
  toggle: () => void;
  onClosed?: () => void;
  confirmFunction: () => Promise<any>;
  header: string;
  desc: string;
  button: {
    text: string;
    color: ThemeColors;
  };
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  showModal,
  toggle,
  confirmFunction,
  header,
  desc,
  button,
  onClosed,
}) => {
  const handleClick = () => {
    confirmFunction()
      .then(() => {
        onClosed && onClosed();
      })
      .finally(() => toggle());
  };

  return (
    <Modal isOpen={showModal} centered toggle={toggle}>
      <ModalHeader>
        <Text color="black" className="fs-20 fw-bold text-capitalize">
          {header}
        </Text>
      </ModalHeader>
      <ModalBody>
        <Text color="black" className="fs-16">
          {desc}
        </Text>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="black_2"
          onClick={toggle}
          css={{ borderRadius: 10 }}
          className="outlined py-2 px-3 me-3"
        >
          Cancel
        </Button>
        <Button
          variant={button?.color ?? "gray_1"}
          onClick={handleClick}
          css={{ borderRadius: 10 }}
          className="py-2 px-3 text-capitalize"
        >
          {button?.text ?? "Confirm"}
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ConfirmationModal;
