/* eslint-disable react/prop-types */
import Button from "./Button";

{
  /* CTAs */
}
function Cta({ isCreating, discard, isEditSession,handleDraft }) {
  return (
    <div className="flex flex-col-reverse justify-center items-center gap-4 p-7 md:flex-row md:justify-between md:gap-7">
      <Button type="discard" btnFn="button" onClick={discard}>
        {isEditSession ? "Cancel" : "Discard"}
      </Button>
      <div className="flex justify-between md:gap-7">
        {!isEditSession && (
          <Button onClick={handleDraft } btnFn="button" type="draft">
            Save as Draft
          </Button>
        )}
        <Button disabled={isCreating} btnFn="submit" type="submit">
          {isEditSession ? "Save Changes" : "Save & Send"}
        </Button>
      </div> 
    </div>
  );
}

export default Cta;
