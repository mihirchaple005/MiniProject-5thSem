"use client";

import { Student } from "@prisma/client";
import Modal from "../Modal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import Input from "../inputs/Input";
import Image from 'next/image';
import Button from "../Button";

interface SettingsModalProps {
    currentUser: Student;
    isOpen?: boolean;
    onClose: ()=>void;
}

const SettingsModal:React.FC<SettingsModalProps> = ({currentUser, isOpen, onClose}) => {
   const router = useRouter()
   const [isLoading, setIsLoading] = useState(false);

   const { register, handleSubmit, setValue, watch, formState: {errors} } = useForm<FieldValues>({
    defaultValues: {
        name: currentUser.studentName,
    }
   });

   const image = watch('image')

   const handleUpload = (result:any) => {
    setValue('image', result?.info?.secure_url, {
        shouldValidate: true 
    })
   }

   const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);

    axios.post('/api/settings', data)
    .then(()=> {
        router.refresh();
        onClose();
    })
    .catch(()=> toast.error('Something went wrong! '))
    .finally(() => setIsLoading(false))

   }

    return (
    <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-12">
                <div className="border-b border-gray-900/10 pb-12">
                    <h2 className="text-base font-semibold leading-7 text-gray-900">
                        Profile 
                    </h2>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Edit your public information.
                    </p>

                    <div className="mt-10 flex flex-col gap-y-8">
                        <Input disabled={isLoading} label="Name" id="name" required register={register} errors={errors}/>
                        <div>
                            <label className="block text-sm font-medium leading-6 text-gray-900">Photo</label>
                            <div className="mt-2 flex items-center gap-x-3">
                                <Image src={image || '/images/placeholder.jpg'} width="48" height="48" className="rounded-full" alt="Image"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <Button disabled={isLoading} secondary onClick={onClose} type="button">
                        Cancel 
                    </Button>
                    <Button disabled={isLoading} type="submit">
                        Save  
                    </Button>
                </div>
            </div>
        </form>
    </Modal>
  )
}

export default SettingsModal