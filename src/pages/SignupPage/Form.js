import React from "react"
import {Controller, useForm} from "react-hook-form"
import TextField from "@material-ui/core/TextField"
import {Button, InputAdornment} from "@material-ui/core"
import AccountCircle from "@material-ui/icons/AccountCircle"
import LockIcon from "@material-ui/icons/Lock"
import {ButtonContainer} from "./styles"

export const Form = () => {
    const {handleSubmit, control} = useForm()

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Controller
                name="name"
                control={control}
                defaultValue=""
                render={({field}) =>
                    <TextField
                        {...field}
                        id="outlined-basic"
                        variant="outlined"
                        label="Name"
                        placeholder="Name"
                        fullWidth
                        margin="normal"
                        required
                        type="name"
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
                name="nickname"
                control={control}
                defaultValue=""
                render={({field}) =>
                    <TextField
                        {...field}
                        id="outlined-basic"
                        variant="outlined"
                        label="Nickname"
                        placeholder="Nickname"
                        fullWidth
                        margin="normal"
                        required
                        type="nickname"
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
                name="email"
                control={control}
                defaultValue=""
                render={({field}) =>
                    <TextField
                        {...field}
                        id="outlined-basic"
                        variant="outlined"
                        label="E-mail"
                        placeholder="example@example.com"
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
                rules={{ minLength: 6}}
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
                    Cadastrar
                </Button>
            </ButtonContainer>
        </form>
    )
}