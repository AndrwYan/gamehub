import {
    Avatar,
    Box,
    Button,
    Center,
    Wrap,
    WrapItem,
    useToast
  } from '@chakra-ui/react';  
import { getProfileImageUrl } from '../services/image-url';
import EditProfileForm from './EditProfileForm';
import { useState } from 'react';
import APIClient from '../services/api-dev-client';
import PersonalProfile from '../entities/PersonalProfile';

interface Props{ 
  profile: PersonalProfile;
}

const AccountProfileCard = ({profile}:Props) =>  {    

  const apiClient = new APIClient<PersonalProfile>('/edit-account');

  const toast = useToast();

  const [data, setData] = useState(profile);

  const [isEditOpen, setIsEditOpen] = useState(false);

  const handleEditClick = () => {
    setIsEditOpen(true);
  };

  const handleEditClose = () => {
    setIsEditOpen(false);
  };

  const handleSaveProfile = async (formData: FormData) => {    
    apiClient.editProfile(profile.user, formData)    
    .then(response => {

      setData(response);
      // 弹出修改成功的标志
      toast({
        title: 'edit sucessfully',
        description: 'edit sucessfully!',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });      
      setIsEditOpen(false);
    })    
    .catch(error => {
      console.log(error);
      if (error.response && error.response.status === 400) {
        const errorMessage = error.response.data.error;
        toast({
          title: 'edit Error',
          description: errorMessage,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      } 
    });
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
          {data.username}
        </Box>
      </Center>
      <Center>
        <Box textAlign="center" fontSize="sm" color="gray.600" mb="4">
          {data.short_intro}
        </Box>
      </Center>
      <Center>
        <Box textAlign="center" fontSize="sm" color="green.500">
          {data.location}
        </Box>
      </Center>
    </Box>     
  );

} 

export default AccountProfileCard;