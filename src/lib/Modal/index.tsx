import styled from "@emotion/styled";
import { Modal as StrapModal } from "reactstrap";

export const Modal = styled(StrapModal)({
  "& .modal-content": {
    borderRadius: 5,
    borderColor: "transparent",
    boxShadow:
      "0px 0px 0px 1px rgba(152, 161, 178, 0.1), 0px 30px 70px -10px rgba(17, 24, 38, 0.25), 0px 10px 30px rgba(0, 0, 0, 0.2);",
  },
  "& .modal-header": {
    padding: "20px 20px 0",
    border: 0,
  },
  "& .modal-body": {
    padding: 20,
  },
  "& .modal-footer": {
    padding: 20,
    borderTopColor: "#E9EDF5",
  },
});
