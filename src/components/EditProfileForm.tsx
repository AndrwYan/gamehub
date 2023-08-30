import { useState } from 'react';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from '@chakra-ui/react';

const EditProfileForm = ({ isOpen, onClose, onSave, initialProfile }) => {
    
  const [editedProfile, setEditedProfile] = useState(initialProfile);

  const handleInputChange = (field, value) => {
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleSave = () => {
    // 处理保存的逻辑
    onSave(editedProfile);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Edit Profile</ModalHeader>
        <ModalBody>
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              value={editedProfile.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Input
              value={editedProfile.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
            />
          </FormControl>
          <FormControl mt={4}>
            <FormLabel>Username</FormLabel>
            <Input
              value={editedProfile.username}
              onChange={(e) => handleInputChange('username', e.target.value)}
            />
          </FormControl>
          
          <FormControl mt={4}>
            <FormLabel>Location</FormLabel>
            <Input
              value={editedProfile.location}
              onChange={(e) => handleInputChange('location', e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Bio</FormLabel>
            <Input
              value={editedProfile.bio}
              onChange={(e) => handleInputChange('bio', e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>Short Intro</FormLabel>
            <Textarea
              value={editedProfile.short_intro}
              onChange={(e) => handleInputChange('short_intro', e.target.value)}
            />            
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>profile_image</FormLabel>
            <Input
              value={editedProfile.profile_image}
              onChange={(e) => handleInputChange('profile_image', e.target.value)}
            />
          </FormControl>

        </ModalBody>
        <ModalFooter>
          <Button colorScheme="blue" onClick={handleSave}>
            Save
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default EditProfileForm;
