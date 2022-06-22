import {Logo} from "../logo/Logo";

export const Footer = (props) => {
    return (
        <div>
            <Logo/>
            <ul>
                <li>phone: {props.phoneHumber}</li>
                <li>email: {props.email}</li>
            </ul>
        </div>

    )
}