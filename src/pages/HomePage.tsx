import { Grid, GridItem} from '@chakra-ui/react'
import GameGrid from '../components/GameGrid'
import DeveloperSearchInput from '../components/DeveloperSearchInput'
import DeveloperGrid from '../components/DeveloperGrid'

const HomePage = () => {   
  return (
    <Grid      
    templateAreas={{
      base: `"main"`,
      lg: `"main"`,
    }}    
  >   
    <GridItem area="main">
      <DeveloperSearchInput/>      
      <DeveloperGrid />
    </GridItem>
  </Grid>
  )
}
export default HomePage