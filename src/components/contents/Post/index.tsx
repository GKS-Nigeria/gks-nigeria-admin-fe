/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import { useTheme } from "@emotion/react";
import { Label } from "reactstrap";
import { Input } from "../../../lib/form/Input";
import { Text } from "../../../lib/Text";
import Image from "../../../assets/icons/image.svg";
import Video from "../../../assets/icons/video.svg";
import Audio from "../../../assets/icons/audio.svg";
import { useFormik } from "formik";
import { contentSchema } from "../../../services/content/schema";
import {
  IPost,
  IPostContentApiResponse,
  IPostContentOptions,
} from "../../../services/content/types";
import { postFeed } from "../../../services/content";
import { Button } from "../../../lib/Button";
import { getAllBranch } from "../../../services/branch";
import { IBranch } from "../../../services/branch/types";

interface PostProps {
  postContent?: IPost;
}

const PostFeed: React.FC<PostProps> = ({ postContent }) => {
  const initialValues: IPostContentOptions = {
    title: "",
    body: "",
    branchId: "",
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
    validationSchema: contentSchema,
    onSubmit(values, { setSubmitting }) {
      postFeed(values)
        .then(() => {
          resetForm();
        })
        .finally(() => setSubmitting(false));
    },
  });

  const [branchApiResponse, setBranchApiResponse] = useState<IBranch[]>([]);
  const [media, setMedia] = useState<any>({
    preview: "",
    raw: null,
  });

  useEffect(() => {
    getAllBranch().then((res) => {
      setBranchApiResponse(res.data.results);
    });
  }, []);

  const branchData = branchApiResponse.map((item) => {
    return item.branch;
  });

  useEffect(() => {
    if (!postContent) {
      resetForm();
      return;
    }
    setFieldValue("title", postContent.title, true);
    setFieldValue("body", postContent.body, true);
    setFieldValue("branchId", postContent.branchId, true);
  }, [resetForm, setFieldValue, postContent]);

  const labels = ["title", "body", "branch/groups"];

  const handleChange = (e: any) => {
    if (e.target.files.length) {
      setMedia({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0],
      });
    }
  };
  const triggerFileInput = () => {
    const hold = document?.getElementById("media_upload");
    hold?.click();
  };

  const { palette } = useTheme();
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div
            css={{
              backgroundColor: palette.white,
              padding: "40px",
              boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.15)",
              borderRadius: "4px",
            }}
          >
            <Label for="feed">
              <Text color="blue_6" className="fs-13 fw-bold text-capitalize ">
                media
              </Text>
            </Label>
          
            <div
                css={{
                  border: `1px dashed ${palette.blue_6}`,
                  borderRadius: "8px",
                  backgroundColor: "transparent",
                  height: "100%"
                }}
                >
                  {media.preview === "" ? (
                    <span
                    >
              <label
                htmlFor="media_upload"
                
                className="d-flex justify-content-center flex-column align-items-center"
                css={{
                  padding: "30px 0",
                  cursor: "pointer",
                }}
              >
                <Text
                  color="blue_6"
                  className="fs-13 fw-bold text-capitalize my-2"
                >
                  Upload media content
                </Text>
                <div className="d-flex">
                  <div className="m-2">
                    <img src={Image} alt="" />
                  </div>
                  <div className="m-2">
                    <img src={Video} alt="" />
                  </div>
                  <div className="m-2">
                    <img src={Audio} alt="" />
                  </div>
                </div>
              </label>
              
              </span>
              ) : (
                <span 
                  onClick={triggerFileInput}
                >

                <embed
                src={media.preview}
                type=""
                height="100%"
                width="100%"
              ></embed>
               <div className="d-flex justify-content-center">
                  <div className="m-2">
                    <img src={Image} alt="" width="40"/>
                  </div>
                  <div className="m-2">
                    <img src={Video} alt="" width="40"/>
                  </div>
                  <div className="m-2">
                    <img src={Audio} alt="" width="40"/>
                  </div>
                </div>
                </span>
              )}
              <input
                type="file"
                name="media_upload"
                id="media_upload"
                max={1}
                className="d-none"
                onChange={handleChange}
              />
            </div>
            {labels.map((label, idx) => {
              const fieldName = Object.keys(initialValues)[idx];
              if (fieldName === "title" || fieldName === "body") {
                return (
                  <div key={idx} className="mb-3">
                    <Text
                      color="black"
                      className="fs-13 fw-bold text-capitalize mt-4 mb-1"
                    >
                      {label}
                    </Text>

                    <Input
                      key={idx}
                      type={label === "body" ? "textarea" : "text"}
                      {...getFieldProps(fieldName)}
                    />
                    {touched[fieldName] && errors[fieldName] ? (
                      <Text color="red" className="fs-13 m-0">
                        {errors[fieldName]}
                      </Text>
                    ) : null}
                  </div>
                );
              }

              if (label === "branch/groups") {
                return (
                  <div key={idx} className="mb-3">
                    <Text
                      color="black"
                      className="fs-13 fw-bold text-capitalize mb-1"
                    >
                      {label}
                    </Text>

                    <Input
                      key={idx}
                      type="select"
                      css={{ width: "408px" }}
                      {...getFieldProps(fieldName)}
                    >
                      <option value="">-select-</option>
                      <option value="all">All</option>
                      {branchData.map((field, idx) => {
                        return (
                          <option key={idx} value={field._id}>
                            {field.name}
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
              }
            })}
          </div>
          <div className="d-flex justify-content-between mt-4">
            <div></div>
            <Button
              variant="green"
              type="submit"
              css={{ marginTop: "20px" }}
              className="fw-bold"
              disabled={!isValid || isSubmitting}
            >
              {isSubmitting ? "submiting" : "Publish"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default PostFeed;
