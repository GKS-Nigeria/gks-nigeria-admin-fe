/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
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
  IPostDailyDevotionOptions,
} from "../../../services/content/types";
import { postDailyDevotion } from "../../../services/content";
import { Button } from "../../../lib/Button";

interface PostProps {
  postContent?: IPost;
}

const ContentDailyDevotion: React.FC<PostProps> = ({ postContent }) => {
  const initialValues: IPostDailyDevotionOptions = {
    title: "",
    body: "",
    branchId: "",
    group: "",
    date: "",
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
      postDailyDevotion(values)
        .then(() => {
          resetForm();
        })
        .finally(() => setSubmitting(false));
    },
  });

  useEffect(() => {
    if (!postContent) {
      resetForm();
      return;
    }
    setFieldValue("title", postContent.title, true);
    setFieldValue("body", postContent.body, true);
    setFieldValue("branchId", postContent.branchId, true);
    setFieldValue("group", postContent.group, true);
    setFieldValue("date", postContent.date, true);
  }, [resetForm, setFieldValue, postContent]);

  const labels = ["title", "body", "branch/groups"];
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
              }}
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
              <input
                type="file"
                name="media_upload"
                id="media_uploaad"
                max={1}
                className="d-none"
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
            })}

            <div className="d-flex my-4 justify-content-between">
              <div>
                <Text color="blue_6" className="fs-13 fw-bold text-capitalize ">
                  branch/groups
                </Text>

                <Input
                  id="group/branch"
                  type="select"
                  css={{ width: "408px" }}
                  {...getFieldProps("branchId")}
                >
                  <option value="">-select-</option>
                  <option value="all">All</option>
                  <option value="62ddb886fb125e6e7b873bea">Test branch</option>
                </Input>
              </div>
              <div>
                <Text color="blue_6" className="fs-13 fw-bold text-capitalize">
                  select a day
                </Text>
                <Input
                  id="feed"
                  type="date"
                  css={{ width: "408px" }}
                  {...getFieldProps("date")}
                />
              </div>
            </div>
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

export default ContentDailyDevotion;
