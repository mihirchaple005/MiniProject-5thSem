import Button from "../../_components/Button";
import Modal from "../../_components/Modal";
import Input from "../../_components/inputs/Input";
import Select from "../../_components/inputs/Select";
import { Student } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form";
import toast from "react-hot-toast";

interface GroupChatModalProps {
  isOpen?: boolean;
  onClose: () => void;
  students: Student[];
}

const GroupChatModal: React.FC<GroupChatModalProps> = ({ isOpen, onClose, students }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      members: []
    }
  });

  const members = watch('members');

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    axios.post('/api/conversations', {
      ...data,
      isGroup: true
    })
      .then(() => {
        router.refresh();
        onClose();
      })
      .catch(() => toast.error('Something went wrong'))
      .finally(() => setIsLoading(false));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-12">
          <div className="border-b border-gray-700 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-200">
              Create a group chat
            </h2>
            <p className="mt-1 text-sm leading-6 text-gray-400">
              Create a chat with more than two people
            </p>
            <div className="mt-10 flex flex-col gap-y-8">
              <Input 
                disabled={isLoading} 
                register={register} 
                errors={errors} 
                label="Name" 
                id="name" 
                required 
                className="bg-gray-700 text-gray-200 border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <Select 
                disabled={isLoading} 
                label="Members" 
                options={students.map((user) => ({ value: user.id, label: user.studentName }))} 
                onChange={(value) => setValue('members', value, { shouldValidate: true })} 
                value={members} 
                className="bg-gray-700 text-gray-200 border-gray-600 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
        </div>
        <div className="mt-6 flex items-center justify-end gap-x-6">
          <Button 
            disabled={isLoading} 
            onClick={onClose} 
            type="button" 
            secondary 
            className="bg-gray-600 text-gray-100 hover:bg-gray-500"
          >
            Cancel 
          </Button>
          <Button 
            disabled={isLoading} 
            type="submit" 
            className="bg-indigo-600 text-white hover:bg-indigo-500"
          >
            Create 
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default GroupChatModal;
