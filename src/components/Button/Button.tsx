import classes from './Button.module.scss';

const Button = ({
    title,
    id,
    isActive,
    clickHandler
}: {
    title: string;
    id: string;
    isActive: boolean;
    clickHandler: (id: string) => void;
}) => {
    return (
        <button className={[classes.btn, isActive ? classes.active : ''].join(' ')}
            id={id}
            onClick={() => clickHandler(id)}>{title}</button>
    );
};

export default Button;
