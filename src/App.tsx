import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./componentes/NavBar";
import GameGrid from "./componentes/GameGrid";
import GenreList from "./componentes/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./componentes/PlatformSelector";
import { Platform } from "./hooks/useGames";
import SortSelector from "./componentes/SortSelector";
import GameHeading from "./componentes/GameHeading";
import ReverseOrderArrow from "./componentes/ReverseOrderArrow";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  sortReverse: boolean;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    sortOrder: "",
  } as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `
      "nav"
      "main"
      `,
        lg: `
      "nav nav"
      "aside main"
      `,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <NavBar
          onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={10}>
          <GameHeading gameQuery={gameQuery} />
          <Flex>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <Box marginX={5}>
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSelectSortOrder={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </Box>
            <ReverseOrderArrow
              sortOrder={gameQuery.sortOrder}
              sortReverse={gameQuery.sortReverse}
              onReverse={(sortReverse) => {
                setGameQuery({ ...gameQuery, sortReverse });
                // console.log(gameQuery);
              }}
            />
          </Flex>
        </Box>
        <GameGrid gameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
