import React, { useState, useRef } from 'react';
import { DndContext, useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

const DraggableButton = ({ position }) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: 'draggable-button',
  });

  const style = {
    transform: CSS.Translate.toString(transform),
    position: 'absolute',
    left: position.x,
    top: position.y,
  };

  return (
    <button
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
      className='bg-emerald-700 border rounded-2xl border-black text-white text-2xl p-5 hover:bg-fuchsia-600 cursor-move'
    >
      Drag me anywhere
    </button>
  );
};

const Draggable = () => {
  const [position, setPosition] = useState({ x: 10, y: 10 }); // Initial position
  const containerRef = useRef(null); // Ref for the drag-and-drop area container

  const handleDragEnd = (event) => {
    const { delta } = event;

    // Calculate new position
    const newX = position.x + delta.x;
    const newY = position.y + delta.y;

    // Update the position without any boundary checks
    setPosition({
      x: newX,
      y: newY,
    });
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
  
        <DraggableButton position={position} />
      
    </DndContext>
  );
};

export default Draggable;