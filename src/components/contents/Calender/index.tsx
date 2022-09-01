/** @jsxImportSource @emotion/react */
import { useTheme } from "@emotion/react";
import { Label } from "reactstrap";
import { Input } from "../../../lib/form/Input";
import { Text } from "../../../lib/Text";
import Image from "../../../assets/icons/image.svg";
import Video from "../../../assets/icons/video.svg";
import Audio from "../../../assets/icons/audio.svg";

const ContentCalender = () => {
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
            <Text color="blue_6" className="fs-13 fw-bold text-capitalize my-2">
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

        <Label for="feed">
          <Text color="blue_6" className="fs-13 fw-bold text-capitalize mt-4">
            title
          </Text>
        </Label>
        <Input id="feed" type="text" placeholder="Enter title" />
        <Label for="feed">
          <Text color="blue_6" className="fs-13 fw-bold text-capitalize mt-4">
            body
          </Text>
        </Label>
        <Input
          id="feed"
          type="textarea"
          placeholder="Write text here"
          css={{ height: "200px" }}
        />
        <Label for="feed">
          <Text color="blue_6" className="fs-13 fw-bold text-capitalize mt-4">
            branch/groups
          </Text>
        </Label>
        <Input
          id="group/branch"
          type="select"
          placeholder="Write text here"
          css={{ width: "408px" }}
        />
        <div className="d-flex my-4 justify-content-between">
            <div>
            <Text color="blue_6" className="fs-13 fw-bold text-capitalize">
            select a day
          </Text>
              <Input
          id="feed"
          type="date"
          css={{ width: "408px" }}
        />  
            </div>
        
         <div>
         <Text color="blue_6" className="fs-13 fw-bold text-capitalize">
            start
          </Text>
         <Input
          id="startTime"
          type="time"
          css={{ width: "225px",  }}
        />
         </div>
         <div>
         <Text color="blue_6" className="fs-13 fw-bold text-capitalize">
            end
          </Text>
         <Input
          id="endTime"
          type="time"
          css={{ width: "225px" }}
        />
         </div>
        </div>
      </div>
    </>
  );
};

export default ContentCalender;
