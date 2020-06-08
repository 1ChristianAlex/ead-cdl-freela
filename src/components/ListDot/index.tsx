import React, { FC, ReactNode } from "react";
import { ListItem, UList } from "./style";

interface IListDot {
  listItem: ReactNode[];
}

const ListDot: FC<IListDot> = ({ listItem }) => {
  return (
    <UList>
      {listItem.map((item, index) => (
        <ListItem key={`listItem-${index}`}>{item}</ListItem>
      ))}
    </UList>
  );
};

export default ListDot;
