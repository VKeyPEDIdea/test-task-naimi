import classes from './Card.module.scss';

const Card = ({
    children,
    title,
}: {
    children: any,
    title: string,
}) => {
    return (
        <div className={classes.card}>
            <p className={classes.title}>{title}</p>
            {children}
        </div>
    );
};

export default Card;