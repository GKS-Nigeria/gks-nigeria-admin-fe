/** @jsxImportSource @emotion/react */
import LoginLogo from "../../assets/image/loginLogo.png";
import { useTheme } from "@emotion/react";
import { LinkText, Text } from "../../lib/Text";
import { Input } from "../../lib/form/Input";
import { Button } from "../../lib/Button";
import { useState } from "react";
import { Formik } from "formik";
import {
  loginUserSchema,
  requestTokenSchema,
} from "../../services/user/schema";
import { loginUser, requestToken } from "../../services/user";
import { useNavigate } from "react-router-dom";

interface IInputFields {
  email: string;
  code: string;
}

const Login = () => {
  const { palette } = useTheme();
  const [isValidated, setIsValidated] = useState(false);
  const defaultValues = { email: "", code: "" };
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();

  return (
    <>
      <div className="d-flex ">
        {/* Left side of the page */}
        <section
          className="d-flex flex-column align-items-center justify-content-center"
          css={{
            width: "50%",
            height: "100vh",
          }}
        >
          <div css={{ position: "absolute", top: "5%", left: "3%" }}>
            <Text className="fs-22 fw-bold " color="blue_6">
              GKS HQ
            </Text>
          </div>

          <div
            css={{
              width: "100%",
              maxWidth: 468,
            }}
          >
            <Text className="fs-22 fw-bold " color="blue_6">
              Welcome back
            </Text>
            {!isValidated && (
              <Text className="fs-13 py-2" color="blue_6">
                This is valid for GKS administrators only.
              </Text>
            )}
            {isValidated && (
              <Text className="fs-13 py-2" color="blue_6">
                An access code has been sent to your email address.
              </Text>
            )}

            <Formik
              initialValues={defaultValues}
              validationSchema={
                !isValidated ? requestTokenSchema : loginUserSchema
              }
              onSubmit={async (values: IInputFields) => {
                setIsSubmitting(true);
                if (!isValidated) {
                  requestToken(values.email)
                    .then((res) => {
                      res.success === true && setIsValidated(true);
                    })
                    .finally(() => setIsSubmitting(false));
                  return;
                }
                loginUser(values)
                  .then((res) => {
                    if (res.success === true) {
                      navigate("/content");
                    }
                    const jwtToken = res.data.jwt;
                    const userRole = res.data.userDetails.role;
                    localStorage.setItem("token", jwtToken);
                    localStorage.setItem("role", userRole);
                  })
                  .finally(() => setIsSubmitting(false));
              }}
            >
              {(formik) => (
                <form
                  onSubmit={formik.handleSubmit}
                  css={{ marginTop: "50px" }}
                >
                  {isValidated && (
                    <div className="py-2">
                      <Text as="label" className="fs-13" color="blue_6">
                        Passcode
                        <Text as="sup" color="red">
                          *
                        </Text>
                      </Text>
                      <Input {...formik.getFieldProps("code")} />
                      {formik.touched.code && formik.errors.code ? (
                        <Text color="red" className="fs-13 m-0">
                          {formik.errors.code}
                        </Text>
                      ) : null}
                    </div>
                  )}

                  {!isValidated && (
                    <div className="py-2">
                      <Text as="label" className="fs-13" color="blue_6">
                        Email address{" "}
                        <Text as="sup" color="red">
                          *
                        </Text>
                      </Text>
                      <Input
                        type="email"
                        placeholder="johnboyega@gmail.com"
                        {...formik.getFieldProps("email")}
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <Text color="red" className="fs-13 m-0">
                          {formik.errors.email}
                        </Text>
                      ) : null}
                    </div>
                  )}

                  <Button
                    variant="green"
                    type="submit"
                    className="my-4 w-100"
                    disabled={!formik.isValid || isSubmitting}
                  >
                    {isSubmitting
                      ? "submiting"
                      : isValidated
                      ? "Login"
                      : "Verify email"}
                  </Button>
                </form>
              )}
            </Formik>

            <div className="text-end">
              <LinkText
                href="#"
                color="green"
                className="fs-14"
                css={{ fontWeight: 600 }}
              >
                Sign Up
              </LinkText>
            </div>
          </div>
        </section>

        {/* Right Side of the Page */}
        <div
          className="d-flex justify-content-center align-items-center"
          css={{ backgroundColor: palette.green, width: "50%" }}
        >
          <img src={LoginLogo} alt="" width="200px" />
        </div>
      </div>
    </>
  );
};
export default Login;
