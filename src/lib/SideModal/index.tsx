import styled from "@emotion/styled";
import { Modal as StrapModal } from "reactstrap";

export const SideModal = styled(StrapModal)({
  "& .modal-content": {
    borderRadius: 0,
    borderColor: "transparent",
    maxWidth: 500,
    // left: 940,
    width: "100%",
    boxShadow:
      "0px 0px 0px 1px rgba(152, 161, 178, 0.1), 0px 30px 70px -10px rgba(17, 24, 38, 0.25), 0px 10px 30px rgba(0, 0, 0, 0.2);",
  },
  "& .modal-header": {
    padding: "20px 40px 0",
    border: 0,
  },
  "& .modal-body": {
    padding: 40,
  },
  "& .modal-footer": {
    padding: 20,
    borderTopColor: "#E9EDF5",
  },
});
