import React, { useState } from 'react';
import {
  Box,
  Button,
  Text,
  HStack,
  IconButton,
  useToast,
  Input,
  Textarea,
  Flex,
  Spacer,
  Stack,
} from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';

const SkillItem = ({ skill, onDeleteSkill, onUpdateSkill }) => {
  
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState({ ...skill });

  const toast = useToast();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleDeleteClick = () => {
    onDeleteSkill(skill.id); // 在父组件中处理删除操作
  };

  const handleUpdateSkill = () => {
    onUpdateSkill(skill.id, newSkill); // 在父组件中处理更新操作
    setIsEditing(false);
    toast({
      title: 'Skill Updated',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Box borderBottom="1px solid gray" p={2}>
      {isEditing ? (
        <Box>
          <Input
            value={newSkill.name}
            onChange={(e) => setNewSkill({ ...newSkill, name: e.target.value })}
          />
          <Textarea
            value={newSkill.description}
            onChange={(e) =>
              setNewSkill({ ...newSkill, description: e.target.value })
            }
          />
          <Button colorScheme="teal" onClick={handleUpdateSkill}>
            Save
          </Button>
        </Box>
      ) : (

        <Flex alignItems="center"  p={2} mb={2}>
          <Box flex="1" marginLeft="-4">
            <Text>Name: {skill.name}</Text>
            <Text>Description: {skill.description}</Text>
          </Box>
          
          <Stack direction="row" spacing={2}>
            <IconButton
              colorScheme="teal"
              aria-label="Edit Skill"
              icon={<EditIcon />}
              onClick={handleEditClick}
            />
            <IconButton
              colorScheme="red"
              aria-label="Delete Skill"
              icon={<DeleteIcon />}
              onClick={handleDeleteClick}
            />
          </Stack>
        </Flex>        
      )}
    </Box>
  );
};

export default SkillItem;
