import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import BindingParent from './Components/DataBinding/BindingParent';
import SymbolDataType from './Components/Practice1805/SymbolDataType';
import ArrayOfObjects from './Components/Practice1805/ArrayOfObjects';
import UseEffectComp from './Components/Practice1905/UseEffectDemo';
import EventCustomArgs from './Components/Practice1905/EventCustomArgs';
import PreventDefaultComp from './Components/Practice1905/PreventDefaultDemo';
import UseRefDemo from './Components/Practice2005/UseRefDemo';
import ImgLoadEx from './Components/Practice2005/ImgLoadEx';
import FormikDemo from './Components/Practice2105/FormikDemo';
import UseStateComp from './Components/Practice2505/UseRefRelated/UseStateDemo';
import UseRefHook from './Components/Practice2505/UseRefRelated/UseRefHook';
import UseRefCsWorld from './Components/Practice2505/UseRefRelated/UseRefCsWorld';
import RenderingCheck from './Components/Practice2505/UseRefRelated/RenderingCheck';
import FormikDemoComp from './Components/Practice2505/Formik/FormikDemo';
import OptonalChaining from './Components/Practice2605/OptonalChaining';
import ParentControl from './Components/Practice2605/ControlledCompoentDemo/ParentControl';
import ConditionalRendering from './Components/Practice2605/ControlledCompoentDemo/ConditionalRendering';
import ParentContext from './Components/Practice2605/useContext/ParentContext';
import UseFormDemo from './Components/ReactHookForm/useForm';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UseFormDemo />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
