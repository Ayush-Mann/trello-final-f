import {Input, ColorModeProvider, CSSReset, Flex, Box, Stack, InputLeftElement, Icon, InputGroup, Button, FormControl, Divider, FormHelperText} from '@chakra-ui/core'
import React from "react"




function Login({h1, form}){
    return(
        <ColorModeProvider>
            <CSSReset />
            <Flex justify="center" align="center">
                <form action="submit">
                    <Stack spacing={4} width={400}>
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement children={<Icon name="info" />} />
                                <Input type="email" placeholder="Enter Your title" />
                            </InputGroup>
                        </FormControl>
                        
                        <FormControl isRequired>
                            <InputGroup>
                                <InputLeftElement children={<Icon name="password" />} />
                                <Input type="text" placeholder="Enter Your description" />
                            </InputGroup>
                        </FormControl>
                        <Button type="submit" variant="solid" variantColor="blue" boxShadow="sm" _hover={{boxshadow : "md"}} _active={{boxshadow : "lg"}}>Login</Button>
                        
                    </Stack>
                </form>
            </Flex>
            
            
        </ColorModeProvider>    
    )

}

export default Login