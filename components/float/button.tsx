import { Button } from '@nextui-org/react';
import Draggable from 'react-draggable';

const FloatingActionButton = () => {
  return (
    <Draggable>
        <div className="fixed bottom-4 right-4 z-50">
            <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Action
            </Button>
        </div>
    </Draggable>
  );
};

export default FloatingActionButton;
