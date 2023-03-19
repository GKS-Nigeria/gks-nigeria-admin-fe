/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-lone-blocks */
/** @jsxImportSource @emotion/react */
import React, {useEffect } from "react";
import {
  ModalHeader,
  ModalBody,
 
  FormGroup,
 
} from "reactstrap";
import { Input } from "../../../lib/form/Input";
import { Text } from "../../../lib/Text";
import { Button } from "../../../lib/Button";
import { SideModal } from "../../../lib/SideModal";
import Close from "../../../assets/icons/close.svg";
import { useFormik } from "formik";
import {
  IBranchApiResponse,
  ICreateGroupsOptions,
} from "../../../services/branch/types";
import { IBranch } from "../../../services/branch/types";
import { useParams } from "react-router-dom";
 

interface ModalProps {
  showModal: boolean;
  toggle: () => void;
  onClosed?: () => void;
  createFunction: (data: ICreateGroupsOptions) => Promise<IBranchApiResponse>;
  onSuccess: () => void;
  group?: IBranch;
}

const CreateGroupModal: React.FC<ModalProps> = ({
  showModal,
  toggle,
  createFunction,
  onSuccess,
  group,
}) => {
  const { id } = useParams();
  const initialValues: ICreateGroupsOptions = {
    name: "",
    branchId: `${id}`,
  };

  const {
    handleSubmit,
    getFieldProps,
    setFieldValue,
    isValid,
    isSubmitting,
    resetForm,
  } = useFormik({
    initialValues,
    
    onSubmit(values, { setSubmitting }) {
      createFunction(values)
        .then(() => {
          onSuccess();
          toggle();
          resetForm();
        })
        .finally(() => setSubmitting(false));
    },
  });

  useEffect(() => {
    if (!group) {
      resetForm();
      return;
    }
    setFieldValue("name", group.name, true);
    setFieldValue("branch", group.address, true);
  }, [resetForm, setFieldValue, group]);

  const labels = ["group name",];
  return (
    <SideModal isOpen={showModal} fullscreen toggle={toggle}>
      <ModalHeader className="border-0 ">
        <div className="d-flex">
          <Text color="blue_6" className="fs-22 pb-4 fw-bold text-capitalize">
            Create group
          </Text>
          <div onClick={toggle} css={{ marginLeft: 230 }}>
            <img src={Close} alt="" />
          </div>
        </div>
      </ModalHeader>
      <form onSubmit={handleSubmit}>
        <ModalBody>
          <FormGroup className="mb-3">
            {labels.map((label, idx) => {
              const fieldName = Object.keys(initialValues)[idx];
              return (
                <div key={idx} className="mb-3">
                  <Text
                    color="black"
                    className="fs-13 fw-bold text-capitalize mb-1"
                  >
                    {label}
                   
                  </Text>
                  <Input
                    type="text"
                    placeholder={label}
                    {...getFieldProps(fieldName)}
                  />
                  
                </div>
              );
            })}
          </FormGroup>
          <Button
            variant="green"
            type="submit"
            css={{ width: "100%", marginTop: "50px" }}
            className="fw-bold"
            disabled={!isValid || isSubmitting}
          >
            {isSubmitting ? "submiting" : "Create"}
          </Button>
        </ModalBody>
      </form>
    </SideModal>
  );
};

export default CreateGroupModal;
