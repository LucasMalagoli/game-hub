import {
  List,
  ListItem,
  HStack,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <List>
      {new Array(10).fill("").map((_, i) => (
        <ListItem key={i} paddingY="5px">
          <HStack>
            <SkeletonCircle size="32px" />
            <SkeletonText noOfLines={1} width="70px" />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
