import './styles.css'
import IMAGE from './react.png'
import LOGO from './svg-output.svg'

export const App = () => {
    return <>
        <h1>React Typescript Webpack Starter Template - {process.env.name}</h1>
        <img src={IMAGE} alt="React Logo" width="300" height="300"/>
        <img src={LOGO} alt="React Logo" width="300"/>
    </>
}