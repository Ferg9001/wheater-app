import { Oval } from 'react-loader-spinner';

const Loading = ({size=80}:{size?:number}) => {
    return <Oval
        height={size}
        width={size}
        color="#96B6C5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel='oval-loading'
        secondaryColor="#ADC4CE"
        strokeWidth={2}
        strokeWidthSecondary={2}
    />
}

export default Loading;