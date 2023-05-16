import { Button, Flex, Icon, Input, Stack, Text } from '@chakra-ui/react';
import { BsFacebook, BsInstagram } from 'react-icons/bs';
import { ImPinterest2 } from 'react-icons/im';
import { AiOutlineGoogle } from 'react-icons/ai';
import { TbBrandTwitter } from 'react-icons/tb';
import React from 'react';

const Contacts = () => {
  return (
    <Flex background="#2879fe"
    color="white"
    justifyContent="center"
    marginTop={{base:"50px", md:"unset"}}
    
    >
        <Flex 
        width={{base:"auto", md:"80%", lg:"50%"}}
        alignItems="center"
        justifyContent="space-between"
        direction={{base:"column", md:"unset"}}
        padding="10px 0 10px 0"
        gap={{base:"20px", md:"unset"}}
        >
            <Text>BE IN TOUCH WITH US:</Text>
            <Flex>
            <Input placeholder='Enter your email...' size='md' 
            padding="10px"
            border="none"
           borderRadius="5px 0 0 5px"
           background="gray"
           _placeholder={{color:"white"}}
            />
            <Button
            padding="10px"
            color="white"
            background="#333"
            borderRadius="0 5px 5px 0"
            border="none"
            fontSize=".7em"
            >JOIN US</Button>
            </Flex>
            <Flex gap="10px">
                <Icon as={BsFacebook}/>
                <Icon as={BsInstagram}/>
                <Icon as={TbBrandTwitter}/>
                <Icon as={AiOutlineGoogle}/>
                <Icon as={ImPinterest2}/>
            </Flex>
        </Flex>
    </Flex>
  )
}

export default Contacts