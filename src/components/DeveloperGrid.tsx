import {
  SimpleGrid,  
  Spinner,
  Text
} from '@chakra-ui/react';

import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';
import useDeveloper from '../hooks/useDeveloper';
import DeveloperCard from './DeveloperCard';

const DeveloperGrid = () => {
  
  const {
    data,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useDeveloper();

  const skeletons = [1, 2, 3, 4, 5, 6];

  if (error) return <Text>{error.message}</Text>;
  
  console.log(data);
  console.log(data?.pages);
  // 请求的数据数量
  const fetchedGamesCount =
    data?.pages.reduce(
      (total, page) => total + page.results.length, 0) || 0;
      
  return (
    <InfiniteScroll
      dataLength={fetchedGamesCount}
      hasMore={!!hasNextPage}
      next={() => fetchNextPage()}
      loader={<Spinner />}
    >
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        // 单元格之间的间距        
        spacing={6}        
        // 内容和容器之间的内边距
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
            {page.results.map((developer) => (
              <GameCardContainer key={developer.user}>
                <DeveloperCard developer={developer} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
    </InfiniteScroll>
  );
};

export default DeveloperGrid;
