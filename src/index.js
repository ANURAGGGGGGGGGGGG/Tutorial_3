import React from 'react';
import ReactDOM from 'react-dom/client';
import Todo from './Todo'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<>
<ToastContainer position='bottom-center' theme='dark'/>
<Todo/>
</>

);

