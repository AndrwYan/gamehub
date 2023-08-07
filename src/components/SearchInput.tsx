import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import useGameQueryStore from "../store";

const SearchInput = () => {
  // 定义获取input内容的对象
  const ref = useRef<HTMLInputElement>(null);

  // zustand状态管理
  const setSearchText = useGameQueryStore(s => s.setSearchText);
  const navigate = useNavigate();
  
  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      if (ref.current) {
        //使用封装好的状态组件函数
        setSearchText(ref.current.value);
        //路由到首页
        navigate('/');
      }
    }}>
      
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input ref={ref} borderRadius={20} placeholder="Search games..." variant="filled" />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
