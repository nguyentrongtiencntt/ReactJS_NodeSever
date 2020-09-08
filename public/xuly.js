function getName(name){
    alert(name);
}


var Tksoft = React.createClass({
    addstudent: function() {
        this.setState({tongHocVien: this.state.tongHocVien + 1});
    }
    ,
    getInfo: function(){
        alert(this.props.children);
    },
    getInitialState(){
        return {
            tongHocVien: 10
        };
    }
    ,
    render: function(){
        return(
            <div>
                <h1 className="yellow">{this.props.ten}-{this.props.giangvien}</h1>
                <div>So hoc vien: {this.state.tongHocVien}</div>
                <p>{this.props.children}</p>
                <button onClick={()=>{ var str=this.props.giangvien;
                    getName(str)
                    }}>Get Info!</button>
                <button onClick={this.addstudent} >Add student!</button>
                <Sub></Sub> 
            </div>    
        );
    }
});
var Sub = React.createClass({
    render: function(){
        return(
            <h3 className="yellow">Subject!</h3>
        );
    }
});

ReactDOM.render(
    <div>
        <Tksoft ten="Node JS" giangvien="Mr Khoa!">Node JS Tien</Tksoft>
        <Tksoft ten="React JS" giangvien="Mr Pho!">React JS Tien</Tksoft>
    </div>
, document.getElementById('root'));




