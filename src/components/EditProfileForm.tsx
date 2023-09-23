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

import { getProfileImageUrl } from '../services/image-url';

const EditProfileForm = ({ isOpen, onClose, onSave, initialProfile }) => {

  const [editedProfile, setEditedProfile] = useState(initialProfile);
  const [currentImage, setCurrentImage] = useState(initialProfile.profile_image);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleInputChange = (field, value) => {
    setEditedProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setCurrentImage(event.target.files[0].name);
  };

  const handleSave = async () => {
    const formData = new FormData();
    for (const key in editedProfile) {
      if (key !== 'profile_image') {
        formData.append(key, editedProfile[key]);
      }
    }

    // Upload the new image file
    if (selectedImage) {
      formData.append('profile_image_file', selectedImage);
    }

    await onSave(formData);
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
            <FormLabel>Profile Image</FormLabel>

            <Input
              value={currentImage}
            />

            <Input type="file" accept="image/*" onChange={handleImageChange} />
            {currentImage && <img src={currentImage} alt="Profile" />}
          </FormControl>


          <FormControl mt={4}>
            <FormLabel>social_github</FormLabel>
            <Input
              value={editedProfile.social_github}
              onChange={(e) => handleInputChange('social_github', e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>social_twitter</FormLabel>
            <Input
              value={editedProfile.social_twitter}
              onChange={(e) => handleInputChange('social_twitter', e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>social_linkedin</FormLabel>
            <Input
              value={editedProfile.social_linkedin}
              onChange={(e) => handleInputChange('social_linkedin', e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>social_youtube</FormLabel>
            <Input
              value={editedProfile.social_youtube}
              onChange={(e) => handleInputChange('social_youtube', e.target.value)}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel>social_website</FormLabel>
            <Input
              value={editedProfile.social_website}
              onChange={(e) => handleInputChange('social_website', e.target.value)}
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
