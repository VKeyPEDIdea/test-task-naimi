import classes from './Row.module.scss';

interface IRow {
    title: string;
    children: any;
}

const Row = ({
    title,
    children,
}: IRow) => {
    return (
        <div className={classes.row}>
            <div className={classes.title}>{title}</div>
            <div className={classes.content}>{children}</div>
        </div>
    );
};

export default Row;