import React, { FC } from 'react';

interface DraggableListItemProps {
  provided: any;
  children: React.ReactNode;
}

const DraggableListItem: FC<DraggableListItemProps> = ({
  provided,
  children,
}) => {
  return (
    <li
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      ref={provided.innerRef}
    >
      {children}
    </li>
  );
};

export default DraggableListItem;
