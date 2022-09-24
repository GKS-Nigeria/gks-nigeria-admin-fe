/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-lone-blocks */
/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from "react";
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
import Close from "../../../assets/icons/close.svg";
import { useFormik } from "formik";
import {
  ICreateJuniorAdminOptions,
  IJuniorAdminApiResponse,
  IJuniorAdmin,
} from "../../../services/user/types";
import { createJuniorAdmin } from "../../../services/user";
// import { IJuniorAdminApiResponse } from "../../../services/user/types";
import { juniorAdminSchema } from "../../../services/user/schema";
import { getAllBranch } from "../../../services/branch";
import { IBranch } from "../../../services/branch/types";

interface ModalProps {
  showModal: boolean;
  toggle: () => void;
  onClosed?: () => void;
  createFunction: (
    data: ICreateJuniorAdminOptions
  ) => Promise<IJuniorAdminApiResponse>;
  onSuccess: () => void;
  juniorAdmin?: IJuniorAdmin;
}

const CreateJuniorAdminModal: React.FC<ModalProps> = ({
  showModal,
  toggle,
  createFunction,
  onSuccess,
  juniorAdmin,
}) => {
  const initialValues: ICreateJuniorAdminOptions = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    branch: "",
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
    validationSchema: juniorAdminSchema,
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
  const [branchApiResponse, setBranchApiResponse] = useState<IBranch[]>([]);
  const [branchName, setBranchName] = useState(["isolo", "ajah"]);

  useEffect(() => {
    getAllBranch().then((res) => {
      setBranchApiResponse(res.data.results);
    });
  }, []);

  const branchApiResponseData = branchApiResponse;
  const branchData = branchApiResponseData.map((item) => {
    return item.branch.name;
  });
  // const branchData = branchApiResponseData.map((item) => {
  //   return item.branch.name
  // })
  // setBranchName(  item.branch.name )
  // branchApiResponseData.map((item, idx) => {
  //     setBranchName(  item.branch.name ) })
  // setBranchName( branchData )

  console.log(branchData);
  useEffect(() => {
    if (!juniorAdmin) {
      resetForm();
      return;
    }
    setFieldValue("firtName", juniorAdmin.firstName, true);
    setFieldValue("lastName", juniorAdmin.lastName, true);
    setFieldValue("email", juniorAdmin.email, true);
    setFieldValue("phone", juniorAdmin.phone, true);
    setFieldValue("branch", juniorAdmin.branch, true);
  }, [resetForm, setFieldValue, juniorAdmin]);

  const labels = ["first name", "last name", "email", "phone number", "branch"];

  return (
    <SideModal isOpen={showModal} fullscreen toggle={toggle}>
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
                    key={idx}
                    type={
                      label === "phone number"
                        ? "tel"
                        : label === "email address"
                        ? "email"
                        : label === "branch"
                        ? "select"
                        : "text"
                    }
                    placeholder={label}
                    {...getFieldProps(fieldName)}
                  >
                    <option value="">-select-</option>
                    <option value={"63244684806b8d04045f5303"}>Lekki</option>
                    
                    {branchName.map((field, idx) => {
                      return (
                        <option key={idx} value={field}>
                          {field}
                        </option>
                      );
                    })}
                  </Input>

                  {touched[fieldName] && errors[fieldName] ? (
                    <Text color="red" className="fs-13 m-0">
                      {errors[fieldName]}
                    </Text>
                  ) : null}
                </div>
              );
            })}
            {/* <Label for="branchName">
            <Text color="blue_6" className="fs-13 fw-bold text-capitalize mb-1">
              assign to branch
            </Text>
          </Label>
          <Input id="branchName" type="select" placeholder="Branch" >
          <option value=""></option>
          <option value={"63230ffc49be6c899ca0e8e2"}>Lekki</option>
          </Input> */}
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
      {/* )}
      </Formik> */}
    </SideModal>
  );
};

export default CreateJuniorAdminModal;
