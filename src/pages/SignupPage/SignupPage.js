import React from "react"
import {InputContainer, MainContainer} from "./styles"
import {Form} from "./Form"
import {useUnprotectedPage} from "../../hooks/useUnprotectedPage"

const SignupPage = () => {
    useUnprotectedPage()

    return (
        <MainContainer>
            <InputContainer>
                <Form/>
            </InputContainer>
        </MainContainer>
    )
}

export default SignupPage
