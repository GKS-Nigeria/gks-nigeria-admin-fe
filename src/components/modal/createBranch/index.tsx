/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-lone-blocks */
/** @jsxImportSource @emotion/react */
import React, { ChangeEvent, useEffect, useState } from "react";
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
import { useFormik } from "formik";
import {
  IBranchApiResponse,
  ICreateBranchOptions,
} from "../../../services/branch/types";
import { IBranch } from "../../../services/branch/types";
import { branchSchema } from "../../../services/branch/schema";

interface ModalProps {
  showModal: boolean;
  toggle: () => void;
  onClosed?: () => void;
  createFunction: (data: ICreateBranchOptions) => Promise<IBranchApiResponse>;
  onSuccess: () => void;
  branch?: IBranch;
}

const CreateBranchModal: React.FC<ModalProps> = ({
  showModal,
  toggle,
  createFunction,
  onSuccess,
  branch,
}) => {
  const initialValues: ICreateBranchOptions = {
    name: "",
    address: "",
  };

  const {
    handleSubmit,
    getFieldProps,
    setFieldValue,
    isValid,
    isSubmitting,
    touched,
    errors,
    resetForm,
  } = useFormik({
    initialValues,
    validationSchema: branchSchema,
    onSubmit(values, { setSubmitting }) {
      createFunction(values)
        .then(() => {
          console.log("submittinggg");
          onSuccess();
          toggle();
          resetForm();
        })
        .finally(() => setSubmitting(false));
    },
  });

  useEffect(() => {
    if (!branch) {
      resetForm();
      return;
    }
    setFieldValue("name", branch.name, true);
    setFieldValue("address", branch.address, true);
  }, [resetForm, setFieldValue, branch]);

  const labels = ["name", "address"];
  return (
    <SideModal isOpen={showModal} fullscreen toggle={toggle}>
      <ModalHeader className="border-0 ">
        <div className="d-flex">
          <Text color="blue_6" className="fs-22 pb-4 fw-bold text-capitalize">
            Create branch
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
                    <Text color="red" as="sup">
                      *
                    </Text>
                  </Text>
                  <Input
                    type="text"
                    placeholder={label}
                    {...getFieldProps(fieldName)}
                  />
                  {touched[fieldName] && errors[fieldName] ? (
                    <Text color="red" className="fs-13 m-0">
                      {errors[fieldName]}
                    </Text>
                  ) : null}
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

export default CreateBranchModal;
