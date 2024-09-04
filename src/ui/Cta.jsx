import Button from "./Button";

{
  /* CTAs */
}
function Cta() {
  return (
    <div className=" flex  flex-col-reverse justify-center gap-4  p-7 md:flex-row md:justify-between md:gap-7 ">
      <Button type="discard">Discard</Button>
      <div className="flex justify-between md:gap-7">
        <Button type="draft">Save as Draft</Button>
        <Button type="submit">Save & Send</Button>
      </div>
    </div>
  );
}

export default Cta;
