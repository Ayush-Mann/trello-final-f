import React from "react"
import Header from "../dashboard/miniComponents/header"
import { Box, Button, Input } from "@chakra-ui/core"
import { useDisclosure } from "@chakra-ui/core";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from "@chakra-ui/core";

function DrawerExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();
  
    return (
      <>
        <Button ref={btnRef} variantColor="teal" onClick={onOpen}>
          Open
        </Button>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>About this Board</DrawerHeader>
            <DrawerBody>
                <h2>description of the board will be fetched</h2>
            </DrawerBody>
            {/* <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue">Save</Button>
            </DrawerFooter> */}
          </DrawerContent>
        </Drawer>
      </>
    );
  }

function Board(){
    return(
        <>
            <Header />
            <Box>
                {DrawerExample()}
            </Box>
            <section>
                <Box className="cards-container">
                    <h2>List arr will be fetched and for each list there will be a card </h2>   
                </Box>
            </section>
        </>
    )
}

export default Board