import { Input, InputGroup, InputLeftElement, Text, Box, Center } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const DeveloperSearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const navigate = useNavigate();
  
  return (    
    // marginBottom设置：和grid设置间距
    <Box marginBottom="40px">
      <Center>
        <Text fontSize="xl" textAlign="center" mb={8}>
          Enter a keyword to search for developer !
        </Text>
      </Center>
      <form onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate('/');
        }
      }}>
        <InputGroup>
          <InputLeftElement children={<BsSearch />} />
          <Input ref={ref} borderRadius={20} placeholder="Search developer..." variant="filled" />
        </InputGroup>
      </form>
    </Box>
  );
};

export default DeveloperSearchInput;
