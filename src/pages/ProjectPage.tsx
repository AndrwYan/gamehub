import { Grid, GridItem} from '@chakra-ui/react'
import ProjectGrid from '../components/ProjectGrid'
import ProjectSearchInput from '../components/ProjectSearchInput'

const ProjectPage = () => {   
  return (
    <Grid      
    templateAreas={{
      base: `"main"`,
      lg: `"main"`,
    }}    
    >    
    <GridItem area="main">
      <ProjectSearchInput/>      
      <ProjectGrid />
    </GridItem>
  </Grid>
  )
}
export default ProjectPage