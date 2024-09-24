import Button from './Button';

function DeletePrompt() {
    return (
        <div className="fixed left-0 right-0 top-1/4 z-20 mx-auto flex w-4/5 flex-col rounded-md bg-white-200 py-9 pl-7 pr-10 shadow-md xm:w-96 md:w-[28rem] dark:bg-darkblue-400">
            <h2 className="mb-2 text-2xl font-bold text-darkblue-600 dark:text-white-200">
                Confirm Deletion
            </h2>
            <p className="mb-7 leading-6 text-grey-500 dark:text-white-200">
                Are you sure you want to delete invoice #XM9141? This action
                cannot be undone.
            </p>

            <div className="ml-auto flex gap-5">
                <Button type="cancel">Cancel</Button>
                <Button type="delete">Delete</Button>
            </div>
        </div>
    );
}

export default DeletePrompt;
