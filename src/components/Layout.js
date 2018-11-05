import React, { Component } from 'react';
import Shift from './Shift'

const Data =[
    {
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Mumbai",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},
{
    "id":2,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Bangalore",
    "memberlist":[
        {
            "name":"Tijo Thomas",
        },
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
        
    ]
},
{
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Mumbai",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},
{
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Mumbai",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},
{
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"    Pune",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},
{
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Mumbai",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},
{
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Mumbai",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},
{
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Mumbai",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},
{
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Mumbai",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},
{
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Mumbai",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},
{
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Mumbai",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},{
    "id":1,
    "shift":"First Shift",
    "start":"9:30 am",
    "end":"6:30 pm",
    "location":"Mumbai",
    "memberlist":[
        {
            "name":"Alexa Green",
        },
        {
            "name":"Vinh Tran",
        },
        {
            "name":"Jade Tran",
        },
        {
            "name":"Scott Brown",
        },
        {
            "name":"Dan Ambrov",
        },
        {
            "name":"Max Sworn",
        },
    ]
},]
class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            Schedule:Data
         }
    }
    render() { 
        return ( 
            <div className="iphone">
                <div className="iphone-top">
                <span className="camera"></span>
                <span className="sensor"></span>
                <span className="speaker"></span>
                </div>
                <div className="top-bar"></div>
                <div className="iphone-screen" >
                
                <Shift Schedule={this.state.Schedule} />
           
                </div>
                <div className="buttons">
                <span className="on-off"></span>
                <span className="sleep"></span>
                <span className="up"></span>
                <span className="down"></span>
                </div>
                <div className="bottom-bar"></div>
                <div className="iphone-bottom">
                <span></span>
                </div>
            </div>

            );
    }
}
 
export default Layout;