/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import { Label } from "reactstrap";
import { Input } from "../../../lib/form/Input";
import { Text } from "../../../lib/Text";


const ContentNotification = () => {
  const { palette } = useTheme();
  return (
    <>
      <div
        css={{
          backgroundColor: palette.white,
          padding: "40px",
          boxShadow: "0px 1px 10px rgba(0, 0, 0, 0.15)",
          borderRadius: "4px",
        }}
      >
        <Label for="feed">
          <Text color="blue_6" className="fs-13 fw-bold text-capitalize mt-4">
            content
          </Text>
        </Label>
        <Input
          id="feed"
          type="textarea"
          placeholder="Write text here"
          css={{ height: "200px" }}
        />
        <div>
            <Text color="blue_6" className="fs-13 fw-bold text-capitalize mt-4">Choose icon:</Text>
        </div>

      </div>
    </>
  );
};

export default ContentNotification;
