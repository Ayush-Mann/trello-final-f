import React from "react"
import { render } from "@testing-library/react"
import Header from "./miniComponents/header"
import { Box, Heading, Icon, Flex, Link } from "@chakra-ui/core"


function DashBoard(){
    return(
        <div>
            <Header/>
            <aside>
                <Box width={200} bg="#E4F0F6" m={2} >
                    <Flex>
                        <Icon name="info"/>
                        <Heading as="h6" ml={2} fontSize="16px"><Link to="/userId/boards">Boards</Link></Heading>
                    </Flex>
                </Box>
                <Box width={200} bg="#E4F0F6" m={2} >
                    <Flex>
                        <Icon name="info"/>
                        <Heading as="h6" ml={2} fontSize="16px"><Link to="/home">Home</Link></Heading>
                    </Flex>
                </Box>
                
            </aside>
        </div>
    )
}

export default DashBoard

