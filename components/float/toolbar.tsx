import { Card, Button } from '@nextui-org/react';
import Draggable from 'react-draggable';
import {
  AiOutlineHome, AiOutlineSetting, AiOutlineInfoCircle,
  AiOutlineUser, AiOutlineMail, AiOutlineBell,
  AiOutlineCalendar, AiOutlineCamera, AiOutlineCloud,
  AiOutlineComment, AiOutlineBars
} from 'react-icons/ai'; // Assuming AiOutlineBars is the grip/handle icon

type IconButtonProps = {
  Icon: React.ElementType;
};

const IconButton = ({ Icon } : IconButtonProps) => (
  <Button isIconOnly className='bg-white'>
    <Icon size={24} />
  </Button>
);

const Toolbar = () => {
  return (
    <Draggable handle=".drag-handle">
      <div className="fixed bottom-10 left-10 z-50">
        <Card className="w-full max-w-sm px-2 py-4 bg-white shadow-2xl rounded-lg">
            {/* Draggable handle icon */}
            <div className="flex flex-col items-center justify-start gap-4">
              <IconButton Icon={AiOutlineHome} />
              <IconButton Icon={AiOutlineSetting} />
              <IconButton Icon={AiOutlineInfoCircle} />
              <IconButton Icon={AiOutlineUser} />
              <IconButton Icon={AiOutlineMail} />
              <IconButton Icon={AiOutlineBell} />
              <IconButton Icon={AiOutlineCalendar} />
              <IconButton Icon={AiOutlineCamera} />
              <IconButton Icon={AiOutlineCloud} />
              <IconButton Icon={AiOutlineComment} />
              <div className="drag-handle text-center cursor-move rounded-t-lg">
                <AiOutlineBars size={24} /> {/* Draggable Icon */}
              </div>
            </div>
        </Card>
      </div>
    </Draggable>
  );
};

export default Toolbar;





