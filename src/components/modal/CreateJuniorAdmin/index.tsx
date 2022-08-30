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

const CreateJuniorAdminModal: React.FC<ModalProps> = ({
  showModal,
  toggle,
}) => {
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



  const labels = ["first name", "last name", "email", "phone number"];

  return (
    <SideModal
      isOpen={showModal}
      fullscreen
      toggle={toggle}
    >
      <ModalHeader className="border-0 ">
        <div className="d-flex">
          <Text color="blue_6" className="fs-22 pb-4 fw-bold text-capitalize">
            Create junior admin
          </Text>
          <div onClick={toggle} css={{ marginLeft: 160 }}>
            <img src={Close} alt="" />
          </div>
        </div>
      </ModalHeader>
      <ModalBody>
        <FormGroup className="mb-3">
          {labels.map((label, idx) => {
            return (
              <div key={idx}>
                <Label>
                  <Text
                    color="blue_6"
                    className="fs-13 fw-bold text-capitalize mb-1"
                  >
                    {label}
                  </Text>
                </Label>
                <Input
                  id="juniorAdmin"
                  type="text"
                  // value={branchNameInput}
                  // onChange={nameInput}
                  placeholder={label}
                  className="mb-3"
                />
              </div>
            );
          })}
          <Label for="branchName">
            <Text color="blue_6" className="fs-13 fw-bold text-capitalize mb-1">
              assign to branch
            </Text>
          </Label>
          <Input id="branchName" type="select" placeholder="Junior admin" />
        </FormGroup>
        <Button
          variant="green"
          css={{ width: "100%", marginTop: "50px" }}
          className="fw-bold"
          onClick={toggle}
        >
          Create
        </Button>
      </ModalBody>
      \
    </SideModal>
  );
};

export default CreateJuniorAdminModal;
