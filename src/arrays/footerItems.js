import { TbCurrencySolana } from "react-icons/tb";
import { BiPolygon } from "react-icons/bi";
import { TbHexagonLetterA } from "react-icons/tb";
import { TbHexagonLetterB } from "react-icons/tb";
import { TbHexagonLetterN } from "react-icons/tb";

export const footerItems = [
  {
    id: 1,
    name: "SOLANA",
    icon: <TbCurrencySolana size={40} />,
  },
  {
    id: 2,
    name: "POLYGON",
    icon: <BiPolygon size={40} />,
  },
  {
    id: 3,
    name: "ARBITRUM",
    icon: <TbHexagonLetterA size={40} />,
  },
  {
    id: 4,
    name: "BSC",
    icon: <TbHexagonLetterB size={40} />,
  },
  {
    id: 5,
    name: "NEAR",
    icon: <TbHexagonLetterN size={40} />,
  },
];
