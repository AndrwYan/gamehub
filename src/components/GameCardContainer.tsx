import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

// 的 GameCardContainer 组件中，
// 你使用了 Box 组件来创建一个容器，然后通过 _hover 属性来定义鼠标悬停时的样式变化，
// 以及 borderRadius 和 overflow 属性来定义容器的圆角和溢出处理。
const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      _hover={{
        transform: 'scale(1.03)',
        transition: 'transform .15s ease-in'
      }}
      borderRadius={10}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
