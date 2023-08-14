import {
  Box,
  Flex,
  Text,
  Image,
  Heading
} from '@chakra-ui/react';
import { Tag } from '@chakra-ui/react';
import Developer from '../entities/Developer';
import { getProfileImageUrl } from '../services/image-url';
import { Link } from 'react-router-dom';

interface Props {
  developer: Developer;
}

const DeveloperCard = ({ developer }: Props) => {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Flex mt={3} alignItems="center">
          <Image
            src={getProfileImageUrl(developer.profile_image)}
            alt={developer.name}
            boxSize="60px"
            borderRadius="full"
            mr={8} // Add margin to create space between image and text
            ml={6}
          />
          <div>
            <Heading fontSize="2xl">
              <Link to={'/games/' + developer.user}>{developer.name}</Link>
            </Heading>
            <Text fontSize="sm" color="gray.600">
              {developer.short_intro}
            </Text>
          </div>
      </Flex>      
      <Box p={3}>
        {/* <Text mt={3} isTruncated>
          {developer.bio}
        </Text> */}

        <Flex mt={3} flexWrap="wrap">
            {developer.skills.map((skill, index) => (
            <Tag
                key={index}
                mr={2}
                mb={2}
                colorScheme="blue"
                variant="solid"
                borderRadius="full"
                py={1}
                px={3}
            >
          {skill}
        </Tag>
      ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default DeveloperCard;
