import Skeleton from '@material-ui/lab/Skeleton';

const LoadingSkeleton = () => {

    return (<>
        <h1><Skeleton variant="text" animation="wave" /></h1>
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="text" animation="wave" />
        <h1><Skeleton variant="text" animation="wave" /></h1>
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="text" animation="wave" />
        <h1><Skeleton variant="text" animation="wave" /></h1>
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="text" animation="wave" />
        <h1><Skeleton variant="text" animation="wave" /></h1>
        <Skeleton variant="text" animation="wave" />
        <Skeleton variant="text" animation="wave" />
    </>)
}

export default LoadingSkeleton