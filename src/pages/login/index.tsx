/** @jsxImportSource @emotion/react */
import LoginLogo from "../../assets/image/loginLogo.png"
import { useTheme } from "@emotion/react";
import { LinkText, Text } from "../../lib/Text";
import { Input } from "../../lib/form/Input";
import { Button } from "../../lib/Button";

const Login = () => {
  const { palette } = useTheme();
  const check = false
  return (
    <>
      <div className="d-flex ">

        {/* Left side of the page */}
      <section
          className="d-flex flex-column align-items-center justify-content-center"
          css={{
            width: "50%",
            height: "100vh"

          }}
        >
          <div css={{ position: "absolute", top: "5%", left: "3%" }}>
            <Text className="fs-22 fw-bold " color="blue_6">GKS HQ</Text>
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
            {!check && 
            <Text className="fs-13 py-2" color="blue_6">
            This is valid for GKS administrators only.
            </Text>}
            {check && 
            <Text className="fs-13 py-2" color="blue_6">
            An access code has been sent to your email address.
            </Text>}
            
              
                <form css={{marginTop: "50px"}}>
                  
                   {!check && 
                     <div className="pt-2">
                      <Text as="label" className="fs-13 fw-bold py-2" color="black">
                        Email address{" "}
                        <Text as="sup" color="red">
                          *
                        </Text>
                      </Text>
                      <Input
                        type="email"
                        placeholder="johnboyega@gmail.com"
                       
                      />
                     
                    </div> }
                    
                    { check && (<div className="py-2">
                      <Text as="label" className="fs-13 fw-bold py-2" color="blue_6">
                        Passcode
                        <Text as="sup" color="red">
                          *
                        </Text>
                      </Text>
                      <Input  type="password" />
                     
                    </div>)}
                

                  <Button
                    variant="green"
                    type="submit"
                    className="my-4 text-capitalize w-100"
                   
                  >
                      Verify email
                   
                  </Button>
                </form>
             
           

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
        <div className="d-flex justify-content-center align-items-center" css={{backgroundColor: palette.green, width: "50%"}}>
        {/* <h1>Righttt</h1> */}
        <img src={LoginLogo} alt="" width="200px"/>
        </div>
      </div>
    </>
  );
}

export default Login;
