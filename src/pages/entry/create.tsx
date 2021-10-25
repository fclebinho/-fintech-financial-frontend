import React, { useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  Select,
  Textarea
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { useMutation } from '@apollo/client';
import { ADD_ENTRY } from '../../graphql/mutations';

const EntryCreate: React.FC = () => {
  const { pathname } = useLocation();
  const { goBack } = useHistory();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [addEntry, { loading, error }] = useMutation(ADD_ENTRY);

  useEffect(() => {
    /create/gi.test(pathname) && onOpen();
  }, [pathname, onOpen]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>an error occurred...</p>;
  }

  const handleOnClose = () => {
    onClose(); 
    goBack();
  }

  const handleOnSubmit = () => {
    addEntry({
      variables: {
        input:{
          params: {
            kind: 'DEBIT',
            description: "Enum test",
            dueDate: "2021-12-25",
            amount: 23.96,
          }
        }
      }
    }).then((response) => { 
      console.log(JSON.stringify(response.data.entry.entry));
    }).finally(() => {
      onClose();
      goBack();
    }); 
  }
  
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={handleOnClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Criar novo lançamento
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="owner">Selecione tipo do lançamento</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="DEBIT">Débito</option>
                  <option value="CREDIT">Crédito</option>
                </Select>
              </Box>
              
              <Box>
                <FormLabel htmlFor="username">Data do lançamento</FormLabel>
                <Input
                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Descrição</FormLabel>
                <Textarea id="desc" />
              </Box>
              
              <Box>
                <FormLabel htmlFor="username">Valor (R$)</FormLabel>
                <Input
                  id="username"
                  placeholder="Please enter user name"
                />
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={handleOnClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={handleOnSubmit}>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default EntryCreate;