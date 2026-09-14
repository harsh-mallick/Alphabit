import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../components/ui/dialog"

const DialogViewer = ({ trigger_name, title, description, formElement }) => {
    return (
        <div className='w-full bg-none'>
            <Dialog className="text-white w-96">
                {trigger_name === "+ Upload Project"
                    ? (
                        <DialogTrigger className='bg-green-500 text-black h-9 w-auto font-bold rounded-lg px-2 cursor-pointer border-green-600'>
                            {trigger_name}
                        </DialogTrigger>
                    )
                    : (
                        <div className="text-green-500 h-8 w-auto font-bold rounded-lg px-2 mb-12">
                            <DialogTrigger className="cursor-pointer border-2 p-2 border-green-600 rounded-[10px]">
                                {trigger_name}
                            </DialogTrigger>
                        </div>
                    )
                }
                <DialogContent className='text-white bg-black/85 w-auto'>
                    <DialogHeader>
                        <DialogTitle className='text-white text-2xl font-extrabold text-center'>{title}</DialogTitle>
                        <DialogDescription className='text-lg'>
                            <p className='text-center'>{description}</p>
                            {formElement}
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default DialogViewer
