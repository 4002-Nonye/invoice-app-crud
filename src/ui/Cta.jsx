/* eslint-disable react/prop-types */
import { useForm } from '../context/FormContext';
import Button from './Button';
import Spinner from './Spinner';

{
    /* CTAs */
}
function Cta({ isCreating, discard, handleDraft }) {
    const { isEditSession } = useForm();
    return (
        <div className="flex flex-col-reverse items-center justify-center gap-4 p-7 md:flex-row md:justify-between md:gap-7">
            <Button type="discard" btnFn="button" onClick={discard}>
                {isEditSession ? 'Cancel' : 'Discard'}
            </Button>
            <div className="flex justify-between md:gap-7">
                {!isEditSession && (
                    <Button onClick={handleDraft} btnFn="button" type="draft">
                        Save as Draft
                    </Button>
                )}

                {/* prettier-ignore */}
                <Button disabled={isCreating} btnFn="submit" type="submit">
          {isCreating? <Spinner size='sm'/>:isEditSession ? "Save Changes" : "Save & Send" }
         </Button>
            </div>
        </div>
    );
}

export default Cta;
