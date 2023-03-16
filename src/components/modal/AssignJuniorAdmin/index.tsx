/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useState, useEffect } from "react";
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
import { Modal } from "../../../lib/Modal";
import { useTheme } from "@emotion/react";
import { IJuniorAdmin } from "../../../services/user/types";
import { getAllJuniorAdmins } from "../../../services/user";

interface ModalProps {
  showModal: boolean;
  toggle: () => void;
}

const AssignModal: React.FC<ModalProps> = ({ showModal, toggle }) => {

  const [juniorAdminApiResponse, setJuniorAdminApiResponse] = useState<
    IJuniorAdmin[]
  >([]);
  const { palette } = useTheme();


  useEffect(() => {
    getAllJuniorAdmins().then((res) => {
      setJuniorAdminApiResponse(res.data.results);
      if (res.success === true) {
        // setLoading(false);
      }
    });
  }, []);

  const juniorAdminData = juniorAdminApiResponse.map((item) => {
    return item.adminId;
  });
  console.log(juniorAdminData);
  return (
    <Modal isOpen={showModal} centered toggle={toggle}>
      <ModalHeader className="border-0 ">
        <Text color="blue_6" className="fs-22 pr-6 fw-bold text-capitalize">
          Assign
        </Text>
      </ModalHeader>

      <ModalBody>
        <Text color="blue_6" className="mb-5">
          Search or select to assign a Junior Admin to Isolo branch
        </Text>
        <FormGroup className="mb-3">
          <Label for="juniorAdmin">
            <Text color="black" className="fs-13 fw-bold text-capitalize mb-1">
              Junior Admin
            </Text>
          </Label>
          <Input type="select">
            <option value="">-select-</option>

            {juniorAdminData.map((field, idx) => {
              return (
                <option key={idx} value={field._id}>
                  {field.firstName} {field.lastName}
                </option>
              );
            })}
          </Input>
        </FormGroup>
      </ModalBody>
      <ModalFooter>
        <Button
          variant="black"
          onClick={toggle}
          css={{ borderRadius: 6 }}
          className="outlined btn py-2 px-3 me-3"
          type="button"
        >
          Cancel
        </Button>
        <Button
          variant="green"
          className="py-2 px-3 text-capitalize"
          //   onClick={assignToJuniorAdmin}
        >
          Assign
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default AssignModal;
