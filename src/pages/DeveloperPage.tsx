import { Grid, GridItem, Box, Stack } from '@chakra-ui/react';
import GameGrid from '../components/GameGrid';
import DeveloperSearchInput from '../components/DeveloperSearchInput';

const DeveloperPage = () => {   
  return (
    <Grid      
      templateAreas={{
        base: `"main"`,
        lg: `"main"`,
      }}    
    >   
      <GridItem area="main">
        <DeveloperSearchInput />
        <GameGrid />
      </GridItem>
    </Grid>
  );
};
export default DeveloperPage;
