import {
    Avatar,
    Box,
    Button,
    Center,
    Wrap,
    WrapItem
  } from '@chakra-ui/react';
import Profile from '../entities/Profile';
import { getProfileImageUrl } from '../services/image-url';
import EditProfileForm from './EditProfileForm';
import { useState } from 'react';

interface Props{ 
  profile: Profile
}

const AccountProfileCard = ({profile}:Props) =>  {    

  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
  };

  const handleSaveProfile = (updatedProfile) => {

    console.log('Updated profile:', updatedProfile);
    
  };

    return (
    <Box width="350px" height="500px" borderWidth="1px" borderRadius="lg" overflow="hidden">        
      
      <Center p="4">
        <Button onClick={handleEditClick} >
          Edit
        </Button>
      </Center>

      <EditProfileForm
        isOpen={isEditOpen}
        onClose={handleEditClose}
        onSave={handleSaveProfile}
        initialProfile={profile} // Pass the current profile data
      />

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

export default AccountProfileCard;