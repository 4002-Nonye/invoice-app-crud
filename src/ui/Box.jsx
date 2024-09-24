/* eslint-disable react/prop-types */
import Error from './Error';

function Box({ children, label, error }) {
    return (
        <div className="flex w-full flex-col space-y-3 md:w-[unset]">
            <div className="inline-flex justify-between text-sm">
                {label && (
                    <label
                        htmlFor={children.props.id}
                        className={`label ${error && 'errorText'}`}
                    >
                        {label}
                    </label>
                )}
                {error && <Error message={error} />}
            </div>

            {children}
        </div>
    );
}

export default Box;
