import { useRef, useState } from 'react';

import './form-input.styles.scss';
import eye from './eye.svg';

const FormInput = ({ label, ...otherProps }) => {
    const element = useRef();
    const [showPassword, setShowPassword] = useState(false);
    const isPassword = otherProps.hasOwnProperty('password');
    const type = otherProps?.type ?? "text";

    function toggle(value) {
        if (value) element.current.classList.add('active');
        else element.current.classList.remove('active');
    }

    return (
        <div ref={element} className="group">
            <input
                onFocus={() => toggle(true)}
                onBlur={() => toggle(false)}
                className="form-input"
                {...otherProps}
                style={{"--padding-right": isPassword ? "2.5rem" : "0.625rem"}}
                type={(isPassword && !showPassword) ? "password" : isPassword ? "text" : type}
                autoComplete={isPassword ? "current-password" : ""}
            />
            {label && (<label className={`${otherProps?.value?.length ? 'shrink' : ''} form-input-label`}> {label} </label>)}
            {isPassword && <img src={eye} className="form-input-toggler" alt="Eye icon to toggle password visibility" onClick={() => setShowPassword(prevState => !prevState)} />}
        </div>
    )
}

export default FormInput;