import {
  SimpleGrid,  
  Spinner,
  Text
} from '@chakra-ui/react';

import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import ProjectCard from './ProjectCard';
import useProjects from '../hooks/useProjects';

const ProjectGrid = () => {
  
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useProjects();


  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;

  // data?.pages 返回的是什么? 返回的是
  const fetchedGamesCount =
    data?.pages.reduce(
      (total, page) => total + page.results.length,0) || 0;

  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        spacing={6}
        padding="10px"
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}                                                        
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((project) => (
              <GameCardContainer key={project.projectId}>
                <ProjectCard project={project} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default ProjectGrid;
