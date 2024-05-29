import React, { useState } from "react";
import './state.css';
function State1() {
    const [name, setName] = useState('Java')
    const [name1, setName1] = useState('Python')
    const [name2, setName2] = useState('html')
    const [name3, setName3] = useState('Css')
    const [name4, setName4] = useState('c program')
    const [name5, setName5] = useState('RactJs')


    function changeName() {
        setName('nodejs')
    }
    function changeName1() {
        setName1('C#')
    }

    function changeName2() {
        setName2('Java Script')
    }
    function changeName3() {
        setName3('Bootsrap')
    }
    function changeName4() {
        setName4('c++')
    }
    function changeName5() {
        setName5('Angular js')
    }

    return (
        <div className="container">
            <h1 className="hname">PROGRAMMING LANGUAGE</h1>
            <div className="row">
                <h1>{name}</h1>
                <button title={'Change State'} onClick={() => changeName()}>{'Change State'}</button>
                <h1>{name1}</h1>
                <button title={'Change State'} onClick={() => changeName1()}>{'Change State'}</button>
                <h1>{name2}</h1>
                <button title={'Change State'} onClick={() => changeName2()}>{'Change State'}</button>
                <h1>{name3}</h1>
                <button title={'Change State'} onClick={() => changeName3()}>{'Change State'}</button>
                <h1>{name4}</h1>
                <button title={'Change State'} onClick={() => changeName4()}>{'Change State'}</button>
                <h1>{name5}</h1>
                <button title={'Change State'} onClick={() => changeName5()}>{'Change State'}</button>
            </div>
        </div>
    )
}
export default State1;