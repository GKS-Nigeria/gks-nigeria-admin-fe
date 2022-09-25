/* eslint-disable react/prop-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @jsxImportSource @emotion/react */
import { useEffect } from "react";
import { useTheme } from "@emotion/react";
import { Label } from "reactstrap";
import { Input } from "../../../lib/form/Input";
import { Text } from "../../../lib/Text";
import { useFormik } from "formik";
import {
  IPost,
  IPostNotificationOptions,
} from "../../../services/content/types";
import { postNotification } from "../../../services/content";
import { Button } from "../../../lib/Button";

interface PostProps {
  postContent?: IPost;
}

const ContentNotification: React.FC<PostProps> = ({ postContent }) => {
  const initialValues: IPostNotificationOptions = {
    body: "",
    icon: "",
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
      postNotification(values)
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
    setFieldValue("body", postContent.body, true);
    setFieldValue("icon", postContent.icon, true);
  }, [resetForm, setFieldValue, postContent]);
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
              <Text
                color="blue_6"
                className="fs-13 fw-bold text-capitalize mt-4"
              >
                content
              </Text>
            </Label>
            <Input
              id="notification"
              type="textarea"
              placeholder="Write text here"
              css={{ height: "200px" }}
              {...getFieldProps("body")}
            />
            <div>
              <Text
                color="blue_6"
                className="fs-13 fw-bold text-capitalize mt-4"
              >
                Choose icon:
              </Text>
              <Input
                id="icon"
                type="select"
                css={{width: "150px"}}
                placeholder="Write text here"
                {...getFieldProps("icon")}
              >
                {" "}
                <option value="">-select-</option>
                <option value="reminder">Reminder</option>
              </Input>
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
              {isSubmitting ? "sending" : "Send"}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default ContentNotification;
