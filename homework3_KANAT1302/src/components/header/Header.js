import classes from  "./header.module.css";
// import classes from "../secondcomponent/comp2.module.css"
function Header () {
    return (
        <ul>
            <li className={classes.names}>main page</li>
            <li className={classes.names}>about page</li>
            <li className={classes.names}>contacts page</li>
        </ul>
    )
}

export default Header;