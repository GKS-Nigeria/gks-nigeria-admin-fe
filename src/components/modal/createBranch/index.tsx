/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-lone-blocks */
/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useState } from "react";
import {
  ModalHeader,
  ModalBody,
  ModalFooter,
  FormGroup,
  Label,
} from "reactstrap";
import { Input } from "../../../lib/form/Input";
import { Text } from "../../../lib/Text";
import { Button } from "../../../lib/Button";
import { SideModal } from "../../../lib/SideModal";
import { useTheme } from "@emotion/react";
import Close from "../../../assets/icons/close.svg";


interface ModalProps {
  showModal: boolean;
  toggle: () => void;
}

const CreateBranchModal: React.FC<ModalProps> = ({ showModal, toggle }) => {
  const [branchName, setBranchName] = useState<any[] | null>(null);
  const [branhAddress, setBranchAddress] = useState<any[] | null>(null);
  const [branchNameInput, setBranchNameInput] = useState("");
  const [branchAddressInput, setBranchAddressInput] = useState("");
  const { palette } = useTheme();

  const nameInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBranchNameInput(e.target.value);
  };
  const addressInput = (e: ChangeEvent<HTMLInputElement>) => {
    setBranchAddressInput(e.target.value);
  };

  const resetModal = () => {
    setBranchNameInput("");
    setBranchName([]);
    setBranchAddressInput("");
    setBranchAddress([]);
  };

  return (
    <SideModal
      isOpen={showModal}
      fullscreen
      toggle={toggle}
      onClosed={resetModal}
    >
      <ModalHeader className="border-0 ">
        <div className="d-flex">
        <Text color="blue_6" className="fs-22 pb-4 fw-bold text-capitalize">
          Create branch
        </Text>
        <div onClick={toggle} css={{marginLeft:230}}>
        <img src={Close} alt="" />
        </div>
        </div>
      </ModalHeader>

      <ModalBody>
        <FormGroup className="mb-3">
          <Label for="branchName">
            <Text color="blue_6" className="fs-13 fw-bold text-capitalize mb-1">
              Branch Name
            </Text>
          </Label>
          <Input
            id="branchName"
            type="text"
            value={branchNameInput}
            onChange={nameInput}
            placeholder="Branch Name"
          />
          <Label for="address">
            <Text
              color="blue_6"
              className="fs-13 fw-bold text-capitalize mb-1 mt-4"
            >
              Address
            </Text>
          </Label>
          <Input
            id="fieldOfficer"
            type="text"
            value={branchAddressInput}
            onChange={addressInput}
            placeholder="Address"
          />
        </FormGroup>
        <Button
          variant="green"
          css={{ width: "100%", marginTop: "50px" }}
          className="btn fw-bold"
          onClick={toggle}
        >
          Create
        </Button>
      </ModalBody>
\
    </SideModal>
  );
};

export default CreateBranchModal;
