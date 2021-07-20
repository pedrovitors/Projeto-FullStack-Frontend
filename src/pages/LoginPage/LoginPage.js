import React from "react"
import {InputContainer, MainContainer, SignupButtonContainer} from "./styles"
import Form from "./Form"
import {Button} from "@material-ui/core"
import {goToSignupPage} from "../../routes/coordinator"
import {useHistory} from "react-router-dom"

const LoginPage = () => {
    const history = useHistory()

    return (
        <MainContainer>
            <InputContainer>
                <Form/>
                <SignupButtonContainer>
                    <Button
                        onClick={() => goToSignupPage(history)}
                        variant="outlined"
                        fullWidth
                        color="primary"
                    >
                        Criar conta
                    </Button>
                </SignupButtonContainer>
            </InputContainer>
        </MainContainer>
    )
}

export default LoginPage
