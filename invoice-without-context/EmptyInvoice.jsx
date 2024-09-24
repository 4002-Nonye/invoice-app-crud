import illustratorImg from '../../assets/illustrator.svg';

function EmptyInvoice() {
    return (
        <div className="mt-16 flex flex-col items-center justify-center space-y-6 text-center dark:text-white-200">
            <img src={illustratorImg} alt="illustrator" />

            <div>
                <h1 className="mb-4 text-4xl font-bold">
                    There is nothing here
                </h1>
                <p>
                    Create a new invoice by clicking the <br />{' '}
                    <span className="font-bold">New Invoice</span> button and
                    get started
                </p>
            </div>
        </div>
    );
}

export default EmptyInvoice;
