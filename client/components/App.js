import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
    constructor(){
        super();
        this.state = { 
            tableList : [
                {
                    title : "제목입니다.",
                    content : "내용입니다.",
                    date : "2017-07-15",
                },
                {
                    title : "제목입니다.",
                    content : "내용입니다.",
                    date : "2017-07-15",
                }
            ]
        };
        this.reloadProducts = this.reloadProducts.bind(this);
    }

    reloadProducts(){
        axios.get('/admin/products', {
        }).then( (res) => {
            this.setState({
                tableList : res.data.data
            });
        }).catch( (error) => {
            console.log(error);
        });
    }

    componentDidMount(){
        setTimeout( () => { 
            setInterval( this.reloadProducts() , 5000);
        }, 3000);

        
    }

    

    render() {
        return (
            <div className="container" style={{ paddingTop : "100px" }}>
                <table className="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th>제목</th>
                            <th>작성일</th>
                            <th>삭제</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.tableList.map( (order, key)=>{  
                            return (
                                <tr key={key}>
                                    <td>{ order.title }</td>
                                    <td>{ order.content }</td>
                                    <td>{ order.date }</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;