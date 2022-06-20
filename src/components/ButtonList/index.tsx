import { Button } from "@mui/material";
import React from "react";
import { domToImage } from "../../utils/domToImage";

interface IType {
  id: string;
  text: string;
}

const types: IType[] = [
  { id: "jpeg", text: "JPG" },
  { id: "png", text: "PNG" },
];

type Props = {
  htmlDivElementRef: React.MutableRefObject<HTMLDivElement>;
  backgroundColor: string;
};
const ButtonList: React.FC<Props> = ({
  htmlDivElementRef,
  backgroundColor,
}) => {
  const handleClick = (type: IType) => {
    domToImage(htmlDivElementRef.current, type.id, backgroundColor);
  };

  return (
    <React.Fragment>
      {types.map((type: IType) => (
        <Button key={type.id} onClick={() => handleClick(type)} size="small">
          Download {type.text}
        </Button>
      ))}
    </React.Fragment>
  );
};

export default ButtonList;
