import { IconButton } from "@chakra-ui/react";
import { FaArrowUp } from "react-icons/fa";

interface Props {
  onReverse: (reverse: boolean) => void;
  sortReverse: boolean;
  sortOrder: string;
}

const ReverseOrderArrow = ({ onReverse, sortReverse, sortOrder }: Props) => {
  return (
    <IconButton
      aria-label="Reverse Ordering"
      borderRadius={20}
      icon={<FaArrowUp />}
      hidden={sortOrder === ""}
      isRound={true}
      onClick={() => {
        onReverse(!sortReverse);
        console.log(sortOrder);
      }}
      sx={{
        transform: sortReverse ? "rotate(180deg)" : "rotate(0deg)",
        transition: "transform 0.3s",
      }}
    />
  );
};

export default ReverseOrderArrow;
