import React from "react"
import TextField from "@material-ui/core/TextField"
import {Button, InputAdornment} from "@material-ui/core"
import AccountCircle from "@material-ui/icons/AccountCircle"
import LockIcon from '@material-ui/icons/Lock';
import {ButtonContainer} from "./styles"
import {Controller, useForm} from "react-hook-form"

const Form = () => {
    const {handleSubmit, control} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({field}) =>
                    <TextField
                        {...field}
                        id="outlined-basic"
                        variant="outlined"
                        label="E-mail"
                        placeholder="E-mail"
                        fullWidth
                        margin="normal"
                        required
                        type="email"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <AccountCircle/>
                                </InputAdornment>
                            ),
                        }}
                    />
                }
            />
            <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({field}) =>
                    <TextField
                        {...field}
                        id="outlined-basic"
                        variant="outlined"
                        label="Password"
                        placeholder="Password"
                        fullWidth
                        margin="normal"
                        required
                        type="password"
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <LockIcon/>
                                </InputAdornment>
                            ),
                        }}
                    />}
            />
            <ButtonContainer>
                <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    color="primary"
                >
                    Login
                </Button>
            </ButtonContainer>
        </form>
    )
}

export default Form