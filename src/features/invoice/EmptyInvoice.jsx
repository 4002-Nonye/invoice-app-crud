import illustratorImg from "../../assets/illustrator.svg";

function EmptyInvoice() {
  return (
    <div className="mt-16 flex flex-col items-center justify-center text-center space-y-6">
      <img src={illustratorImg} alt="illustrator" />

      <div>
        <h1 className="text-4xl mb-4 font-bold">There is nothing here</h1>
        <p>
          Create a new invoice by clicking the <br/> <span className="font-bold" >New Invoice</span> button
          and get started
        </p>
      </div>
    </div>
  );
}

export default EmptyInvoice;
