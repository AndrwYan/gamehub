import { Box, Grid, Show, GridItem, Flex } from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import GameHeading from '../components/GameHeading'
import GenreList from '../components/GenreList'
import PlatformSelector from '../components/PlatformSelector'
import SortSelector from '../components/SortSelector'

const HomePage = () => {   

  return (
    <Grid      
    templateAreas={{
      base: `"main"`,
      lg: `"aside main"`,
    }}    
    templateColumns={{
      base: '1fr',
      lg: '250px 1fr',
    }}
  >   
    {/*  这段代码使用 Chakra UI 的 Grid 组件的两个属性 templateAreas 和 templateColumns 来指定页面的布局方式。让我解释一下这两个属性的作用：
    1.templateAreas 属性：
        这个属性用来指定网格布局中各个单元格的名称，可以理解为给每个单元格取了一个名称。
        它是一个对象，键名表示不同的断点（响应式设计中的屏幕宽度），键值是一个字符串，用来表示单元格的排布。
        在这里，有两个断点：base 和 lg。base 表示小屏幕（例如手机），lg 表示大屏幕（例如平板电脑或桌面电脑）。
        base: "main" 表示在小屏幕上只有一个单元格，命名为 "main"，即主要内容区域占满整个宽度。
        lg: "aside main" 表示在大屏幕上有两个单元格，分别命名为 "aside" 和 "main"。"aside" 是侧边栏的单元格，"main" 是主要内容区域的单元格。        

    2.templateColumns 属性：    
        这个属性用来指定网格布局的列宽。
        它也是一个对象，键名表示不同的断点（响应式设计中的屏幕宽度），键值是一个字符串，用来表示列宽。
        在这里，有两个断点：base 和 lg。
        base: '1fr' 表示在小屏幕上只有一个列，宽度占满整个网格（1个份额）。
        lg: '250px 1fr' 表示在大屏幕上有两个列，左侧列宽为 250px，右侧列宽占满整个网格的剩余宽度。
    3.综合起来，这段代码实现了响应式的网格布局。在小屏幕上，只有一个主要内容区域占满整个宽度；在大屏幕上，有两个列，左侧是 250px 宽度的侧边栏（用于放置 GenreList），右侧是剩余的宽度（用于放置 GameHeading、PlatformSelector、SortSelector 和 GameGrid）。  */}
    
    <Show above="lg">
      <GridItem area="aside" paddingX={5}>
        <GenreList />
      </GridItem>            
    </Show>

    <GridItem area="main">
      <Box paddingLeft={2}>
        <GameHeading />                        
        <Flex marginBottom={5}>
          <Box marginRight={5}>
            <PlatformSelector />
          </Box>
          <SortSelector />          
        </Flex>
      </Box>
      <GameGrid />
    </GridItem>
  </Grid>
  )
}

export default HomePage