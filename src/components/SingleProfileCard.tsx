import {
    Avatar,
    Box,
    Center,
    Wrap,
    WrapItem
  } from '@chakra-ui/react';
import Profile from '../entities/Profile';
import { getProfileImageUrl } from '../services/image-url';

interface Props{
    profile: Profile
}

const SingleProfileCard = ({profile}:Props) =>  {    
    return (
    <Box width="350px" height="500px" borderWidth="1px" borderRadius="lg" overflow="hidden">        
      <Center p="4">
        <Wrap>
            <WrapItem>
                <Avatar 
                    size='2xl' 
                    name='Segun Adebayo' 
                    src={getProfileImageUrl(profile.profile_image)}
                    />
            </WrapItem>            
        </Wrap>
      </Center>
      <Center>
        <Box fontSize="xl" fontWeight="semibold" textAlign="center" mb="2">
          {profile.username}
        </Box>
      </Center>
      <Center>
        <Box textAlign="center" fontSize="sm" color="gray.600" mb="4">
          {profile.short_intro}
        </Box>
      </Center>
      <Center>
        <Box textAlign="center" fontSize="sm" color="green.500">
          {profile.location}
        </Box>
      </Center>
    </Box>     
    )
  }

export default SingleProfileCard;