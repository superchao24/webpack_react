import React from 'react';
import ReactDom from 'react-dom';
import myimg from './22.jpg';
import './index.css';
class App extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        const pathName=window.location.pathname;
        console.log('lc-pathName1',pathName)
        return(
            <div className="back-img">
                {console.log('lc-img',myimg)}
                <h2>hello react!</h2>
                <h2>aabb</h2>
                <img alt={'项目图片'} src={myimg}/>
                <text>第二张图片</text><br/>
                <img alt={'第二张图'} src={myimg} onClick={()=>{}}/><br/>
                <a href='http://www.baidu.com'>跳转</a>

            </div>
        )
    }
}

ReactDom.render(
    <App/>,
    document.getElementById('root')
);