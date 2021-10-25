import { HStack, Icon, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import { FaFacebookF, FaGoogle, FaShopify, FaSpotify } from 'react-icons/fa'



export default function Social() {
    const [isNotSmallerScreen] = useMediaQuery('(min-width:600px)');

    return (
        <>
        <HStack spacing={isNotSmallerScreen ? "24" : "15"}>
            <Icon as={FaFacebookF} boxSize="50" />
            <Icon as={FaGoogle} boxSize="50" />
            <Icon as={FaSpotify} boxSize="50" />
            <Icon as={FaShopify} boxSize="50" />
        </HStack>
            
        </>
    )
}
